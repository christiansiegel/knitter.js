/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable  @typescript-eslint/no-explicit-any */

export class LocalStorage {
    static saveItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify({ [key]: value }));
    }
    static loadItems(keys: string[]): any {
        let obj = {};
        keys.forEach((key) => {
            const value = localStorage.getItem(key);
            obj = { ...obj, ...JSON.parse(value || '{}') };
        });
        return obj;
    }
}
