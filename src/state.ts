import { autorun, configure, makeAutoObservable, observable } from 'mobx';
import { Dimensions, Pin, Shape } from './types';
import { LocalStorage } from './util/local-storage';

interface Parameters {
    imageDataUrl?: string;
    dimensions: Dimensions;
    shape: Shape;
    numberOfPins: number;
    numberOfStrings: number;
    fadeRate: number;
    minimalDistance: number;
}

interface State extends Parameters {
    pins?: Pin[];
    pixels?: Uint8ClampedArray;
}

const defaultParams: Parameters = {
    dimensions: { width: 700, height: 700 },
    shape: 'circle',
    numberOfPins: 200,
    numberOfStrings: 3000,
    fadeRate: 50,
    minimalDistance: 10,
};

configure({
    enforceActions: 'observed',
});
class OvervableState implements State {
    imageDataUrl?: string;
    dimensions: Dimensions;
    shape: Shape;
    numberOfPins: number;
    numberOfStrings: number;
    fadeRate: number;
    minimalDistance: number;
    pins?: Pin[] = undefined;
    pixels?: Uint8ClampedArray = undefined;
    pattern?: Pin[] = undefined;

    constructor(init: Parameters) {
        this.imageDataUrl = init.imageDataUrl;
        this.shape = init.shape;
        this.dimensions = init.dimensions;
        this.numberOfPins = init.numberOfPins;
        this.numberOfStrings = init.numberOfStrings;
        this.fadeRate = init.fadeRate;
        this.minimalDistance = init.minimalDistance;
        makeAutoObservable(this, {
            pins: observable.ref,
            pixels: observable.ref,
            pattern: observable.ref,
        });
    }

    setImageDataUrl = (imageDataUrl: string) => (this.imageDataUrl = imageDataUrl);
    setDimensions = (dimensions: Dimensions) => (this.dimensions = dimensions);
    setShape = (shape: Shape) => (this.shape = shape);
    setNumberOfPins = (numberOfPins: number) => (this.numberOfPins = numberOfPins);
    setNumberOfStrings = (numberOfStrings: number) => (this.numberOfStrings = numberOfStrings);
    setFadeRate = (fadeRate: number) => (this.fadeRate = fadeRate);
    setMinimalDistance = (minimalDistance: number) => (this.minimalDistance = minimalDistance);
    setPins = (pins: Pin[]) => (this.pins = pins);
    setPixels = (pixels: Uint8ClampedArray) => (this.pixels = pixels);
    setPattern = (pattern: Pin[]) => (this.pattern = pattern);
}

export const STATE = new OvervableState({
    ...defaultParams,
    ...LocalStorage.loadItems([
        'imageDataUrl',
        'dimensions',
        'numberOfPins',
        'numberOfStrings',
        'shape',
        'numberOfPins',
        'fadeRate',
        'minimalDistance',
    ]),
});

autorun(() => LocalStorage.saveItem('imageDataUrl', STATE.imageDataUrl));
autorun(() => LocalStorage.saveItem('dimensions', STATE.dimensions));
autorun(() => LocalStorage.saveItem('shape', STATE.shape));
autorun(() => LocalStorage.saveItem('numberOfPins', STATE.numberOfPins));
autorun(() => LocalStorage.saveItem('numberOfStrings', STATE.numberOfStrings));
autorun(() => LocalStorage.saveItem('fadeRate', STATE.fadeRate));
autorun(() => LocalStorage.saveItem('minimalDistance', STATE.minimalDistance));
