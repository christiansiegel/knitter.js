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

    linesIndices?: Map<string, number[]>;
    pattern: number[] = [];

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
        this.patternCalculation?.linesIndices?.clear();
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
        if (!this.patternCalculation.linesIndices) {
            console.time('lines');
            this.patternCalculation.linesIndices = getLinesIndices(
                this.patternCalculation.pins,
                this.patternCalculation.dimensions,
            );
            console.timeEnd('lines');
        }

        const result: number[] = [];

        if (this.patternCalculation.pattern.length === 0) {
            this.patternCalculation.pattern.push(0);
            result.push(0);
            limit--;
        }

        for (let i = 0; i < limit; ++i) {
            const currPinId = this.patternCalculation.pattern[this.patternCalculation.pattern.length - 1];
            let possibleNextPinIds = this.patternCalculation.pins.map((pin) => pin.id);

            const numberOfPins = this.patternCalculation.pins.length;
            const minimalDistance = this.patternCalculation.minimalDistance;
            possibleNextPinIds = possibleNextPinIds.filter(
                (nextPinId) => circularArrayIndexDistance(currPinId, nextPinId, numberOfPins) >= minimalDistance,
            );

            const lines = this.patternCalculation.linesIndices;
            const possibleNextLines = possibleNextPinIds
                .map((nextPinId) => toLineKey(currPinId, nextPinId))
                .map((lineKey) => lines.get(lineKey) || []);

            const pixels = this.patternCalculation.pixels;
            const possibleNextLinesScores = possibleNextLines.map((line) => calcLineScore(pixels, line));

            const idxMax = indexOfMax(possibleNextLinesScores);
            const nextLine = possibleNextLines[idxMax];
            const nextPinId = possibleNextPinIds[idxMax];

            reduceLine(pixels, nextLine, this.patternCalculation.fadeRate);

            this.patternCalculation.linesIndices.delete(toLineKey(currPinId, nextPinId));
            this.patternCalculation.pattern.push(nextPinId);
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

function calcLineScore(pixels: Uint8ClampedArray, pixelIndices: number[]) {
    if (pixelIndices.length === 0) return 0;
    return 0xff - pixelIndices.reduce((sum, idx) => sum + pixels[idx], 0) / pixelIndices.length;
}

function reduceLine(pixels: Uint8ClampedArray, pixelIndices: number[], fadeRate: number) {
    const fade = Math.round((0xff * fadeRate) / 100);
    pixelIndices.forEach((idx) => (pixels[idx] = Math.min(0xff, pixels[idx] + fade)));
}

function circularArrayIndexDistance(idx1: number, idx2: number, length: number): number {
    const dist = Math.abs(idx1 - idx2);
    return Math.min(length - dist, dist);
}

function getLinesIndices(pins: Pin[], dimensions: Dimensions) {
    const linesIndices: Map<string, number[]> = new Map();
    for (let i = 0; i < pins.length; i++) {
        for (let j = i + 1; j < pins.length; j++) {
            const indices = getLineIndices(pins[i], pins[j], dimensions);
            const lineKey = toLineKey(pins[i].id, pins[j].id);
            linesIndices.set(lineKey, indices);
        }
    }
    return linesIndices;
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
