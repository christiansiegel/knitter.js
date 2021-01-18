console.log('hello world!');

const worker = new Worker('worker.ts');
worker.postMessage({});

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

document.addEventListener('DOMContentLoaded', () => {
    const imageUploadButton = <HTMLButtonElement | null>document.getElementById('image-upload-button');
    const imageUploadInput = <HTMLInputElement | null>document.getElementById('image-upload-input');

    if (imageUploadButton) imageUploadButton.onclick = () => imageUploadInput?.click();
    if (imageUploadInput) imageUploadInput.onchange = (e) => handleImageInputEvent(<HTMLInputEvent>e);
});

function handleImageInputEvent(event: HTMLInputEvent): void {
    const files = event.target?.files;
    if (files && files.length > 0) openImage(files[0]);
}

function openImage(file: File): void {
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
        setInputImageSrc(<string>fileReader.result);
    };
    fileReader.readAsDataURL(file);
}

function setInputImageSrc(src: string): void {
    const inputImage = <HTMLImageElement | null>document.getElementById('input-image');
    if (inputImage) inputImage.src = src;
}
