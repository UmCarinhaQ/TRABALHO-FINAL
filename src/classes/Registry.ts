export class Registry<T> {
    private items: T[] = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public list(): T[] {
        return this.items;
    }

    public find(index: number): T | undefined {
        return this.items[index];
    }
}