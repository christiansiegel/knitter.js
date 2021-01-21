import { autorun, configure, makeAutoObservable } from 'mobx';
import { proxy, wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';

const WorkerCore = wrap<typeof Core>(new Worker('worker.ts'));

configure({
    enforceActions: 'observed',
});

class Store {
    inputImgDataUrl?: string = undefined;
    inputImgFile?: File = undefined;
    canvasSize = 700;
    inputPixels?: Uint8ClampedArray = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    setInputImgDataUrl = (dataUrl: string) => (this.inputImgDataUrl = dataUrl);
    setInputImgFile = (file: File) => (this.inputImgFile = file);
    setInputPixels = (pixels: Uint8ClampedArray) => (this.inputPixels = pixels);
}

const store = new Store();

document.addEventListener('DOMContentLoaded', async () => {
    const ui = new UserInterface();

    ui.onInputImageSelected = store.setInputImgFile;

    autorun(async () => {
        const file = store.inputImgFile;
        if (!file) return;
        const dataUrl = await readFileAsDataURL(file);
        store.setInputImgDataUrl(dataUrl);
    });

    autorun(() => {
        const dataUrl = store.inputImgDataUrl;
        dataUrl && ui.setInputImageSrc(dataUrl);
    });

    autorun(async () => {
        const dataUrl = store.inputImgDataUrl;
        const size = store.canvasSize;
        if (!dataUrl) return;
        const pixels = await convertImageDataUrlToGrayPixels(dataUrl, size, size);
        store.setInputPixels(pixels);
    });

    const core = await new WorkerCore();
    await core.setNumberOfPins(200);
    await core.addPinsSubscription(proxy((pins) => ui.setPins(pins)));

    autorun(async () => {
        store.inputPixels && (await core.setImageData(store.inputPixels));
    });

    autorun(async () => {
        if (!store.canvasSize) return;
        const dimensions = { width: store.canvasSize, height: store.canvasSize };
        ui.initCanvas(dimensions); // maybe infer that later from pins?
        await core.setImageDimensions(dimensions);
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

async function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(<string>reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function createImageFromDataUrl(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = url;
    });
}
