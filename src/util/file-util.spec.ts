import { readFileAsDataURL, readFileAsText } from './file-util';

const EXAMPLE_FILE = new File(
    ['example'], // -> base64: ZXhhbXBsZQ==
    'example.txt',
    {
        type: 'text/plain',
    },
);

describe('readFileAsDataURL', () => {
    it('should read file as data URL', async () => {
        expect.assertions(1);
        const dataURL = await readFileAsDataURL(EXAMPLE_FILE);
        expect(dataURL).toEqual('data:text/plain;base64,ZXhhbXBsZQ==');
    });
});

describe('readFileAsText', () => {
    it('should read file as text', async () => {
        expect.assertions(1);
        const text = await readFileAsText(EXAMPLE_FILE);
        expect(text).toEqual('example');
    });
});
