import { Dimensions, Pin, Shape } from '../types';
import {
    calcPins,
    calcScore,
    circularArrayIndexDistance,
    getLineIndices,
    indexOfMax,
    lightenUp,
    makePinPairId,
} from './algorithms';
import { cachify } from './cachify';

export interface Parameters {
    numberOfPins: number;
    shape: Shape;
    dimensions: Dimensions;
    pixels: Uint8ClampedArray;
    fadeRate: number;
    minimalDistance: number;
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface Loom {
    pins: Pin[];
    getLineIndices: typeof getLineIndices;
}

const createLoom = cachify(
    (numberOfPins: number, dimensions: Dimensions, shape: Shape): Loom => ({
        pins: calcPins(numberOfPins, dimensions, shape),
        getLineIndices: cachify(getLineIndices, { keyFn: makePinPairId }),
    }),
    { cacheSize: 1 },
);

export class Core {
    private loom?: Loom;
    private params?: Parameters = undefined;
    private usedPinPairIds: { [pinPairId: string]: boolean } = {};
    private pattern?: number[];

    init(params: Parameters): void {
        this.loom = createLoom(params.numberOfPins, params.dimensions, params.shape);
        this.usedPinPairIds = {};
        this.pattern = [0];
        this.params = params;
    }

    getPins(): Pin[] {
        if (!this.loom) throw new Error('Core not initialized');
        return this.loom.pins;
    }

    getPattern(): number[] {
        if (!this.pattern) throw new Error('Core not initialized');
        return this.pattern;
    }

    calcPattern(patternLength: number): number[] {
        if (!this.pattern || !this.loom || !this.params) throw new Error('Core not initialized');
        const loom = this.loom;
        const pins = loom.pins;
        const params = this.params;
        for (let i = this.pattern.length; i < patternLength; ++i) {
            const currentPin = pins[this.pattern[this.pattern.length - 1]];

            const usedPinPairsFilter = (nextPin: Pin) => {
                return !(makePinPairId(currentPin, nextPin) in this.usedPinPairIds);
            };
            const minDistanceFilter = (nextPin: Pin) => {
                return circularArrayIndexDistance(currentPin.id, nextPin.id, pins.length) >= params.minimalDistance;
            };
            const lineScoreMapper = (nextPin: Pin) => {
                const lineIndices = loom.getLineIndices(currentPin, nextPin, params.dimensions.width);
                return calcScore(params.pixels, lineIndices);
            };

            let possibleNextPins = pins.filter(usedPinPairsFilter);
            possibleNextPins = possibleNextPins.filter(minDistanceFilter); // todo: square pattern distances
            if (possibleNextPins.length === 0) {
                return this.pattern; // all pins used
            }
            const possibleNextLinesScores = possibleNextPins.map(lineScoreMapper);
            const nextPin = possibleNextPins[indexOfMax(possibleNextLinesScores)];
            if (nextPin === undefined) console.log(possibleNextPins);

            const lineIndices = loom.getLineIndices(currentPin, nextPin, params.dimensions.width);
            lightenUp(params.pixels, lineIndices, Math.round((0xff * params.fadeRate) / 100));

            this.usedPinPairIds[makePinPairId(currentPin, nextPin)] = true;
            this.pattern.push(nextPin.id);
        }

        return this.pattern.slice(0, patternLength);
    }
}
