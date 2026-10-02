"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
class FamilyFarmer extends Producer_1.Producer {
    constructor(propertySize, name, CPF, producedQuantity) {
        super(name, CPF, producedQuantity);
        this.propertySize = propertySize;
    }
    present() {
        console.log(`Name: ${this.name}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Produced quantity: ${this.producedQuantity} kg`);
        console.log(`Property size: ${this.propertySize} hectares`);
    }
}
exports.FamilyFarmer = FamilyFarmer;
