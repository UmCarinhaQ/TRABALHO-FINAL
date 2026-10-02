"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
    find(index) {
        return this.items[index];
    }
}
exports.Registry = Registry;
