import { action, autorun, makeObservable, observable, reaction } from 'mobx';
import { Dimensions, Pin } from './types';

function sleep(delayMillis: number): void {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delayMillis);
}

export class CoreParams {
    imageDimensions?: Dimensions = undefined;
    imageData?: Uint8ClampedArray = undefined;
    numberOfPins?: number = undefined;

    constructor() {
        makeObservable(this, {
            imageDimensions: observable,
            imageData: observable,
            numberOfPins: observable,

            setImageDimensions: action,
            setImageData: action,
            setNumberOfPins: action,
        });
    }

    setImageDimensions(imageDimensions: Dimensions): void {
        this.imageDimensions = imageDimensions;
    }

    setImageData(imageData: Uint8ClampedArray): void {
        this.imageData = imageData;
    }

    setNumberOfPins(numberOfPins: number): void {
        this.numberOfPins = numberOfPins;
    }
}

export class Core {
    private params: CoreParams = new CoreParams();

    private pinsSubscriptions: ((pins: Pin[]) => void)[] = [];

    constructor() {
        autorun(() => {
            const imageDimensions = this.params.imageDimensions;
            const numberOfPins = this.params.numberOfPins;
            if (!numberOfPins || !imageDimensions) return;
            const pins = this.calcPins(imageDimensions, numberOfPins);
            this.pinsSubscriptions.forEach((handler) => handler(pins));
        });
    }

    setImageDimensions(imageDimensions: Dimensions): void {
        this.params.setImageDimensions(imageDimensions);
    }

    setImageData(imageData: Uint8ClampedArray): void {
        this.params.setImageData(imageData);
    }

    setNumberOfPins(numberOfPins: number): void {
        this.params.setNumberOfPins(numberOfPins);
    }

    addPinsSubscription(handler: (pins: Pin[]) => void): void {
        this.pinsSubscriptions.push(handler);
    }

    private calcPins(dimensions: Dimensions, numberOfPins: number): Pin[] {
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
}
