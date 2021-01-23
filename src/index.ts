import { autorun } from 'mobx';
import { wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { convertImageDataUrlToGrayPixels } from './util/image-converter';
import { STATE } from './state'

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
    
    autorun(async () => await core.setImageDimensions({ ...STATE.dimensions }));
    autorun(async () => await core.setNumberOfPins(STATE.numberOfPins));
    autorun(async () => {
        STATE.imageDataUrl &&
            core.setImageData(await convertImageDataUrlToGrayPixels(STATE.imageDataUrl, STATE.dimensions));
    });
});
