"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
class Institution {
    constructor(name, peopleServed, address) {
        this.name = name;
        this.peopleServed = peopleServed;
        this.address = address;
    }
    registerReceipt(food, quantity) {
        console.log(`${this.name} received ${quantity} kg of ${food}.`);
    }
    showInformation() {
        console.log(`
    Name: ${this.name}
    Address: ${this.address}
    People served: ${this.peopleServed}`);
    }
}
exports.Institution = Institution;
