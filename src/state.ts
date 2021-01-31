import { autorun, computed, configure, makeAutoObservable, observable } from 'mobx';
import { Dimensions, Pin, Shape } from './types';
import { LocalStorage } from './util/local-storage';
import { Parameters as CoreParameters } from './core';

interface Parameters {
    imageDataUrl: string;
    dimensions: Dimensions;
    shape: Shape;
    numberOfPins: number;
    numberOfStrings: number;
    fadeRate: number;
    minimalDistance: number;
}

configure({
    enforceActions: 'observed',
});
class State implements Parameters {
    imageDataUrl: string;
    dimensions: Dimensions;
    shape: Shape;
    numberOfPins: number;
    numberOfStrings: number;
    fadeRate: number;
    minimalDistance: number;
    pins?: Pin[] = undefined;
    pixels?: Uint8ClampedArray = undefined;
    pattern?: number[] = undefined;

    private coreId = '';

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
            coreParams: computed,
            isCoreInitialized: computed,
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
    setPattern = (pattern: number[]) => (this.pattern = pattern);
    setCoreId = (coreId: string) => (this.coreId = coreId);

    get coreParams(): CoreParameters | undefined {
        if (!this.pixels) return undefined;
        return {
            id: Date.now() + '' + Math.random(),
            dimensions: { ...this.dimensions },
            pixels: this.pixels,
            fadeRate: this.fadeRate,
            minimalDistance: this.minimalDistance,
            shape: this.shape,
            numberOfPins: this.numberOfPins,
        };
    }

    get isCoreInitialized(): boolean {
        return this.coreId === this.coreParams?.id;
    }
}
export function loadState(defaultParams: Parameters): State {
    const state = new State({
        ...defaultParams,
        ...LocalStorage.loadItems([
            'imageDataUrl',
            'dimensions',
            'numberOfPins',
            'numberOfStrings',
            'shape',
            'fadeRate',
            'minimalDistance',
        ]),
    });
    autorun(() => LocalStorage.saveItem('imageDataUrl', state.imageDataUrl));
    autorun(() => LocalStorage.saveItem('dimensions', state.dimensions));
    autorun(() => LocalStorage.saveItem('shape', state.shape));
    autorun(() => LocalStorage.saveItem('numberOfPins', state.numberOfPins));
    autorun(() => LocalStorage.saveItem('numberOfStrings', state.numberOfStrings));
    autorun(() => LocalStorage.saveItem('fadeRate', state.fadeRate));
    autorun(() => LocalStorage.saveItem('minimalDistance', state.minimalDistance));
    return state;
}
