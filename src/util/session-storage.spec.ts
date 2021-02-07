import { SessionStorage } from './session-storage';

describe('SessionStorage', () => {
    beforeEach(() => sessionStorage.clear());
    afterEach(() => sessionStorage.clear());
    describe('saveItem() + loadItem()', () => {
        it('should save and retrieve number item', () => {
            SessionStorage.saveItem('foo', 42);
            expect(SessionStorage.loadItems(['foo'])).toEqual({ foo: 42 });
        });
        it('should save and retrieve string item', () => {
            SessionStorage.saveItem('foo', 'bar');
            expect(SessionStorage.loadItems(['foo'])).toEqual({ foo: 'bar' });
        });
        it('should save and retrieve multiple items', () => {
            SessionStorage.saveItem('foo', 'bar');
            SessionStorage.saveItem('foo2', 42);
            SessionStorage.saveItem('foo', 'bar2'); // update
            expect(SessionStorage.loadItems(['foo', 'foo2'])).toEqual({ foo: 'bar2', foo2: 42 });
            expect(SessionStorage.loadItems(['foo'])).toEqual({ foo: 'bar2' });
            expect(SessionStorage.loadItems(['foo2'])).toEqual({ foo2: 42 });
        });
        it('should safely ignore unknown keys', () => {
            expect(SessionStorage.loadItems([])).toEqual({});
            expect(SessionStorage.loadItems(['foo', 'foo2'])).toEqual({});
            SessionStorage.saveItem('foo', 'bar');
            expect(SessionStorage.loadItems(['foo', 'foo2'])).toEqual({ foo: 'bar' });
        });
    });
});
