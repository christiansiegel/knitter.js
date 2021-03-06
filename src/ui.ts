import { toast } from 'bulma-toast';
import { Pin, Shape } from './types';
import { RandomNumberGenerator } from './util/random-number-generator';

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
    private inputImage: HTMLImageElement;
    private outputCanvas: HTMLCanvasElement;

    private pinsParamSlider: Slider;
    private stringsParamSlider: Slider;
    private fadeParamSlider: Slider;
    private distanceParamSlider: Slider;

    private pins: Pin[] = [];
    private pattern: number[] = [];

    onImageFileOpened: ((file: File) => void) | null = null;
    onKnitterFileOpened: ((file: File) => void) | null = null;
    onSaveClicked: (() => void) | null = null;
    onExportClicked: (() => void) | null = null;
    onPinsParamChange: ((value: number) => void) | null = null;
    onStringsParamChange: ((value: number) => void) | null = null;
    onFadeParamChange: ((value: number) => void) | null = null;
    onDistanceParamChange: ((value: number) => void) | null = null;
    onShapeSelected: ((value: Shape) => void) | null = null;

    constructor() {
        const openInput = <HTMLInputElement>document.getElementById('open-input');
        openInput.onchange = createFileInputEventHandler((file) => {
            this.onKnitterFileOpened && this.onKnitterFileOpened(file);
        });

        const openButton = <HTMLButtonElement>document.getElementById('open-button');
        openButton.onclick = () => openInput.click();

        const saveButton = <HTMLButtonElement>document.getElementById('save-button');
        saveButton.onclick = () => this.onSaveClicked && this.onSaveClicked();

        const exportButton = <HTMLButtonElement>document.getElementById('export-button');
        exportButton.onclick = () => this.onExportClicked && this.onExportClicked();

        const imageUploadInput = <HTMLInputElement>document.getElementById('image-upload-input');
        imageUploadInput.onchange = createFileInputEventHandler((file) => {
            this.onImageFileOpened && this.onImageFileOpened(file);
        });

        const imageUploadButton = <HTMLButtonElement>document.getElementById('image-upload-button');
        imageUploadButton.onclick = () => imageUploadInput.click();

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
        this.pins = pins;
        this.pattern = [];
        this.renderCanvas();
    }

    setPattern(pattern: number[]): void {
        this.pattern = pattern;
        this.renderCanvas();
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

    showSuccess(message: string): void {
        toast({
            message: message,
            type: 'is-success',
            position: 'top-center',
            duration: 2000,
            pauseOnHover: false,
            closeOnClick: true,
        });
    }

    showError(message: string): void {
        toast({
            message: message,
            type: 'is-danger',
            position: 'top-center',
            duration: 2000,
            pauseOnHover: true,
            closeOnClick: true,
        });
    }

    private renderCanvas(): void {
        const ctx = <CanvasRenderingContext2D>this.outputCanvas.getContext('2d');
        this.drawPins(ctx);
        this.drawPattern(ctx);
    }

    private drawPins(ctx: CanvasRenderingContext2D) {
        const pins = this.pins;
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

    private drawPattern(ctx: CanvasRenderingContext2D) {
        const pattern = this.pattern;
        if (pattern.length < 2) return;
        const pins = pattern.map((idx) => this.pins[idx]);
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.moveTo(pins[0].x - 0.5, pins[0].y - 0.5);
        let prevPin = pins[0];
        const rng = new RandomNumberGenerator(); // needs to be deterministic
        pins.slice(1).forEach((pin) => {
            // Generate third point to introduce line variation (bezier control point)
            const rand = rng.getRandomFloat(-10, 10);
            const cx = rand + (prevPin.x + pin.x) / 2;
            const cy = rand + (prevPin.y + pin.y) / 2;
            ctx.bezierCurveTo(cx, cy, cx, cy, pin.x - 0.5, pin.y - 0.5);
            //ctx.lineTo(pin.x - 0.5, pin.y - 0.5);
            prevPin = pin;
        });
        ctx.stroke();
    }
}

function createFileInputEventHandler(fileHandler: (file: File) => void): (event: Event) => void {
    return (event: Event) => {
        const inputElement = <HTMLInputElement>event.target;
        const files = inputElement.files;
        inputElement.type = ''; // reset input element
        inputElement.type = 'file';
        if (files && files.length > 0) fileHandler(files[0]);
    };
}
