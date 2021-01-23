import { autorun, configure, makeAutoObservable, observable } from 'mobx';
import { Dimensions, Pin, Shape } from './types';
import { LocalStorage } from './util/local-storage';

interface Parameters {
    imageDataUrl?: string;
    dimensions: Dimensions;
    shape: Shape;
    numberOfPins: number;
    fadeRate: number;
    minimalDistance: number;
}

interface State extends Parameters {
    pins?: Pin[];
    pixels?: Uint8ClampedArray;
}

const init: Parameters = {
    dimensions: { width: 700, height: 700 },
    shape: 'circle',
    numberOfPins: 200,
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
    fadeRate: number;
    minimalDistance: number;
    pins?: Pin[] = undefined;
    pixels?: Uint8ClampedArray = undefined;

    constructor(init: Parameters) {
        this.imageDataUrl = init.imageDataUrl;
        this.shape = init.shape;
        this.dimensions = init.dimensions;
        this.numberOfPins = init.numberOfPins;
        this.fadeRate = init.fadeRate;
        this.minimalDistance = init.minimalDistance;
        makeAutoObservable(this, {
            pins: observable.ref,
            pixels: observable.ref,
        });
    }

    setImageDataUrl = (imageDataUrl: string) => (this.imageDataUrl = imageDataUrl);
    setDimensions = (dimensions: Dimensions) => (this.dimensions = dimensions);
    setShape = (shape: Shape) => (this.shape = shape);
    setNumberOfPins = (numberOfPins: number) => (this.numberOfPins = numberOfPins);
    setFadeRate = (fadeRate: number) => (this.fadeRate = fadeRate);
    setMinimalDistance = (minimalDistance: number) => (this.minimalDistance = minimalDistance);
    setPins = (pins: Pin[]) => (this.pins = pins);
    setPixels = (pixels: Uint8ClampedArray) => (this.pixels = pixels);
}

export const STATE = new OvervableState({
    ...init,
    ...LocalStorage.loadItems([
        'imageDataUrl',
        'dimensions',
        'numberOfPins',
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
autorun(() => LocalStorage.saveItem('fadeRate', STATE.fadeRate));
autorun(() => LocalStorage.saveItem('minimalDistance', STATE.minimalDistance));
