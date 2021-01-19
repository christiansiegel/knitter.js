import { action, autorun, configure, makeAutoObservable, reaction } from 'mobx';

console.log('hello world!');

const worker = new Worker('worker.ts');
worker.postMessage({});

configure({
    enforceActions: 'always',
});

class Store {
    inputImgDataUrl?: string = undefined;
    inputImgFile?: File = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    setInputImgDataUrl = (dataUrl: string) => (this.inputImgDataUrl = dataUrl);
    setInputImgFile = (file: File) => (this.inputImgFile = file);
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

    reaction(
        () => store.inputImgFile,
        async (file) => {
            if (!file) return;
            const dataUrl = await readFileAsDataURL(file);
            store.setInputImgDataUrl(dataUrl);
        },
    );

    reaction(
        () => store.inputImgDataUrl,
        (dataUrl) => {
            if (!dataUrl) return;
            const inputImage = document.getElementById('input-image');
            if (inputImage) (<HTMLImageElement>inputImage).src = dataUrl;
        },
    );
});

async function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(<string>reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
