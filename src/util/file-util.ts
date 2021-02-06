import { saveAs } from 'file-saver';
import { Parameters } from '../state';

export async function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(<string>reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export async function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(<string>reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

export async function readKnitterFile(file: File): Promise<Parameters> {
    let text: string;
    try {
        text = await readFileAsText(file);
    } catch (e) {
        console.error(e);
        throw Error('Oops. Could not read the file!');
    }
    try {
        const [checksum, data] = text.split('|', 2);
        if (hashCode(data).toString() !== checksum) {
            throw Error('checksum mismatch');
        }
        return <Parameters>JSON.parse(data);
    } catch (e) {
        console.error(e);
        throw Error('Invalid file!');
    }
}

export function downloadKnitterFile(parameters: Parameters, filename: string): void {
    const data = JSON.stringify(parameters);
    const checksum = hashCode(data);
    const blob = new Blob([`${checksum}|${data}`], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, filename);
}

function hashCode(str: string): number {
    let hash = 0,
        i,
        chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}
