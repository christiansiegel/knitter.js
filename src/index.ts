console.log('hello world!');

const worker = new Worker('worker.ts');
worker.postMessage({});

document.addEventListener('DOMContentLoaded', () => {
    const imageUploadButton = document.getElementById('image-upload-button');
    const imageUploadInput = document.getElementById('image-upload-input');

    imageUploadButton?.addEventListener('click', () => imageUploadInput?.click());
    imageUploadInput?.addEventListener('change', async (e) => {
        const files = (<HTMLInputElement>e.target).files;
        if (files && files.length > 0) {
            const file = files[0];
            const dataUrl = await readFileAsDataURL(file);
            setInputImageSrc(dataUrl);
        }
    });
});

async function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(<string>reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function setInputImageSrc(src: string): void {
    const inputImage = <HTMLImageElement | null>document.getElementById('input-image');
    if (inputImage) inputImage.src = src;
}
