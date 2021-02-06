import { autorun, computed, configure, makeAutoObservable, observable } from 'mobx';
import { Dimensions, Pin, Shape } from './types';
import { SessionStorage } from './util/session-storage';
import { Parameters as CoreParameters } from './core';

export interface Parameters {
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
    private coreId = '';
    private parameterKeys: (keyof Parameters)[];

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

    constructor(init: Parameters) {
        this.parameterKeys = <(keyof Parameters)[]>Object.keys(init);
        this.imageDataUrl = init.imageDataUrl;
        this.shape = init.shape;
        this.dimensions = init.dimensions;
        this.numberOfPins = init.numberOfPins;
        this.numberOfStrings = init.numberOfStrings;
        this.fadeRate = init.fadeRate;
        this.minimalDistance = init.minimalDistance;
        makeAutoObservable<State, 'parameterKeys'>(this, {
            parameterKeys: false,
            pins: observable.ref,
            pixels: observable.ref,
            pattern: observable.ref,
            parameters: false,
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
    setParameters = (params: Parameters) => Object.assign(this, params);

    get parameters(): Parameters {
        return <Parameters>(
            this.parameterKeys.reduce((acc: Partial<Parameters>, k: keyof Parameters) => ({ ...acc, [k]: this[k] }), {})
        );
    }

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
    const keys = <(keyof Parameters)[]>Object.keys(defaultParams);
    const state = new State({
        ...defaultParams,
        ...SessionStorage.loadItems(keys),
    });
    keys.forEach((k) => {
        autorun(() => SessionStorage.saveItem(k, state[k]));
    });
    return state;
}
