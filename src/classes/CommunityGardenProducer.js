"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
class CommunityGardenProducer extends Producer_1.Producer {
    constructor(name, CPF, producedQuantity, volunteerCount) {
        super(name, CPF, producedQuantity);
        this.volunteerCount = volunteerCount;
    }
    present() {
        console.log(`Name: ${this.name}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Produced quantity: ${this.producedQuantity} kg`);
        console.log(`Volunteer count: ${this.volunteerCount}`);
    }
}
exports.CommunityGardenProducer = CommunityGardenProducer;
