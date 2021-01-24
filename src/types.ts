export interface Point {
    x: number;
    y: number;
}

export interface Pin extends Point {
    id: number;
}

export interface Dimensions {
    width: number;
    height: number;
}

export type Shape = 'square' | 'circle';
