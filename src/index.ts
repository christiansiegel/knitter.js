import { action, autorun, configure, makeObservable, observable } from 'mobx';
import { proxy, wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { Shape } from './types';

function getItemOrDefaultFromLocalStorage(key: string, defaultValue: string) {
    const value = localStorage.getItem(key);
    return value === null ? defaultValue : value;
}

const WorkerCore = wrap<typeof Core>(new Worker('worker.ts'));

configure({
    enforceActions: 'observed',
});

class Store {
    inputImgDataUrl: string | null;
    canvasSize: number;

    constructor(initial: { canvasSize: number; inputImgDataUrl: string | null }) {
        this.inputImgDataUrl = initial.inputImgDataUrl;
        this.canvasSize = initial.canvasSize;

        makeObservable(this, {
            inputImgDataUrl: observable,
            canvasSize: observable,
            setInputImgDataUrl: action,
        });
    }

    setInputImgDataUrl = (dataUrl: string) => (this.inputImgDataUrl = dataUrl);
}

//localStorage.clear()

const store = new Store({
    canvasSize: parseInt(getItemOrDefaultFromLocalStorage('canvasSize', '700')),
    inputImgDataUrl: localStorage.getItem('inputImgDataUrl'),
});

autorun(() => {
    localStorage.setItem('canvasSize', store.canvasSize.toString());
    if (store.inputImgDataUrl === null) {
        localStorage.removeItem('inputImgDataUrl');
    } else {
        localStorage.setItem('inputImgDataUrl', store.inputImgDataUrl);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    const ui = new UserInterface();
    ui.setShape('circle');
    ui.onInputImageSelected = store.setInputImgDataUrl;
    ui.onFadeParamChange = (value: number) => console.log('fade param ', value);

    ui.onShapeSelected = (shape: Shape) => {
        ui.setShape(shape);
    };

    autorun(() => {
        const dataUrl = store.inputImgDataUrl;
        dataUrl && ui.setInputImageSrc(dataUrl);
    });

    const core = await new WorkerCore();

    autorun(async () => {
        const dataUrl = store.inputImgDataUrl;
        const size = store.canvasSize;
        if (!dataUrl) return;
        const pixels = await convertImageDataUrlToGrayPixels(dataUrl, size, size);
        await core.setImageData(pixels);
    });

    await core.setNumberOfPins(200);
    await core.addPinsSubscription(proxy((pins) => ui.setPins(pins)));

    autorun(async () => {
        if (!store.canvasSize) return;
        await core.setImageDimensions({ width: store.canvasSize, height: store.canvasSize });
    });
});

async function convertImageDataUrlToGrayPixels(dataUrl: string, width: number, height: number) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
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
