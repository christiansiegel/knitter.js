import { convertImageDataUrlToGrayPixels } from './image-converter';

const EXAMPLE_SVG = `
<svg width="100" height="100">
  <rect x="0"  y="0"  width="50" height="50" style="fill:rgb(255,  0,  0)" />
  <rect x="50" y="0"  width="50" height="50" style="fill:rgb(  0,255,  0)" />
  <rect x="0"  y="50" width="50" height="50" style="fill:rgb(  0,  0,255)" />
  <rect x="50" y="50" width="50" height="50" style="fill:rgb(100,100,100)" />
</svg>
`;

describe('convertImageDataUrlToGrayPixels()', () => {
    it('convert data URL to correctly sized pixel array with relative luminance values', async () => {
        expect.assertions(5);
        const dataUrl = `data:image/svg+xml;utf8,${EXAMPLE_SVG}`;
        const dimensions = { width: 2, height: 3 };
        const pixels = await convertImageDataUrlToGrayPixels(dataUrl, dimensions);
        expect(pixels.length).toBe(6);
        expect(pixels[0]).toBe(Math.round(255 * 0.2126 + 0 * 0.7152 + 0 * 0.0722)); // top-left
        expect(pixels[1]).toBe(Math.round(0 * 0.2126 + 255 * 0.7152 + 0 * 0.0722)); // top-right
        expect(pixels[4]).toBe(Math.round(0 * 0.2126 + 0 * 0.7152 + 255 * 0.0722)); // bottom-left
        expect(pixels[5]).toBe(Math.round(100 * 0.2126 + 100 * 0.7152 + 100 * 0.0722)); // bottom-right
    });

    it('throw error if dataUrl is invalid image', async () => {
        expect.assertions(1);
        const consoleError = console.error;
        console.error = jest.fn(); // disable element's error log during test
        const invalidDataUrl = `data:image/svg+xml;utf8,${EXAMPLE_SVG}>>>>>>>>>>>`;
        const dimensions = { width: 2, height: 3 };
        try {
            await convertImageDataUrlToGrayPixels(invalidDataUrl, dimensions);
        } catch (e) {
            expect(e.message).toBe('image load error');
        }
        console.error = consoleError;
    });
});
