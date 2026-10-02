export class Institution {
    protected name: string;
    protected address: string;
    protected peopleServed: number;

    constructor(name: string, peopleServed: number, address: string) {
        this.name = name;
        this.peopleServed = peopleServed;
        this.address = address;
    }

    public registerReceipt(food: string, quantity: number): void {
        console.log(`${this.name} received ${quantity} kg of ${food}.`);
    }

    public showInformation(): void {
        console.log(`
    Name: ${this.name}
    Address: ${this.address}
    People served: ${this.peopleServed}`);
    }

}