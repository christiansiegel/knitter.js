import { Dimensions, Pin, Shape } from './types';

interface Params {
    numberOfPins: number;
    shape: Shape;
    dimensions: Dimensions;
    pixels: Uint8ClampedArray;
    fadeRate: number;
    minimalDistance: number;
}

interface Context extends Params {
    id: number;
    pinParamsId: string;
    pins: Pin[];
    usedPinPairIds: { [key: string]: boolean };
    currentPin?: Pin;
}

class ContextExpired extends Error {
    constructor(calculationId: number) {
        super(`Context #${calculationId} expired!`);
    }
}

export class Core {
    private ctx: Context | undefined = undefined;
    private lineIndicesCache: { [key: number]: number[] } = {};

    initContext(params: Params): number {
        const pinParamsId = JSON.stringify([params.numberOfPins, params.dimensions, params.shape]);
        let pins;
        if (this.ctx?.pinParamsId === pinParamsId) {
            pins = this.ctx.pins;
        } else {
            pins = calcPins(params.numberOfPins, params.dimensions, params.shape);
            this.lineIndicesCache = {};
        }
        this.ctx = {
            id: (this.ctx?.id || 0) + 1,
            pinParamsId: pinParamsId,
            pins: pins,
            usedPinPairIds: {},
            ...params,
        };
        console.log('[core] new context #', this.ctx.id);
        return this.ctx.id;
    }

    getPins(contextId: number): Pin[] {
        return this.getContext(contextId).pins;
    }

    calcPattern(contextId: number, limit: number): number[] {
        const ctx = this.getContext(contextId);

        const result: number[] = [];

        for (let i = 0; i < limit; ++i) {
            const currentPin = ctx.currentPin;
            if (!currentPin) {
                ctx.currentPin = ctx.pins[0];
                result.push(0);
                continue;
            }

            const usedPinPairsFilter = (nextPin: Pin) => {
                return !(makePinPairId(currentPin, nextPin) in ctx.usedPinPairIds);
            };
            const minDistanceFilter = (nextPin: Pin) => {
                return circularArrayIndexDistance(currentPin.id, nextPin.id, ctx.pins.length) >= ctx.minimalDistance;
            };
            const lineScoreMapper = (nextPin: Pin) => {
                const lineIndices = this.getLineIndicesCached(currentPin, nextPin, ctx.dimensions.width);
                return calcScore(ctx.pixels, lineIndices);
            };

            let possibleNextPins = ctx.pins.filter(usedPinPairsFilter);
            possibleNextPins = possibleNextPins.filter(minDistanceFilter); // todo: square pattern distances
            const possibleNextLinesScores = possibleNextPins.map(lineScoreMapper);
            const nextPin = possibleNextPins[indexOfMax(possibleNextLinesScores)];

            const lineIndices = this.getLineIndicesCached(currentPin, nextPin, ctx.dimensions.width);
            fadePixels(ctx.pixels, lineIndices, ctx.fadeRate);

            ctx.usedPinPairIds[makePinPairId(currentPin, nextPin)] = true;
            ctx.currentPin = nextPin;
            result.push(nextPin.id);
        }

        return result;
    }

    private getContext(contextId: number): Context {
        if (!this.ctx) {
            throw new Error('Pattern context not initialized!');
        }
        if (this.ctx.id !== contextId) {
            throw new ContextExpired(contextId);
        }
        return this.ctx;
    }

    private getLineIndicesCached(a: Pin, b: Pin, width: number): number[] {
        const key = makePinPairId(a, b);
        if (key in this.lineIndicesCache) {
            return this.lineIndicesCache[key];
        }
        const indices = getLineIndices(a, b, width);
        this.lineIndicesCache[key] = indices;
        return indices;
    }
}

function calcPins(numberOfPins: number, dimensions: Dimensions, shape: Shape): Pin[] {
    if (shape === 'circle') {
        return calcCirclePins(numberOfPins, dimensions);
    } else {
        return calcSquarePins(numberOfPins, dimensions);
    }
}

function indexOfMax(arr: number[]): number {
    let max = -Infinity;
    let maxIndex = -1;
    for (const [i, v] of arr.entries()) {
        if (v > max) {
            maxIndex = i;
            max = v;
        }
    }
    return maxIndex;
}

function calcScore(pixels: Uint8ClampedArray, indices: number[]): number {
    return 0xff - indices.reduce((sum, idx) => sum + pixels[idx], 0) / indices.length;
}

function fadePixels(pixels: Uint8ClampedArray, indices: number[], fadeRate: number) {
    const fade = Math.round((0xff * fadeRate) / 100);
    indices.forEach((idx) => (pixels[idx] = Math.min(0xff, pixels[idx] + fade)));
}

function circularArrayIndexDistance(idx1: number, idx2: number, length: number): number {
    const dist = Math.abs(idx1 - idx2);
    return Math.min(length - dist, dist);
}

function makePinPairId(a: Pin, b: Pin): number {
    return a.id < b.id ? a.id * 1024 + b.id : b.id * 1024 + a.id;
}

function getLineIndices(a: Pin, b: Pin, width: number): number[] {
    const dx = Math.abs(b.x - a.x),
        dy = -Math.abs(b.y - a.y),
        sx = a.x < b.x ? 1 : -1,
        sy = a.y < b.y ? 1 : -1,
        indices = [],
        curr = { ...a };
    let e = dx + dy,
        e2;
    while (true) {
        indices.push(curr.y * width + curr.x);
        if (curr.x == b.x && curr.y == b.y) break;
        e2 = 2 * e;
        if (e2 > dy) {
            e += dy;
            curr.x += sx;
        }
        if (e2 < dx) {
            e += dx;
            curr.y += sy;
        }
    }
    return indices;
}

function calcCirclePins(numberOfPins: number, dimensions: Dimensions): Pin[] {
    const diameter = Math.min(dimensions.width, dimensions.height);
    const xOffset = (dimensions.width - diameter) / 2;
    const yOffset = (dimensions.height - diameter) / 2;
    const radius = diameter / 2.0;
    const angle = (Math.PI * 2.0) / numberOfPins;
    const pins = [];
    for (let i = 0; i < numberOfPins; i++) {
        pins.push({
            id: i,
            x: xOffset + Math.round(radius + radius * Math.sin(i * angle)),
            y: yOffset + Math.round(radius + radius * Math.cos(Math.PI + i * angle)),
        });
    }
    return pins;
}

function calcSquarePins(numberOfPins: number, dimensions: Dimensions): Pin[] {
    const size = Math.min(dimensions.width, dimensions.height);
    const xOffset = (dimensions.width - size) / 2;
    const yOffset = (dimensions.height - size) / 2;
    const pinsPerSide = Math.floor(numberOfPins / 4);
    const pinDistance = size / pinsPerSide;
    const pins = [];
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: xOffset + Math.round(pinDistance * i),
            y: yOffset,
        });
    }
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: xOffset + size,
            y: yOffset + Math.round(pinDistance * i),
        });
    }
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: xOffset + size - Math.round(pinDistance * i),
            y: yOffset + size,
        });
    }
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: xOffset,
            y: yOffset + size - Math.round(pinDistance * i),
        });
    }
    return pins;
}
