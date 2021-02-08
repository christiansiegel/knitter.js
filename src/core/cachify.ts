/* eslint-disable  @typescript-eslint/no-explicit-any */

interface CachifyOptions<A extends [any] | any[], K extends number | string> {
    keyFn?: (...a: A) => K;
    cacheSize?: number;
}

export function cachify<A extends [any] | any[], R, K extends number | string>(
    fn: (...a: A) => R,
    options?: CachifyOptions<A, K>,
): (...a: A) => R {
    options = options || {};
    const keyFn = options.keyFn || ((...a: A) => <K>JSON.stringify(a));
    if (options.cacheSize === undefined) {
        const cache: { [key in number | string]: R } = {};
        return (...a: A): any => {
            const key = keyFn(...a);
            if (key in cache) {
                return cache[key];
            }
            const value = fn(...a);
            cache[key] = value;
            return value;
        };
    }
    if (options.cacheSize <= 0) {
        return fn;
    }
    if (options.cacheSize === 1) {
        let cachedKey: K | undefined;
        let cachedValue: R;
        return (...a: A): any => {
            const key = keyFn(...a);
            if (key === cachedKey) {
                return cachedValue;
            }
            cachedKey = key;
            cachedValue = fn(...a);
            return cachedValue;
        };
    }
    // cacheSize > 1
    throw Error(`Cache size ${options.cacheSize} not supported yet!`);
}
