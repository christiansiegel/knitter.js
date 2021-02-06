import { autorun } from 'mobx';
import { wrap } from 'comlink';
import { Core } from './core';
import { UserInterface } from './ui';
import { convertImageDataUrlToGrayPixels } from './util/image-converter';
import { loadState } from './state';
import { downloadKnitterFile, readFileAsDataURL, readKnitterFile } from './util/file-util';
import { TokenFactory } from './util/token-factory';
import { EXAMPLE_IMAGE_DATA_URL } from './example.png.base64';

const state = loadState({
    imageDataUrl: EXAMPLE_IMAGE_DATA_URL,
    dimensions: { width: 700, height: 700 },
    shape: 'circle',
    numberOfPins: 200,
    numberOfStrings: 3000,
    fadeRate: 50,
    minimalDistance: 10,
});
const tokenFactory = new TokenFactory();
const worker = new Worker('worker.ts');
const WorkerCore = wrap<typeof Core>(worker);

document.addEventListener('DOMContentLoaded', async () => {
    const ui = new UserInterface();

    ui.onKnitterFileOpened = async (file: File) => {
        try {
            const parameters = await readKnitterFile(file);
            state.setParameters(parameters);
        } catch (e) {
            ui.showError(e.message);
        }
    };
    ui.onSaveClicked = () => {
        downloadKnitterFile(state.parameters, 'project.knitter');
    };
    ui.onExportClicked = () => {
        alert('Export feature coming soon!');
    };
    ui.onImageFileOpened = async (file: File) => {
        const dataUrl = await readFileAsDataURL(file);
        state.setImageDataUrl(dataUrl);
    };
    ui.onFadeParamChange = state.setFadeRate;
    ui.onPinsParamChange = state.setNumberOfPins;
    ui.onStringsParamChange = state.setNumberOfStrings;
    ui.onDistanceParamChange = state.setMinimalDistance;
    ui.onShapeSelected = state.setShape;

    autorun(() => ui.setShape(state.shape));
    autorun(() => ui.setInputImageSrc(state.imageDataUrl));
    autorun(() => ui.setNumberOfPins(state.numberOfPins));
    autorun(() => ui.setNumberOfStrings(state.numberOfStrings));
    autorun(() => ui.setFadeRate(state.fadeRate));
    autorun(() => ui.setMinimalDistance(state.minimalDistance));
    autorun(() => ui.setPins(state.pins || []));
    autorun(() => ui.setPattern(state.pattern || []));

    const core = await new WorkerCore();

    autorun(async () => {
        if (!state.imageDataUrl) return;
        const token = tokenFactory.getExclusiveToken('image conversion');
        const pixels = await convertImageDataUrlToGrayPixels(state.imageDataUrl, state.dimensions);
        if (token.cancelled) return;
        state.setPixels(pixels);
    });

    autorun(async () => {
        const coreParams = state.coreParams;
        if (!coreParams) return;
        const token = tokenFactory.getExclusiveToken('core init');
        await core.init(coreParams);
        if (token.cancelled) return;
        state.setCoreId(coreParams.id);
    });

    autorun(async () => {
        const token = tokenFactory.getExclusiveToken('get pins');
        if (!state.isCoreInitialized) return;
        const pins = await core.getPins();
        if (token.cancelled) return;
        state.setPins(pins);
        state.setNumberOfPins(pins.length);
    });

    autorun(async () => {
        const token = tokenFactory.getExclusiveToken('pattern calc');
        if (!state.isCoreInitialized) return;
        const numberOfStrings = state.numberOfStrings;
        let pattern = await core.getPattern();
        if (token.cancelled) return;
        if (pattern.length >= numberOfStrings) {
            state.setPattern(pattern.slice(0, numberOfStrings));
            return;
        }
        while (true) {
            const requestedNrOfStrings = Math.min(pattern.length + 100, numberOfStrings);
            pattern = await core.calcPattern(requestedNrOfStrings);
            if (token.cancelled) return;
            state.setPattern(pattern);
            if (pattern.length < requestedNrOfStrings) {
                state.setNumberOfStrings(pattern.length);
                break;
            }
            if (pattern.length === numberOfStrings) {
                break;
            }
        }
    });
});
