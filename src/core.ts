import { Dimensions, Pin, Shape } from './types';

interface PatternParams {
    pins: Pin[];
    dimensions: Dimensions;
    pixels: Uint8ClampedArray;
    fadeRate: number;
    minimalDistance: number;
}

let nextId = 0;

class PatternCalculation {
    private _id: number;

    currPinId = -1;

    constructor(private _params: PatternParams) {
        this._id = ++nextId;
    }

    get id(): number {
        return this._id;
    }

    get pins(): Pin[] {
        return this._params.pins;
    }

    get minimalDistance(): number {
        return this._params.minimalDistance;
    }

    get fadeRate(): number {
        return this._params.fadeRate;
    }

    get pixels(): Uint8ClampedArray {
        return this._params.pixels;
    }

    get dimensions(): Dimensions {
        return this._params.dimensions;
    }
}

class PatternCalculationExpired extends Error {
    constructor(calculationId: number) {
        super(`Pattern calculation #${calculationId} expired!`);
    }
}

export class Core {
    private patternCalculation?: PatternCalculation;

    calcPins(numberOfPins: number, dimensions: Dimensions, shape: Shape): Pin[] {
        if (shape === 'circle') {
            return calcCirclePins(numberOfPins, dimensions);
        } else {
            return calcSquarePins(numberOfPins, dimensions);
        }
    }

    initPatternCalculation(params: PatternParams): number {
        //this.patternCalculation?.linesIndices?.clear();
        this.patternCalculation = new PatternCalculation(params);
        console.log('[core] new calculation', this.patternCalculation);
        return this.patternCalculation.id;
    }

    async calcPattern(calculationId: number, limit: number): Promise<number[]> {
        if (!this.patternCalculation) {
            throw new Error('Pattern calculation not initialized!');
        }
        if (this.patternCalculation.id !== calculationId) {
            throw new PatternCalculationExpired(calculationId);
        }

        const result: number[] = [];

        const pins = this.patternCalculation.pins;

        for (let i = 0; i < limit; ++i) {
            const currPinId = this.patternCalculation.currPinId;
            if (currPinId < 0) {
                this.patternCalculation.currPinId = 0;
                result.push(0);
                continue;
            }
            const currPin = pins[currPinId];
            let possibleNextPinIds = this.patternCalculation.pins.map((pin) => pin.id);

            const numberOfPins = this.patternCalculation.pins.length;
            const dimensions = this.patternCalculation.dimensions;
            const minimalDistance = this.patternCalculation.minimalDistance;
            possibleNextPinIds = possibleNextPinIds.filter(
                (nextPinId) => circularArrayIndexDistance(currPinId, nextPinId, numberOfPins) >= minimalDistance,
            );

            const pixels = this.patternCalculation.pixels;

            const possibleNextLinesScores = possibleNextPinIds.map((nextPinId) =>
                calcLineScore(pixels, currPin, pins[nextPinId], dimensions),
            );

            const idxMax = indexOfMax(possibleNextLinesScores);
            const nextPinId = possibleNextPinIds[idxMax];

            reduceLine(pixels, currPin, pins[nextPinId], dimensions, this.patternCalculation.fadeRate);

            this.patternCalculation.currPinId = nextPinId;
            result.push(nextPinId);
        }

        return result;
    }
}

function indexOfMax(arr: number[]) {
    if (arr.length === 0) {
        return -1;
    }
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

function calcLineScore(pixels: Uint8ClampedArray, a: Pin, b: Pin, dimensions: Dimensions) {
    const indices = getLineIndices(a, b, dimensions);
    return 0xff - indices.reduce((sum, idx) => sum + pixels[idx], 0) / indices.length;
}

function reduceLine(pixels: Uint8ClampedArray, a: Pin, b: Pin, dimensions: Dimensions, fadeRate: number) {
    const fade = Math.round((0xff * fadeRate) / 100);
    const indices = getLineIndices(a, b, dimensions);
    indices.forEach((idx) => (pixels[idx] = Math.min(0xff, pixels[idx] + fade)));
}

function circularArrayIndexDistance(idx1: number, idx2: number, length: number): number {
    const dist = Math.abs(idx1 - idx2);
    return Math.min(length - dist, dist);
}

function toLineKey(pin1Id: number, pin2Id: number) {
    return Math.min(pin1Id, pin2Id) + ':' + Math.max(pin1Id, pin2Id);
}

function getLineIndices(a: Pin, b: Pin, dimensions: Dimensions): number[] {
    const dx = Math.abs(b.x - a.x);
    const dy = -Math.abs(b.y - a.y);
    const sx = a.x < b.x ? 1 : -1;
    const sy = a.y < b.y ? 1 : -1;
    let e = dx + dy,
        e2;
    const curr = { ...a };
    const indices = [];
    while (true) {
        indices.push(curr.y * dimensions.width + curr.x);
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
