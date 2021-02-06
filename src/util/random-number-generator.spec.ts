import { RandomNumberGenerator } from './random-number-generator';

describe('RandomNumberGenerator', () => {
    describe('getRandomFloat()', () => {
        it('should return random numbers between min and max', () => {
            const rng = new RandomNumberGenerator();
            const min = -5;
            const max = 10;
            const results = Array.from(Array(50), () => rng.getRandomFloat(min, max));
            const minResult = Math.min(...results);
            const maxResult = Math.max(...results);
            expect(minResult).toBeGreaterThanOrEqual(min);
            expect(maxResult).toBeLessThanOrEqual(max);
            expect(minResult).toBeLessThan(maxResult);
        });
        it('should be deterministic', () => {
            const rng1 = new RandomNumberGenerator(1);
            const rng2 = new RandomNumberGenerator(0);
            const rng3 = new RandomNumberGenerator(1);
            const results1 = Array.from(Array(10), () => rng1.getRandomFloat(-10, 10));
            const results2 = Array.from(Array(10), () => rng2.getRandomFloat(-10, 10));
            const results3 = Array.from(Array(10), () => rng3.getRandomFloat(-10, 10));
            expect(results1).not.toEqual(results2);
            expect(results1).toEqual(results3);
        });
    });
});
