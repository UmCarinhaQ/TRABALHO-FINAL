import { Donatable } from "../interfaces/Donatable";

export class Food implements Donatable {
    public name: string;
    protected categoria: string;
    protected availableQuantity: number;
    protected responsibleProducer: string;

    constructor(name: string, categoria: string, availableQuantity: number, responsibleProducer: string) {
        this.name = name;
        this.categoria = categoria;
        this.availableQuantity = availableQuantity;
        this.responsibleProducer = responsibleProducer;
    }
    

    public addQuantity(value: number): void {
        this.availableQuantity += value
    }
    public removeQuantity(value: number): void {
        if (value > this.availableQuantity) {
            throw new Error("Not enough quantity available.");
        }
        this.availableQuantity -= value;
    }
    public getQuantity(): number {
        return this.availableQuantity;
    }



    public donate(quantity: number): void {
        this.removeQuantity(quantity);
    }
}
