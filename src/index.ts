import { autorun, configure, makeAutoObservable } from 'mobx';
import { wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { Dimensions, Shape } from './types';

const WorkerCore = wrap<typeof Core>(new Worker('worker.ts'));

configure({
    enforceActions: 'observed',
});

class Storage {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    static saveItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify({ [key]: value }));
    }
    static loadItems(keys: string[]): any {
        let obj = {};
        keys.forEach((key) => {
            const value = localStorage.getItem(key);
            obj = { ...obj, ...JSON.parse(value || '{}') };
        });
        return obj;
    }
}

interface Parameters {
    imageDataUrl?: string;
    dimensions: Dimensions;
    shape: Shape;
    numberOfPins: number;
    fadeRate: number;
    minimalDistance: number;
}

class ParameterState implements Parameters {
    imageDataUrl?: string;
    dimensions: Dimensions;
    shape: Shape;
    numberOfPins: number;
    fadeRate: number;
    minimalDistance: number;

    constructor(init: Parameters) {
        this.imageDataUrl = init.imageDataUrl;
        this.shape = init.shape;
        this.dimensions = init.dimensions;
        this.numberOfPins = init.numberOfPins;
        this.fadeRate = init.fadeRate;
        this.minimalDistance = init.minimalDistance;
        makeAutoObservable(this);
    }

    setImageDataUrl = (imageDataUrl: string) => (this.imageDataUrl = imageDataUrl);
    setDimensions = (dimensions: Dimensions) => (this.dimensions = dimensions);
    setShape = (shape: Shape) => (this.shape = shape);
    setNumberOfPins = (numberOfPins: number) => (this.numberOfPins = numberOfPins);
    setFadeRate = (fadeRate: number) => (this.fadeRate = fadeRate);
    setMinimalDistance = (minimalDistance: number) => (this.minimalDistance = minimalDistance);
}

const defaultParameters: Parameters = {
    dimensions: { width: 700, height: 700 },
    shape: 'circle',
    numberOfPins: 200,
    fadeRate: 50,
    minimalDistance: 10,
};

const initParameters: Parameters = {
    ...defaultParameters,
    ...Storage.loadItems([
        'imageDataUrl',
        'dimensions',
        'numberOfPins',
        'shape',
        'numberOfPins',
        'fadeRate',
        'minimalDistance',
    ]),
};
console.log('INITIAL PARAMS', initParameters);

const params = new ParameterState(initParameters);

autorun(() => Storage.saveItem('imageDataUrl', params.imageDataUrl));
autorun(() => Storage.saveItem('dimensions', params.dimensions));
autorun(() => Storage.saveItem('shape', params.shape));
autorun(() => Storage.saveItem('numberOfPins', params.numberOfPins));
autorun(() => Storage.saveItem('fadeRate', params.fadeRate));
autorun(() => Storage.saveItem('minimalDistance', params.minimalDistance));

document.addEventListener('DOMContentLoaded', async () => {
    const ui = new UserInterface();
    ui.onInputImageSelected = params.setImageDataUrl;
    ui.onFadeParamChange = params.setFadeRate;
    ui.onPinsParamChange = params.setNumberOfPins;
    ui.onDistanceParamChange = params.setMinimalDistance;
    ui.onShapeSelected = params.setShape;

    autorun(() => ui.setShape(params.shape));
    autorun(() => params.imageDataUrl && ui.setInputImageSrc(params.imageDataUrl));
    autorun(() => ui.setNumberOfPins(params.numberOfPins));
    autorun(() => ui.setFadeRate(params.fadeRate));
    autorun(() => ui.setMinimalDistance(params.minimalDistance));

    const core = await new WorkerCore();
    autorun(async () => await core.setImageDimensions({ ...params.dimensions }));
    autorun(async () => await core.setNumberOfPins(params.numberOfPins));
    autorun(async () => {
        params.imageDataUrl &&
            core.setImageData(await convertImageDataUrlToGrayPixels(params.imageDataUrl, params.dimensions));
    });
});

async function convertImageDataUrlToGrayPixels(dataUrl: string, dimensions: Dimensions) {
    const canvas = document.createElement('canvas');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Cannot get canvas context!');
    const image = await createImageFromDataUrl(dataUrl);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const rgbaData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const grayData = convertRgbaToGrayArray(rgbaData);
    return grayData;
}

function convertRgbaToGrayArray(rgbaData: Uint8ClampedArray): Uint8ClampedArray {
    const output = new Uint8ClampedArray(rgbaData.length / 4);
    for (let i = 0, j = 0; i < rgbaData.length; i += 4, j++) {
        const red = rgbaData[i];
        const green = rgbaData[i + 1];
        const blue = rgbaData[i + 2];
        output[j] = convertRgbToGrayValue(red, green, blue);
    }
    return output;
}

function convertRgbToGrayValue(red: number, green: number, blue: number): number {
    return Math.round(red * 0.2126 + green * 0.7152 + blue * 0.0722);
}

async function createImageFromDataUrl(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = url;
    });
}
