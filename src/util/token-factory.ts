export class Token {
    private _cancelled = false;
    get cancelled(): boolean {
        return this._cancelled;
    }
    cancel(): void {
        this._cancelled = true;
    }
}

export class TokenFactory {
    private tokens: { [key: string]: Token } = {};
    getExclusiveToken(label: string): Token {
        if (label in this.tokens) this.tokens[label].cancel();
        const token = new Token();
        this.tokens[label] = token;
        return token;
    }
}
