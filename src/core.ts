import { Pin } from './types';

export class Core {
    canvasSize?: number = undefined;
    pixelData?: Uint8ClampedArray = undefined;
    pinCallbacks: ((pins: Pin[]) => void)[] = [];

    setCanvasSize(canvasSize: number): void {
        console.log('setCanvasSize', canvasSize);
        this.canvasSize = canvasSize;

        // test:
        this.pinCallbacks.forEach((c) => c([{ id: 1, x: 2, y: 3 }]));
    }

    setPixelData(pixelData: Uint8ClampedArray): void {
        console.log('setPixelData', pixelData);
        this.pixelData = pixelData;
    }

    registerPinCalback(callback: (pins: Pin[]) => void): void {
        this.pinCallbacks.push(callback);
    }
}
