import { TokenFactory } from './token-factory';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            new TokenFactory();
            expect([1, 2, 3].indexOf(4)).toBe(-1);
        });
    });
});