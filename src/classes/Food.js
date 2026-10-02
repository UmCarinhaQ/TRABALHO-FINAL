"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, categoria, availableQuantity, responsibleProducer) {
        this.name = name;
        this.categoria = categoria;
        this.availableQuantity = availableQuantity;
        this.responsibleProducer = responsibleProducer;
    }
    addQuantity(value) {
        this.availableQuantity += value;
    }
    removeQuantity(value) {
        if (value > this.availableQuantity) {
            throw new Error("Not enough quantity available.");
        }
        this.availableQuantity -= value;
    }
    getQuantity() {
        return this.availableQuantity;
    }
    donate(quantity) {
        this.removeQuantity(quantity);
    }
}
exports.Food = Food;
