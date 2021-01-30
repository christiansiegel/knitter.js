export class RandomNumberGenerator {
    constructor(private seed: number = 42) {}

    private random(): number {
        return ((2 ** 31 - 1) & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31;
    }

    getRandomFloat(min: number, max: number): number {
        return this.random() * (max - min) + min;
    }
}
