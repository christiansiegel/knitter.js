import { Token, TokenFactory } from './token-factory';

describe('Token', () => {
    let token: Token;
    beforeEach(() => {
        token = new Token();
    });
    describe('cancelled', () => {
        it('should be false by default', () => {
            expect(token.cancelled).toBe(false);
        });
        it('should be true after calling cancel()', () => {
            token.cancel();
            expect(token.cancelled).toBe(true);
        });
    });
});

describe('TokenFactory', () => {
    let tokenFactory: TokenFactory;
    beforeEach(() => {
        tokenFactory = new TokenFactory();
    });
    describe('getExclusiveToken()', () => {
        it('should return new Token', () => {
            const token = tokenFactory.getExclusiveToken('foo');
            expect(token instanceof Token).toBeTruthy();
            expect(token.cancelled).toBe(false);
        });
        it('should cancel previous token with same label', () => {
            const fooToken1 = tokenFactory.getExclusiveToken('foo');
            expect(fooToken1.cancelled).toBe(false);
            const barToken1 = tokenFactory.getExclusiveToken('bar');
            expect(fooToken1.cancelled).toBe(false);
            expect(barToken1.cancelled).toBe(false);
            const fooToken2 = tokenFactory.getExclusiveToken('foo');
            expect(fooToken1.cancelled).toBe(true);
            expect(barToken1.cancelled).toBe(false);
            expect(fooToken2.cancelled).toBe(false);
        });
    });
});
