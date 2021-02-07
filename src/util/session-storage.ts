/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */

export class SessionStorage {
    static saveItem(key: string, value: number | string): void {
        sessionStorage.setItem(key, JSON.stringify({ [key]: value }));
    }
    static loadItems(keys: string[]): any {
        let obj = {};
        keys.forEach((key) => {
            const value = sessionStorage.getItem(key);
            obj = { ...obj, ...JSON.parse(value || '{}') };
        });
        return obj;
    }
}
