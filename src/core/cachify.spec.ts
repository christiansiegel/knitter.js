import { cachify } from './cachify';

describe('cachify()', () => {
    it('should returned a cached version of a single argument function', () => {
        const fn = (v: number) => ({ v: v });
        const cachedFn = cachify(fn);
        expect(fn(1)).not.toBe(fn(1));
        expect(cachedFn(1)).toBe(cachedFn(1));
        expect(cachedFn(1)).not.toEqual(cachedFn(2));
    });
    it('should returned a cached version of a multi argument function', () => {
        const fn = (v: number, w: string) => ({ v: v, w: w });
        const cachedFn = cachify(fn);
        expect(fn(1, 'foo')).not.toBe(fn(1, 'foo'));
        expect(cachedFn(1, 'foo')).toBe(cachedFn(1, 'foo'));
        expect(cachedFn(1, 'foo')).not.toEqual(cachedFn(2, 'foo'));
    });
    it('should allow to set a specific key function', () => {
        const fn = (v: number, w: string) => ({ v: v, w: w });
        const keyFn = (v: number) => v % 2;
        const cachedFn = cachify(fn, { keyFn });
        expect(fn(1, 'foo')).not.toBe(fn(1, 'foo'));
        expect(cachedFn(1, 'foo')).toBe(cachedFn(1, 'does not matter to this key func'));
        expect(cachedFn(1, 'foo')).toBe(cachedFn(3, 'foo')); // key for 1 and 3 is the same
        expect(cachedFn(1, 'foo')).not.toBe(cachedFn(2, 'foo')); // key for 1 and 3 is the same
    });
    it('should allow to specify the cache size 1', () => {
        const fn = (v: number) => ({ v: v });
        const cachedFn = cachify(fn, { cacheSize: 1 });
        expect(fn(1)).not.toBe(fn(1));
        const initialValue1 = cachedFn(1);
        const cachedValue1 = cachedFn(1);
        const initialValue2 = cachedFn(2);
        const cachedValue2 = cachedFn(2);
        const newValue1 = cachedFn(1);
        expect(initialValue1).toBe(cachedValue1);
        expect(initialValue2).toBe(cachedValue2);
        expect(initialValue1).not.toEqual(initialValue2);
        expect(initialValue1).not.toBe(newValue1);
        expect(initialValue1).toEqual(newValue1);
    });
    it('should use an undefined (infinite) cache size by default', () => {
        const fn = (v: number) => ({ v: v });
        const cachedFn = cachify(fn);
        expect(fn(1)).not.toBe(fn(1));
        const initialValue1 = cachedFn(1);
        expect(initialValue1).toBe(cachedFn(1));
        for (let i = 0; i < 1000; i++) cachedFn(i); // add 1000 cache values
        expect(initialValue1).toBe(cachedFn(1)); // initial cached value still there
    });
});
