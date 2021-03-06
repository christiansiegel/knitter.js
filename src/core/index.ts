import { Dimensions, Pin, Shape } from '../types';
import {
    calcPins,
    calcScore,
    circularArrayIndexDistance,
    fadePixels,
    getLineIndices,
    indexOfMax,
    makePinPairId,
} from './algorithms';

export interface Parameters {
    numberOfPins: number;
    shape: Shape;
    dimensions: Dimensions;
    pixels: Uint8ClampedArray;
    fadeRate: number;
    minimalDistance: number;
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export class Core {
    private params?: Parameters = undefined;
    private lineIndicesCache: { [pinPairId: number]: number[] } = {};
    private pinParamsId?: string;
    private pins?: Pin[];
    private usedPinPairIds: { [pinPairId: string]: boolean } = {};
    private pattern?: number[];

    init(params: Parameters): void {
        const pinParamsId = JSON.stringify([params.numberOfPins, params.dimensions, params.shape]);
        if (this.pinParamsId !== pinParamsId) {
            this.pins = calcPins(params.numberOfPins, params.dimensions, params.shape);
            this.pinParamsId = pinParamsId;
            this.lineIndicesCache = {};
        }
        this.usedPinPairIds = {};
        this.pattern = [0];
        this.params = params;
    }

    getPins(): Pin[] {
        if (!this.pins) throw new Error('Core not initialized');
        return this.pins;
    }

    getPattern(): number[] {
        if (!this.pattern) throw new Error('Core not initialized');
        return this.pattern;
    }

    calcPattern(patternLength: number): number[] {
        if (!this.pattern || !this.pins || !this.params) throw new Error('Core not initialized');
        const pins = this.pins;
        const params = this.params;
        for (let i = this.pattern.length; i < patternLength; ++i) {
            const currentPin = this.pins[this.pattern[this.pattern.length - 1]];

            const usedPinPairsFilter = (nextPin: Pin) => {
                return !(makePinPairId(currentPin, nextPin) in this.usedPinPairIds);
            };
            const minDistanceFilter = (nextPin: Pin) => {
                return circularArrayIndexDistance(currentPin.id, nextPin.id, pins.length) >= params.minimalDistance;
            };
            const lineScoreMapper = (nextPin: Pin) => {
                const lineIndices = this.getLineIndicesCached(currentPin, nextPin, params.dimensions.width);
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

            const lineIndices = this.getLineIndicesCached(currentPin, nextPin, params.dimensions.width);
            fadePixels(params.pixels, lineIndices, params.fadeRate);

            this.usedPinPairIds[makePinPairId(currentPin, nextPin)] = true;
            this.pattern.push(nextPin.id);
        }

        return this.pattern.slice(0, patternLength);
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
