import { Producer } from "./Producer";

export class CommunityGardenProducer extends Producer {
    private volunteerCount: number;

    constructor(name: string, CPF: string, producedQuantity: number, volunteerCount: number) {
        super(name, CPF, producedQuantity);
        this.volunteerCount = volunteerCount;
    }

    public present(): void {
        console.log(`Name: ${this.name}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Produced quantity: ${this.producedQuantity} kg`);
        console.log(`Volunteer count: ${this.volunteerCount}`);
    }
}