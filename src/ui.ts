import { Pin, Shape } from './types';

class Slider {
    private root: HTMLDivElement;
    private input: HTMLInputElement;
    private output: HTMLOutputElement;

    onchange: ((value: number) => void) | null = null;

    constructor(id: string) {
        this.root = <HTMLDivElement>document.getElementById(id);
        this.input = this.root.getElementsByTagName('input')[0];
        this.output = this.root.getElementsByTagName('output')[0];

        this.input.oninput = (e) => {
            const value = (<HTMLInputElement>e.target).value;
            this.output.innerHTML = value;
        };

        this.input.onchange = (e) => {
            const value = (<HTMLInputElement>e.target).valueAsNumber;
            this.onchange && this.onchange(value);
        };
    }

    setValue = (value: number) => {
        this.input.valueAsNumber = value;
        this.output.innerHTML = value.toString();
    };

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

    onInputImageSelected: ((dataUrl: string) => void) | null = null;
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
            this.inputImage.classList.add('is-circle-animation');
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

        this.imageUploadInput.onchange = async (e) => {
            const files = (<HTMLInputElement>e.target).files;
            if (files && files.length > 0) {
                const dataUrl = await readFileAsDataURL(files[0]);
                this.onInputImageSelected && this.onInputImageSelected(dataUrl);
            }
        };
    }

    setInputImageSrc(src: string): void {
        this.inputImage.src = src;
    }

    setNumberOfPins(numberOfPins: number): void {
        this.pinsParamSlider.setValue(numberOfPins);
    }

    setNumberOfStrings(numberOfStrings: number): void {
        this.stringsParamSlider.setValue(numberOfStrings);
    }

    setFadeRate(fadeRate: number): void {
        this.fadeParamSlider.setValue(fadeRate);
    }

    setMinimalDistance(minimalDistance: number): void {
        this.distanceParamSlider.setValue(minimalDistance);
    }

    setPins(pins: Pin[]): void {
        const ctx = <CanvasRenderingContext2D>this.outputCanvas.getContext('2d');
        const xCoordinates = [...pins.map((pin) => pin.x)];
        const yCoordinates = [...pins.map((pin) => pin.y)];
        const xMin = Math.min(...xCoordinates);
        const xMax = Math.max(...xCoordinates);
        const yMin = Math.min(...yCoordinates);
        const yMax = Math.max(...yCoordinates);
        this.outputCanvas.width = xMax - xMin + 1; // +1 for pins
        this.outputCanvas.height = yMax - yMin + 1; // +1 for pins
        ctx.clearRect(0, 0, this.outputCanvas.width, this.outputCanvas.height);
        pins.forEach((pin) => {
            ctx.fillRect(pin.x - xMin, pin.y - yMin, 1, 1);
        });
    }

    drawLinesBetweenPins(pins: Pin[]): void {
        if (pins.length < 2) return;
        const ctx = <CanvasRenderingContext2D>this.outputCanvas.getContext('2d');
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.moveTo(pins[0].x - 0.5, pins[0].y - 0.5);
        let prevPin = pins[0];
        pins.slice(1).forEach((pin) => {
            // Generate third point to introduce line variation (bezier control point)
            const rand = 10 - Math.random() * 20;
            const cx = rand + (prevPin.x + pin.x) / 2;
            const cy = rand + (prevPin.y + pin.y) / 2;
            ctx.bezierCurveTo(cx, cy, cx, cy, pin.x - 0.5, pin.y - 0.5);
            //ctx.lineTo(pin.x - 0.5, pin.y - 0.5);
            prevPin = pin;
        });
        ctx.stroke();
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

async function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(<string>reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
