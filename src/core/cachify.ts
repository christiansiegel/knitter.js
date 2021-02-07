/* eslint-disable  @typescript-eslint/no-explicit-any */

export function cachify<A extends [any] | any[], R, K extends number | string>(
    fn: (...a: A) => R,
    keyFn?: (...a: A) => K,
): (...a: A) => R {
    const keyFn2 = keyFn || ((...a: A) => <K>JSON.stringify(a));
    const cache: { [key in number | string]: R } = {};
    return (...a: A): any => {
        const key = keyFn2(...a);
        if (key in cache) {
            return cache[key];
        }
        const value = fn(...a);
        cache[key] = value;
        return value;
    };
}
