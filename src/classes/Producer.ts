export abstract class Producer {
    protected name: string;
    protected cpf: string;
    protected producedQuantity: number;

    constructor(name: string, cpf: string, producedQuantity: number) {
        this.name = name;
        this.cpf = cpf;
        this.producedQuantity = producedQuantity;
    }

    public abstract present(): void;
}