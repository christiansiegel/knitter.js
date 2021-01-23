import { autorun } from 'mobx';
import { wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { convertImageDataUrlToGrayPixels } from './util/image-converter';
import { STATE } from './state';

document.addEventListener('DOMContentLoaded', async () => {
    const ui = new UserInterface();

    ui.onInputImageSelected = STATE.setImageDataUrl;
    ui.onFadeParamChange = STATE.setFadeRate;
    ui.onPinsParamChange = STATE.setNumberOfPins;
    ui.onDistanceParamChange = STATE.setMinimalDistance;
    ui.onShapeSelected = STATE.setShape;

    autorun(() => ui.setShape(STATE.shape));
    autorun(() => STATE.imageDataUrl && ui.setInputImageSrc(STATE.imageDataUrl));
    autorun(() => ui.setNumberOfPins(STATE.numberOfPins));
    autorun(() => ui.setFadeRate(STATE.fadeRate));
    autorun(() => ui.setMinimalDistance(STATE.minimalDistance));

    const core = await new (wrap<typeof Core>(new Worker('worker.ts')))();

    autorun(async () => {
        const pins = await core.calcPins(STATE.numberOfPins, { ...STATE.dimensions }, STATE.shape);
        STATE.setPins(pins);
    });

    autorun(async () => {
        if (!STATE.imageDataUrl) return;
        const pixels = await convertImageDataUrlToGrayPixels(STATE.imageDataUrl, STATE.dimensions);
        STATE.setPixels(pixels);
    });

    autorun(async () => {
        if (!STATE.pins) return;
        ui.setPins(STATE.pins);

        if (!STATE.pixels) return;
        const calculationId = await core.initPatternCalculation({
            pins: STATE.pins,
            pixels: STATE.pixels,
            fadeRate: STATE.fadeRate,
            minimalDistance: STATE.minimalDistance,
        });
        while (true) {
            let pattern: number[];
            try {
                pattern = await core.calcPattern(calculationId, 10);
            } catch (e) {
                return;
            }
            console.log('new pattern bits for calc id', calculationId);
            // TODO: abort criteria: enough strings calculated
        }
    });
});
