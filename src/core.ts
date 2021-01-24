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

    private calcSquarePins(numberOfPins: number, dimensions: Dimensions): Pin[] {
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
}

function blockingSleep(ms: number): void {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms);
}
