import { autorun } from 'mobx';
import { wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { convertImageDataUrlToGrayPixels } from './util/image-converter';
import { STATE } from './state';
import { Pin } from './types';

const worker = new Worker('worker.ts');
const WorkerCore = wrap<typeof Core>(worker);

document.addEventListener('DOMContentLoaded', async () => {
    const ui = new UserInterface();

    ui.onInputImageSelected = STATE.setImageDataUrl;
    ui.onFadeParamChange = STATE.setFadeRate;
    ui.onPinsParamChange = STATE.setNumberOfPins;
    ui.onStringsParamChange = STATE.setNumberOfStrings;
    ui.onDistanceParamChange = STATE.setMinimalDistance;
    ui.onShapeSelected = STATE.setShape;

    autorun(() => ui.setShape(STATE.shape));
    autorun(() => STATE.imageDataUrl && ui.setInputImageSrc(STATE.imageDataUrl));
    autorun(() => ui.setNumberOfPins(STATE.numberOfPins));
    autorun(() => ui.setNumberOfStrings(STATE.numberOfStrings));
    autorun(() => ui.setFadeRate(STATE.fadeRate));
    autorun(() => ui.setMinimalDistance(STATE.minimalDistance));

    const core = await new WorkerCore();

    autorun(async () => {
        //STATE.setNumberOfPins(pins.length); // TODO update that somehow
        console.log('setPins');
        STATE.pins && ui.setPins(STATE.pins);
    });

    autorun(async () => {
        if (!STATE.imageDataUrl) return;
        const pixels = await convertImageDataUrlToGrayPixels(STATE.imageDataUrl, STATE.dimensions);
        STATE.setPixels(pixels);
    });

    autorun(async () => {
        if (!STATE.pixels) return;
        const numberOfStrings = STATE.numberOfStrings;
        const contextId = await core.initContext({
            dimensions: { ...STATE.dimensions },
            pixels: STATE.pixels,
            fadeRate: STATE.fadeRate,
            minimalDistance: STATE.minimalDistance,
            shape: STATE.shape,
            numberOfPins: STATE.numberOfPins,
        });
        const pattern: Pin[] = [];
        try {
            const pins = await core.getPins(contextId);
            STATE.setPins(pins);
            while (pattern.length < numberOfStrings) {
                const limit = 100;
                const nextIds = await core.calcPattern(contextId, limit);
                const next = nextIds.map((id) => pins[id]);
                pattern.push(...next);
                ui.drawLinesBetweenPins(pattern.slice(pattern.length - limit + 1, pattern.length));
                console.log('new pattern bits for ctx #', contextId);
            }
        } catch (e) {
            return; // calculation expired
        }
        STATE.setPattern(pattern);
    });
});
