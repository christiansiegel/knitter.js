import { Dimensions, Pin, Point, Shape } from './types';

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
    usedCombos: { [key: string]: boolean } = {};

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
        cache = {};
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

            const numberOfPins = this.patternCalculation.pins.length;
            const width = this.patternCalculation.dimensions.width;
            const minimalDistance = this.patternCalculation.minimalDistance;
            const usedCombos = this.patternCalculation.usedCombos;
            const possibleNextPins = pins
                .filter((nextPin) => !(pointCombination(currPin, nextPin) in usedCombos))
                .filter(
                    (nextPin) => circularArrayIndexDistance(currPinId, nextPin.id, numberOfPins) >= minimalDistance,
                );

            // todo: square pattern distances

            const pixels = this.patternCalculation.pixels;

            const possibleNextLinesScores = possibleNextPins.map((nextPin) =>
                calcLineScore(pixels, width, currPin, nextPin),
            );

            const nextPin = possibleNextPins[indexOfMax(possibleNextLinesScores)];

            reduceLine(pixels, width, currPin, nextPin, this.patternCalculation.fadeRate);

            this.patternCalculation.usedCombos[pointCombination(currPin, nextPin)] = true;
            this.patternCalculation.currPinId = nextPin.id;
            result.push(nextPin.id);
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

function calcLineScore(pixels: Uint8ClampedArray, width: number, a: Pin, b: Pin) {
    const indices = getLineIndices(a, b, width);
    return 0xff - indices.reduce((sum, idx) => sum + pixels[idx], 0) / indices.length;
}

function reduceLine(pixels: Uint8ClampedArray, width: number, a: Pin, b: Pin, fadeRate: number) {
    const fade = Math.round((0xff * fadeRate) / 100);
    const indices = getLineIndices(a, b, width);
    indices.forEach((idx) => (pixels[idx] = Math.min(0xff, pixels[idx] + fade)));
}

function circularArrayIndexDistance(idx1: number, idx2: number, length: number): number {
    const dist = Math.abs(idx1 - idx2);
    return Math.min(length - dist, dist);
}

let cache: { [key: string]: number[] } = {};

function comparePoints(a: Point, b: Point): number {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return +1;
    if (a.y < b.y) return -1;
    if (a.y > b.y) return +1;
    return 0;
}

function pointCombination(a: Point, b: Point): string {
    [a, b] = comparePoints(a, b) > 0 ? [a, b] : [b, a];
    return JSON.stringify({ ax: a.x, ay: a.y, bx: b.x, by: b.y });
}

function getLineIndices(a: Point, b: Point, width: number): number[] {
    const key = pointCombination(a, b) + width;
    const cached = cache[key];
    if (cached) return cached;
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
    cache[key] = indices;
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
