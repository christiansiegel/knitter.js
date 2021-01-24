import { autorun } from 'mobx';
import { wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { convertImageDataUrlToGrayPixels } from './util/image-converter';
import { STATE } from './state';
import { Pin } from './types';

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
        STATE.setNumberOfPins(pins.length);
        STATE.setPins(pins);
    });

    autorun(async () => {
        if (!STATE.imageDataUrl) return;
        const pixels = await convertImageDataUrlToGrayPixels(STATE.imageDataUrl, STATE.dimensions);
        STATE.setPixels(pixels);
    });

    autorun(async () => {
        if (!STATE.pins) return;
        const pins = STATE.pins;
        ui.setPins(pins);

        if (!STATE.pixels) return;
        const calculationId = await core.initPatternCalculation({
            pins: pins,
            dimensions: { ...STATE.dimensions },
            pixels: STATE.pixels,
            fadeRate: STATE.fadeRate,
            minimalDistance: STATE.minimalDistance,
        });
        const pattern: Pin[] = [];
        while (true) {
            try {
                const limit = 100;
                const nextIds = await core.calcPattern(calculationId, limit);
                const next = nextIds.map((id) => pins[id]);
                pattern.push(...next);
                ui.drawLinesBetweenPins(pattern.slice(pattern.length - limit + 1, pattern.length));
            } catch (e) {
                return;
            }
            console.log('new pattern bits for calc id', calculationId);
            // TODO: abort criteria: enough strings calculated
            if (pattern.length > 3000) return;
        }
    });
});
