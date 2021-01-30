import { autorun } from 'mobx';
import { wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { convertImageDataUrlToGrayPixels } from './util/image-converter';
import { STATE } from './state';
import { TokenFactory } from './util/token-factory';

const tokenFactory = new TokenFactory();

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
    autorun(() => ui.setPins(STATE.pins || []));
    autorun(() => ui.setPattern(STATE.pattern || []));

    const core = await new WorkerCore();

    autorun(async () => {
        if (!STATE.imageDataUrl) return;
        const token = tokenFactory.getExclusiveToken('image conversion');
        const pixels = await convertImageDataUrlToGrayPixels(STATE.imageDataUrl, STATE.dimensions);
        if (token.cancelled) return;
        STATE.setPixels(pixels);
    });

    autorun(async () => {
        const coreParams = STATE.coreParams;
        if (!coreParams) return;
        const token = tokenFactory.getExclusiveToken('core init');
        const pins = await core.init(coreParams);
        if (token.cancelled) return;
        STATE.setPins(pins);
        if (pins.length < coreParams.numberOfPins) {
            STATE.setNumberOfPins(pins.length);
        }
        STATE.setCoreId(coreParams.id);
    });

    autorun(async () => {
        const token = tokenFactory.getExclusiveToken('pattern calc');
        if (!STATE.isCoreInitialized) return;
        const numberOfStrings = STATE.numberOfStrings;
        let pattern = await core.getPattern();
        if (token.cancelled) return;
        if (pattern.length >= numberOfStrings) {
            STATE.setPattern(pattern.slice(0, numberOfStrings));
            return;
        }
        const batchSize = 100;
        for (let requestedNrOfStrings = pattern.length; ; requestedNrOfStrings += batchSize) {
            requestedNrOfStrings = Math.min(numberOfStrings, requestedNrOfStrings);
            pattern = await core.calcPattern(requestedNrOfStrings);
            if (token.cancelled) return;
            STATE.setPattern(pattern);
            if (pattern.length < requestedNrOfStrings) {
                console.log('max numberOfStrings reached:', pattern.length);
                STATE.setNumberOfStrings(pattern.length);
                break;
            }
            if (pattern.length === numberOfStrings) {
                break;
            }
        }
    });
});
