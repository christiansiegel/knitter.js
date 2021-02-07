import { cachify } from './cachify';

describe('cachify()', () => {
    it('should returned a cached version of a single argument function', async () => {
        const fn = (v: number) => ({ v: v });
        const cachedFn = cachify(fn);
        expect(fn(1)).not.toBe(fn(1));
        expect(cachedFn(1)).toBe(cachedFn(1));
        expect(cachedFn(1)).not.toEqual(cachedFn(2));
    });
    it('should returned a cached version of a multi argument function', async () => {
        const fn = (v: number, w: string) => ({ v: v, w: w });
        const cachedFn = cachify(fn);
        expect(fn(1, 'foo')).not.toBe(fn(1, 'foo'));
        expect(cachedFn(1, 'foo')).toBe(cachedFn(1, 'foo'));
        expect(cachedFn(1, 'foo')).not.toEqual(cachedFn(2, 'foo'));
    });
    it('should allow to set a specific key function', async () => {
        const fn = (v: number, w: string) => ({ v: v, w: w });
        const cachedFn = cachify(fn, (v: number) => v % 2);
        expect(fn(1, 'foo')).not.toBe(fn(1, 'foo'));
        expect(cachedFn(1, 'foo')).toBe(cachedFn(1, 'does not matter to this key func'));
        expect(cachedFn(1, 'foo')).toBe(cachedFn(3, 'foo')); // key for 1 and 3 is the same
        expect(cachedFn(1, 'foo')).not.toBe(cachedFn(2, 'foo')); // key for 1 and 3 is the same
    });
});
