import { Dimensions, Pin, Shape } from './types';

interface PatternParams {
    pins: Pin[];
    pixels: Uint8ClampedArray;
    fadeRate: number;
    minimalDistance: number;
}

class PatternCalculation {
    static nextId = 0;

    private _id: number;

    constructor(private params: PatternParams) {
        this._id = ++PatternCalculation.nextId;
    }

    get id(): number {
        return this._id;
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
            return this.calcCirclePins(numberOfPins, dimensions);
        } else {
            return this.calcSquarePins(numberOfPins, dimensions);
        }
    }

    initPatternCalculation(params: PatternParams): number {
        this.patternCalculation = new PatternCalculation(params);
        console.log('[core] new calculation', this.patternCalculation);
        return this.patternCalculation.id;
    }

    async calcPattern(calculationId: number, limit: number): Promise<number[]> {
        if (this.patternCalculation?.id !== calculationId) {
            throw new PatternCalculationExpired(calculationId);
        }
        blockingSleep(100); // calculation will go here
        return [];
    }

    private calcCirclePins(numberOfPins: number, dimensions: Dimensions): Pin[] {
        const diameter = Math.min(dimensions.width, dimensions.height);
        const xOffset = Math.min(0, diameter - dimensions.width) / 2;
        const yOffset = Math.min(0, diameter - dimensions.height) / 2;
        const radius = diameter / 2.0;
        const angle = (Math.PI * 2.0) / numberOfPins;
        const pins = [];
        for (let i = 0; i < numberOfPins; i++) {
            pins.push({
                id: i,
                x: xOffset + Math.round(radius + radius * Math.cos(i * angle)),
                y: yOffset + Math.round(radius + radius * Math.sin(i * angle)),
            });
        }
        return pins;
    }

    private calcSquarePins(numberOfPins: number, dimensions: Dimensions): Pin[] {
        // TODO
        return [
            {
                id: 1,
                x: dimensions.width,
                y: dimensions.height,
            },
        ];
    }
}

function blockingSleep(ms: number): void {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms);
}
