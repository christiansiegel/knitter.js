import { Dimensions, Pin, Shape } from './types';

class Slider {
    private root: HTMLDivElement;

    onchange: ((value: number) => void) | null = null;

    constructor(id: string) {
        this.root = <HTMLDivElement>document.getElementById(id);
        const input = this.root.getElementsByTagName('input')[0];
        const output = this.root.getElementsByTagName('output')[0];

        input.oninput = (e) => {
            const value = (<HTMLInputElement>e.target).value;
            output.innerHTML = value;
        };

        input.onchange = (e) => {
            const value = (<HTMLInputElement>e.target).valueAsNumber;
            this.onchange && this.onchange(value);
        };
    }

    hide = () => (this.root.style.display = 'none');

    show = () => (this.root.style.display = 'block');
}

export class UserInterface {
    private circleShapeButton: HTMLButtonElement;
    private squareShapeButton: HTMLButtonElement;
    private imageUploadButton: HTMLButtonElement;
    private imageUploadInput: HTMLInputElement;
    private inputImage: HTMLImageElement;
    private outputCanvas: HTMLCanvasElement;

    private pinsParamSlider: Slider;
    private stringsParamSlider: Slider;
    private fadeParamSlider: Slider;
    private distanceParamSlider: Slider;

    onInputImageSelected: ((file: File) => void) | null = null;
    onPinsParamChange: ((value: number) => void) | null = null;
    onStringsParamChange: ((value: number) => void) | null = null;
    onFadeParamChange: ((value: number) => void) | null = null;
    onDistanceParamChange: ((value: number) => void) | null = null;
    onShapeSelected: ((value: Shape) => void) | null = null;

    constructor() {
        this.imageUploadButton = <HTMLButtonElement>document.getElementById('image-upload-button');
        this.imageUploadInput = <HTMLInputElement>document.getElementById('image-upload-input');
        this.inputImage = <HTMLImageElement>document.getElementById('input-image');
        this.outputCanvas = <HTMLCanvasElement>document.getElementById('output-canvas');

        this.circleShapeButton = <HTMLButtonElement>document.getElementById('circle-shape-button');
        this.circleShapeButton.onclick = () => {
            this.onShapeSelected && this.onShapeSelected('circle');
        };

        this.squareShapeButton = <HTMLButtonElement>document.getElementById('square-shape-button');
        this.squareShapeButton.onclick = () => {
            this.onShapeSelected && this.onShapeSelected('square');
        };

        this.pinsParamSlider = new Slider('pins-param-slider');
        this.pinsParamSlider.onchange = (value: number) => {
            this.onPinsParamChange && this.onPinsParamChange(value);
        };

        this.stringsParamSlider = new Slider('strings-param-slider');
        this.stringsParamSlider.onchange = (value: number) => {
            this.onStringsParamChange && this.onStringsParamChange(value);
        };

        this.fadeParamSlider = new Slider('fade-param-slider');
        this.fadeParamSlider.onchange = (value: number) => {
            this.onFadeParamChange && this.onFadeParamChange(value);
        };

        this.distanceParamSlider = new Slider('distance-param-slider');
        this.distanceParamSlider.onchange = (value: number) => {
            this.onDistanceParamChange && this.onDistanceParamChange(value);
        };

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

    setShape(shape: Shape): void {
        if (shape === 'circle') {
            this.circleShapeButton.classList.add('is-info', 'is-selected');
            this.squareShapeButton.classList.remove('is-info', 'is-selected');
            this.inputImage.classList.add('is-circle');
            this.distanceParamSlider.show();
        } else {
            this.squareShapeButton.classList.add('is-info', 'is-selected');
            this.circleShapeButton.classList.remove('is-info', 'is-selected');
            this.inputImage.classList.remove('is-circle');
            this.distanceParamSlider.hide();
        }
    }
}
