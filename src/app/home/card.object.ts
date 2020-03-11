export class Card {
    private item: string;
    private item2: string;
    private cardToString: string;

    constructor(item: string, item2: string) {
        this.item = item;
        this.item2 = item2;
    }

    public toString(): string {
        return `Item: ${this.item}, Item2: ${this.item2}`;
    }
}
