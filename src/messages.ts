import { Pin } from './types';

export const CANVAS_SIZE_INPUT = 'CANVAS_SIZE_INPUT';
export const PIXEL_DATA_INPUT = 'PIXEL_DATA_INPUT';

export const PINS_OUTPUT = 'PINS_OUTPUT';

interface CanvasSizeInputMessage {
    type: typeof CANVAS_SIZE_INPUT;
    canvasSize: number;
}

interface PixelDataInputMessage {
    type: typeof PIXEL_DATA_INPUT;
    pixelData: Uint8ClampedArray;
}

interface PinsOutputMessage {
    type: typeof PINS_OUTPUT;
    pins: Pin[];
}

export type InputMessage = CanvasSizeInputMessage | PixelDataInputMessage;
export type OutputMessage = PinsOutputMessage;
