import { autorun, configure, makeAutoObservable } from 'mobx';
import { CANVAS_SIZE_INPUT, InputMessage, OutputMessage, PINS_OUTPUT, PIXEL_DATA_INPUT } from './messages';
import { Pin } from './types';

console.log('hello world!');

class WorkerFacade {
    constructor(private worker: Worker) {}

    setCanvasSize(canvasSize: number): void {
        this.postToWorker({ type: CANVAS_SIZE_INPUT, canvasSize: canvasSize });
    }

    setPixelData(pixelData: Uint8ClampedArray): void {
        this.postToWorker({ type: PIXEL_DATA_INPUT, pixelData: pixelData });
    }

    subscribeToPins(callback: (pins: Pin[]) => void): void {
        this.worker.addEventListener('message', ({ data }: { data: OutputMessage }) => {
            data.type === PINS_OUTPUT && callback(data.pins);
        });
    }

    private postToWorker(message: InputMessage): void {
        this.worker.postMessage(message);
    }
}

const worker = new WorkerFacade(new Worker('worker.ts'));

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

document.addEventListener('DOMContentLoaded', () => {
    const imageUploadButton = document.getElementById('image-upload-button');
    const imageUploadInput = document.getElementById('image-upload-input');

    imageUploadButton?.addEventListener('click', () => imageUploadInput?.click());
    imageUploadInput?.addEventListener('change', (e) => {
        const files = (<HTMLInputElement>e.target).files;
        if (files && files.length > 0) store.setInputImgFile(files[0]);
    });

    autorun(async () => {
        const file = store.inputImgFile;
        if (!file) return;
        const dataUrl = await readFileAsDataURL(file);
        store.setInputImgDataUrl(dataUrl);
    });

    autorun(() => {
        const dataUrl = store.inputImgDataUrl;
        if (!dataUrl) return;
        const inputImage = document.getElementById('input-image');
        if (inputImage) (<HTMLImageElement>inputImage).src = dataUrl;
    });

    autorun(async () => {
        const dataUrl = store.inputImgDataUrl;
        const size = store.canvasSize;
        if (!dataUrl) return;
        const pixels = await convertImageDataUrlToGrayPixels(dataUrl, size, size);
        store.setInputPixels(pixels);
    });

    autorun(async () => {
        store.inputPixels && worker.setPixelData(store.inputPixels);
    });

    autorun(async () => {
        store.canvasSize && worker.setCanvasSize(store.canvasSize);
    });

    worker.subscribeToPins((pins) => {
        console.log('pins output', pins);
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
