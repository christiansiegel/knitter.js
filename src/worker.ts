import { CANVAS_SIZE_INPUT, InputMessage, OutputMessage, PINS_OUTPUT, PIXEL_DATA_INPUT } from './messages';
import { action, autorun, makeObservable, observable } from 'mobx';
import { Pin } from './types';

class WorkerState {
    canvasSize?: number = undefined;
    pixelData?: Uint8ClampedArray = undefined;
    pins?: Pin[] = undefined;

    constructor() {
        makeObservable(this, {
            canvasSize: observable,
            pixelData: observable,
            pins: observable.shallow,
            setCanvasSize: action,
            setPixelData: action,
            setPins: action,
        });
    }

    setCanvasSize(canvasSize: number) {
        this.canvasSize = canvasSize;
    }
    setPixelData(pixelData: Uint8ClampedArray) {
        this.pixelData = pixelData;
    }
    setPins(pins: Pin[]) {
        this.pins = pins;
    }
}
const state = new WorkerState();

const postMessage = (message: OutputMessage) => {
    self.postMessage(message);
};

autorun(() => {
    const xx = state.canvasSize;
    console.log('canvas size changed in worker', xx);
    state.setPins([{ id: 1, x: 2, y: 3 }]); // test
});

autorun(() => {
    state.pins && console.log(state.pins[0]);
    state.pins && postMessage({ type: PINS_OUTPUT, pins: state.pins.slice() });
});

self.addEventListener('message', ({ data }: { data: InputMessage }) => {
    switch (data.type) {
        case CANVAS_SIZE_INPUT: {
            state.setCanvasSize(data.canvasSize);
            break;
        }
        case PIXEL_DATA_INPUT: {
            state.setPixelData(data.pixelData);
            break;
        }
    }
});
