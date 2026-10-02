import { Producer } from "./Producer";

export class FamilyFarmer extends Producer {
    private propertySize: number

    constructor(propertySize: number, name: string, CPF: string, producedQuantity: number) {
        super(name, CPF, producedQuantity)
        this.propertySize = propertySize
    }

    public present(): void {
        console.log(`Name: ${this.name}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Produced quantity: ${this.producedQuantity} kg`);
        console.log(`Property size: ${this.propertySize} hectares`);
    }
}