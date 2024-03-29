import { Dimensions, Pin, Shape } from '../types';

export function indexOfMax(arr: number[]): number {
    let max = -Infinity;
    let maxIndex = -1;
    for (const [i, v] of arr.entries()) {
        if (v > max) {
            maxIndex = i;
            max = v;
        }
    }
    return maxIndex;
}

export function calcScore(pixels: Uint8ClampedArray, indices: number[]): number {
    return 0xff - indices.reduce((sum, idx) => sum + pixels[idx], 0) / indices.length;
}

export function lightenUp(pixels: Uint8ClampedArray, indices: number[], value: number): void {
    indices.forEach((idx) => (pixels[idx] = Math.min(0xff, pixels[idx] + value)));
}

export function circularArrayIndexDistance(idx1: number, idx2: number, length: number): number {
    const dist = Math.abs(idx1 - idx2);
    return Math.min(length - dist, dist);
}

export function makePinPairId(a: Pin, b: Pin): number {
    return a.id < b.id ? a.id * 1024 + b.id : b.id * 1024 + a.id;
}

export function getLineIndices(a: Pin, b: Pin, width: number): number[] {
    if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
        [a, b] = [b, a];
    }
    const dx = Math.abs(b.x - a.x),
        dy = -Math.abs(b.y - a.y),
        sx = a.x < b.x ? 1 : -1,
        sy = a.y < b.y ? 1 : -1,
        indices = [],
        curr = { ...a };
    let e = dx + dy,
        e2;
    while (true) {
        indices.push(curr.y * width + curr.x);
        if (curr.x == b.x && curr.y == b.y) break;
        e2 = 2 * e;
        if (e2 > dy) {
            e += dy;
            curr.x += sx;
        }
        if (e2 < dx) {
            e += dx;
            curr.y += sy;
        }
    }
    return indices;
}

export function calcPins(numberOfPins: number, dimensions: Dimensions, shape: Shape): Pin[] {
    const size = Math.min(dimensions.width, dimensions.height);
    const xOffset = Math.round((dimensions.width - size) / 2);
    const yOffset = Math.round((dimensions.height - size) / 2);
    const fn = shape === 'circle' ? calcCirclePins : calcSquarePins;
    return fn(numberOfPins, size).map((p) => ({ ...p, x: p.x + xOffset, y: p.y + yOffset }));
}

function calcCirclePins(numberOfPins: number, size: number): Pin[] {
    const radius = Math.floor((size - 1) / 2);
    const angle = (Math.PI * 2.0) / numberOfPins;
    const pins = [];
    for (let i = 0; i < numberOfPins; i++) {
        pins.push({
            id: i,
            x: Math.round(radius + radius * Math.sin(i * angle)),
            y: Math.round(radius + radius * Math.cos(Math.PI + i * angle)),
        });
    }
    return pins;
}

function calcSquarePins(numberOfPins: number, size: number): Pin[] {
    const pinsPerSide = Math.floor(numberOfPins / 4);
    const pinDistance = (size - 1) / pinsPerSide;
    const pins = [];
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: Math.round(pinDistance * i),
            y: 0,
        });
    }
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: size - 1,
            y: Math.round(pinDistance * i),
        });
    }
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: size - 1 - Math.round(pinDistance * i),
            y: size - 1,
        });
    }
    for (let i = 0; i < pinsPerSide; i++) {
        pins.push({
            id: pins.length,
            x: 0,
            y: size - 1 - Math.round(pinDistance * i),
        });
    }
    return pins;
}
