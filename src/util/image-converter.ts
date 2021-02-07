import { Dimensions } from '../types';

export async function convertImageDataUrlToGrayPixels(
    dataUrl: string,
    dimensions: Dimensions,
): Promise<Uint8ClampedArray> {
    const image = await createImageFromDataUrl(dataUrl, dimensions);
    const imageData = getImageData(image);
    return convertImageDataToGrayscaleArray(imageData);
}

async function createImageFromDataUrl(url: string, dimensions: Dimensions): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error('image load error'));
        image.width = dimensions.width;
        image.height = dimensions.height;
        image.src = url;
    });
}

function getImageData(image: HTMLImageElement): ImageData {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function convertImageDataToGrayscaleArray(imageData: ImageData): Uint8ClampedArray {
    const output = new Uint8ClampedArray(imageData.data.length / 4);
    for (let i = 0, j = 0; i < imageData.data.length; i += 4, j++) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        output[j] = convertRgbToGrayValue(r, g, b);
    }
    return output;
}

function convertRgbToGrayValue(red: number, green: number, blue: number): number {
    return Math.round(red * 0.2126 + green * 0.7152 + blue * 0.0722);
}
