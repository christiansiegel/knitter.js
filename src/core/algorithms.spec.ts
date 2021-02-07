import { Dimensions, Pin } from '../types';
import {
    calcPins,
    calcScore,
    circularArrayIndexDistance,
    getLineIndices,
    indexOfMax,
    lightenUp,
    makePinPairId,
} from './algorithms';

describe('indexOfMax()', () => {
    it('should return the index of the greatest value in an array', () => {
        expect(indexOfMax([1, 2, 3, 4, -1, -5])).toBe(3);
        expect(indexOfMax([-1, -5, -4])).toBe(0);
    });
    it('should return -1 for an empty array', () => {
        expect(indexOfMax([])).toBe(-1);
    });
    it('should return the index of the first greates value if multiple', () => {
        expect(indexOfMax([1, 2, 2])).toBe(1);
    });
});

describe('makePinPairId()', () => {
    const pin1: Pin = { id: 1, x: 0, y: 0 };
    const pin2: Pin = { id: 2000, x: 0, y: 0 };
    const pin3: Pin = { id: 3, x: 0, y: 0 };
    it('should create a unique id from two pins independent of order', () => {
        const idA = makePinPairId(pin1, pin2);
        const idB = makePinPairId(pin2, pin1);
        const idC = makePinPairId(pin1, pin3);
        expect(idA).toEqual(idB);
        expect(idA).not.toEqual(idC);
    });
});

describe('circularArrayIndexDistance()', () => {
    it('should return the distance between two indices of a circular array', () => {
        expect(circularArrayIndexDistance(0, 1, 100)).toBe(1);
        expect(circularArrayIndexDistance(1, 0, 100)).toBe(1);

        expect(circularArrayIndexDistance(0, 49, 100)).toBe(49);
        expect(circularArrayIndexDistance(49, 0, 100)).toBe(49);

        expect(circularArrayIndexDistance(0, 50, 100)).toBe(50);
        expect(circularArrayIndexDistance(50, 0, 100)).toBe(50);

        expect(circularArrayIndexDistance(0, 51, 100)).toBe(49);
        expect(circularArrayIndexDistance(51, 0, 100)).toBe(49);

        expect(circularArrayIndexDistance(0, 80, 100)).toBe(20);
        expect(circularArrayIndexDistance(80, 0, 100)).toBe(20);
    });
});

describe('calcScore()', () => {
    const pixels = new Uint8ClampedArray([0, 1, 2, 100, 255]);
    it('should return high scores for dark pixels: f(x) = 255 - x', () => {
        expect(calcScore(pixels, [0])).toBe(255 - 0);
        expect(calcScore(pixels, [1])).toBe(255 - 1);
        expect(calcScore(pixels, [2])).toBe(255 - 2);
        expect(calcScore(pixels, [3])).toBe(255 - 100);
        expect(calcScore(pixels, [4])).toBe(255 - 255);
    });
    it('should average the score independent of the pixel count', () => {
        expect(calcScore(pixels, [0, 1, 2, 3, 4])).toBe((255 + 254 + 253 + 155 + 0) / 5);
    });
});

describe('lightenUp()', () => {
    let pixels: Uint8ClampedArray;
    beforeEach(() => {
        pixels = new Uint8ClampedArray([0, 1, 2, 100]);
    });
    it('should lighten up selected pixels by a given value', () => {
        lightenUp(pixels, [0, 1, 3], 100);
        expect(pixels).toEqual(new Uint8ClampedArray([100, 101, 2, 200]));
    });
    it('should max out at 255', () => {
        lightenUp(pixels, [0, 1, 3], 200);
        expect(pixels).toEqual(new Uint8ClampedArray([200, 201, 2, 255]));
    });
});

describe('getLineIndices()', () => {
    // example 5x3 image:
    //  0  1  2  3  4
    //  5  6  7  8  9
    // 10 11 12 13 14
    const pin1: Pin = { id: 0, x: 0, y: 0 }; // top-left
    const pin2: Pin = { id: 0, x: 4, y: 0 }; // top-right
    const pin3: Pin = { id: 0, x: 0, y: 2 }; // bottom-left
    const pin4: Pin = { id: 0, x: 4, y: 2 }; // bottom-right
    it('should return indices of horizontal line between two pins', () => {
        expect(getLineIndices(pin1, pin2, 5)).toEqual([0, 1, 2, 3, 4]);
        expect(getLineIndices(pin2, pin1, 5)).toEqual([0, 1, 2, 3, 4]);

        expect(getLineIndices(pin3, pin4, 5)).toEqual([10, 11, 12, 13, 14]);
        expect(getLineIndices(pin4, pin3, 5)).toEqual([10, 11, 12, 13, 14]);
    });
    it('should return indices of vertical line between two pins', () => {
        expect(getLineIndices(pin1, pin3, 5)).toEqual([0, 5, 10]);
        expect(getLineIndices(pin3, pin1, 5)).toEqual([0, 5, 10]);

        expect(getLineIndices(pin2, pin4, 5)).toEqual([4, 9, 14]);
        expect(getLineIndices(pin4, pin2, 5)).toEqual([4, 9, 14]);
    });

    it('should return indices of diagonal line between two pins', () => {
        expect(getLineIndices(pin1, pin4, 5)).toEqual([0, 1, 7, 8, 14]);
        expect(getLineIndices(pin4, pin1, 5)).toEqual([0, 1, 7, 8, 14]);

        expect(getLineIndices(pin2, pin3, 5)).toEqual([4, 3, 7, 6, 10]);
        expect(getLineIndices(pin3, pin2, 5)).toEqual([4, 3, 7, 6, 10]);
    });
});

describe('calcPins()', () => {
    const expectAllPinsInsideDimensions = (pins: Pin[], dimensions: Dimensions): void => {
        expect(pins.find((p) => p.x >= dimensions.width)).toBeUndefined();
        expect(pins.find((p) => p.y >= dimensions.height)).toBeUndefined();
        expect(pins.find((p) => p.x < 0)).toBeUndefined();
        expect(pins.find((p) => p.y < 0)).toBeUndefined();
    };
    const visualizePins = (pins: Pin[], dimensions: Dimensions): string[] => {
        const visualization: string[] = [];
        for (let y = 0; y < dimensions.height; y++) {
            visualization.push('');
            for (let x = 0; x < dimensions.width; x++) {
                const pin = pins.find((p) => p.x === x && p.y === y);
                visualization[y] += pin ? `[${pin.id.toString(36)}]` : '[ ]';
            }
        }
        return visualization;
    };
    describe('with circle shape', () => {
        it('should calculate pin positions on a square with odd side length', () => {
            const dimensions = { width: 5, height: 5 };
            let pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][0][ ][ ]',
                '[ ][ ][ ][ ][ ]',
                '[3][ ][ ][ ][1]',
                '[ ][ ][ ][ ][ ]',
                '[ ][ ][2][ ][ ]',
            ]);
            pins = calcPins(8, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][0][ ][ ]',
                '[ ][7][ ][1][ ]',
                '[6][ ][ ][ ][2]',
                '[ ][5][ ][3][ ]',
                '[ ][ ][4][ ][ ]',
            ]);
            pins = calcPins(16, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][f][0][1][ ]',
                '[d][e][ ][2][3]',
                '[c][ ][ ][ ][4]',
                '[b][a][ ][6][5]',
                '[ ][9][8][7][ ]',
            ]);
        });
        it('should calculate pin positions on a square with even side length', () => {
            let dimensions = { width: 4, height: 4 };
            let pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][0][ ][ ]',
                '[3][ ][1][ ]',
                '[ ][2][ ][ ]',
                '[ ][ ][ ][ ]',
            ]);
            pins = calcPins(8, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[7][0][1][ ]',
                '[6][ ][2][ ]',
                '[5][4][3][ ]',
                '[ ][ ][ ][ ]',
            ]);
            dimensions = { width: 8, height: 8 };
            pins = calcPins(17, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][g][0][1][ ][ ][ ]',
                '[ ][f][ ][ ][ ][2][ ][ ]',
                '[e][ ][ ][ ][ ][ ][3][ ]',
                '[d][ ][ ][ ][ ][ ][4][ ]',
                '[c][ ][ ][ ][ ][ ][5][ ]',
                '[ ][b][ ][ ][ ][6][ ][ ]',
                '[ ][a][9][ ][8][7][ ][ ]',
                '[ ][ ][ ][ ][ ][ ][ ][ ]',
            ]);
        });
        it('should place circle in center of a rectangle with odd side lengths', () => {
            let dimensions = { width: 5, height: 7 };
            let pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][ ][ ]',
                '[ ][ ][0][ ][ ]',
                '[ ][ ][ ][ ][ ]',
                '[3][ ][ ][ ][1]',
                '[ ][ ][ ][ ][ ]',
                '[ ][ ][2][ ][ ]',
                '[ ][ ][ ][ ][ ]',
            ]);
            dimensions = { width: 7, height: 5 };
            pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][0][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
                '[ ][3][ ][ ][ ][1][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
                '[ ][ ][ ][2][ ][ ][ ]',
            ]);
        });
        it('should place circle in center of a rectangle with even side lengths', () => {
            let dimensions = { width: 4, height: 6 };
            let pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][ ]',
                '[ ][0][ ][ ]',
                '[3][ ][1][ ]',
                '[ ][2][ ][ ]',
                '[ ][ ][ ][ ]',
                '[ ][ ][ ][ ]',
            ]);
            dimensions = { width: 6, height: 4 };
            pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][0][ ][ ][ ]',
                '[ ][3][ ][1][ ][ ]',
                '[ ][ ][2][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ]',
            ]);
        });
        it('should place circle in center of a rectangle with odd long and even short side length', () => {
            let dimensions = { width: 7, height: 4 };
            let pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][0][ ][ ][ ]',
                '[ ][ ][3][ ][1][ ][ ]',
                '[ ][ ][ ][2][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
            ]);
            dimensions = { width: 4, height: 7 };
            pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][ ]',
                '[ ][ ][ ][ ]',
                '[ ][0][ ][ ]',
                '[3][ ][1][ ]',
                '[ ][2][ ][ ]',
                '[ ][ ][ ][ ]',
                '[ ][ ][ ][ ]',
            ]);
        });
        it('should place circle in center of a rectangle with even long and odd short side length', () => {
            let dimensions = { width: 3, height: 6 };
            let pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ]',
                '[ ][ ][ ]',
                '[ ][0][ ]',
                '[3][ ][1]',
                '[ ][2][ ]',
                '[ ][ ][ ]',
            ]);
            dimensions = { width: 6, height: 3 };
            pins = calcPins(4, dimensions, 'circle');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][0][ ][ ]',
                '[ ][ ][3][ ][1][ ]',
                '[ ][ ][ ][2][ ][ ]',
            ]);
        });
    });
    describe('with square shape', () => {
        it('should calculate pin positions on a square with odd side length', () => {
            const dimensions = { width: 5, height: 5 };
            let pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[0][ ][ ][ ][1]',
                '[ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ]',
                '[3][ ][ ][ ][2]',
            ]);
            pins = calcPins(8, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[0][ ][1][ ][2]',
                '[ ][ ][ ][ ][ ]',
                '[7][ ][ ][ ][3]',
                '[ ][ ][ ][ ][ ]',
                '[6][ ][5][ ][4]',
            ]);
            pins = calcPins(12, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[0][1][ ][2][3]',
                '[b][ ][ ][ ][4]',
                '[ ][ ][ ][ ][ ]',
                '[a][ ][ ][ ][5]',
                '[9][8][ ][7][6]',
            ]);
        });
        it('should calculate pin positions on a square with even side length', () => {
            let dimensions = { width: 4, height: 4 };
            let pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[0][ ][ ][1]',
                '[ ][ ][ ][ ]',
                '[ ][ ][ ][ ]',
                '[3][ ][ ][2]',
            ]);
            pins = calcPins(8, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[0][ ][1][2]',
                '[7][ ][ ][ ]',
                '[ ][ ][ ][3]',
                '[6][5][ ][4]',
            ]);
            dimensions = { width: 8, height: 8 };
            pins = calcPins(17, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[0][ ][1][ ][2][3][ ][4]',
                '[ ][ ][ ][ ][ ][ ][ ][ ]',
                '[f][ ][ ][ ][ ][ ][ ][5]',
                '[e][ ][ ][ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ][ ][6]',
                '[d][ ][ ][ ][ ][ ][ ][7]',
                '[ ][ ][ ][ ][ ][ ][ ][ ]',
                '[c][ ][b][a][ ][9][ ][8]',
            ]);
        });
        it('should place square in center of a rectangle with odd side lengths', () => {
            let dimensions = { width: 5, height: 7 };
            let pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][ ][ ]',
                '[0][ ][ ][ ][1]',
                '[ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ]',
                '[3][ ][ ][ ][2]',
                '[ ][ ][ ][ ][ ]',
            ]);
            dimensions = { width: 7, height: 5 };
            pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][0][ ][ ][ ][1][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
                '[ ][3][ ][ ][ ][2][ ]',
            ]);
        });
        it('should place square in center of a rectangle with even side lengths', () => {
            let dimensions = { width: 4, height: 6 };
            let pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][ ]',
                '[0][ ][ ][1]',
                '[ ][ ][ ][ ]',
                '[ ][ ][ ][ ]',
                '[3][ ][ ][2]',
                '[ ][ ][ ][ ]',
            ]);
            dimensions = { width: 6, height: 4 };
            pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][0][ ][ ][1][ ]',
                '[ ][ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ]',
                '[ ][3][ ][ ][2][ ]',
            ]);
        });
        it('should place square in center of a rectangle with odd long and even short side length', () => {
            let dimensions = { width: 7, height: 4 };
            let pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][0][ ][ ][1][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
                '[ ][ ][ ][ ][ ][ ][ ]',
                '[ ][ ][3][ ][ ][2][ ]',
            ]);
            dimensions = { width: 4, height: 7 };
            pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ][ ]',
                '[ ][ ][ ][ ]',
                '[0][ ][ ][1]',
                '[ ][ ][ ][ ]',
                '[ ][ ][ ][ ]',
                '[3][ ][ ][2]',
                '[ ][ ][ ][ ]',
            ]);
        });
        it('should place square in center of a rectangle with even long and odd short side length', () => {
            let dimensions = { width: 3, height: 6 };
            let pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][ ]',
                '[ ][ ][ ]',
                '[0][ ][1]',
                '[ ][ ][ ]',
                '[3][ ][2]',
                '[ ][ ][ ]',
            ]);
            dimensions = { width: 6, height: 3 };
            pins = calcPins(4, dimensions, 'square');
            expectAllPinsInsideDimensions(pins, dimensions);
            expect(visualizePins(pins, dimensions)).toEqual([
                '[ ][ ][0][ ][1][ ]',
                '[ ][ ][ ][ ][ ][ ]',
                '[ ][ ][3][ ][2][ ]',
            ]);
        });
    });
});
