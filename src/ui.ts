import { Dimensions, Pin } from './types';

export class UserInterface {
    private imageUploadButton: HTMLButtonElement;
    private imageUploadInput: HTMLInputElement;
    private inputImage: HTMLImageElement;
    private outputCanvas: HTMLCanvasElement;

    public onInputImageSelected: ((file: File) => void) | null = null;

    constructor() {
        this.imageUploadButton = <HTMLButtonElement>document.getElementById('image-upload-button');
        this.imageUploadInput = <HTMLInputElement>document.getElementById('image-upload-input');
        this.inputImage = <HTMLImageElement>document.getElementById('input-image');
        this.outputCanvas = <HTMLCanvasElement>document.getElementById('output-canvas');

        this.imageUploadButton.onclick = () => this.imageUploadInput.click();

        this.imageUploadInput.onchange = (e) => {
            const files = (<HTMLInputElement>e.target).files;
            if (files && files.length > 0) {
                this.onInputImageSelected && this.onInputImageSelected(files[0]);
            }
        };
    }

    setInputImageSrc(src: string): void {
        this.inputImage.src = src;
    }

    initCanvas(dimensions: Dimensions): void {
        this.outputCanvas.width = dimensions.width;
        this.outputCanvas.height = dimensions.height;
        //outputCanvas.setsc
        const ctx = this.outputCanvas.getContext('2d');
        ctx?.clearRect(0, 0, this.outputCanvas.width, this.outputCanvas.height);
    }

    setPins(pins: Pin[]): void {
        const ctx = this.outputCanvas.getContext('2d');
        ctx?.clearRect(0, 0, this.outputCanvas.width, this.outputCanvas.height);
        pins.forEach((pin) => {
            ctx?.fillRect(pin.x, pin.y, 1, 1);
        });
    }
}
