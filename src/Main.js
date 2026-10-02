"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FamilyFarmer_1 = require("./classes/FamilyFarmer");
const CommunityGardenProducer_1 = require("./classes/CommunityGardenProducer");
const Food_1 = require("./classes/Food");
const readline_sync_1 = __importDefault(require("readline-sync"));
while (true) {
    console.log(`
========================================
       RAÍZES DA TERRA COOPERATIVE
========================================

[1] Register producer
[2] Register food
[3] Register institution
[4] List producers
[5] List food
[6] List institutions
[7] Make donation
[0] Exit
`);
    let option = Number(readline_sync_1.default.question("Enter a option: "));
    switch (option) {
        case 1:
            console.log("Register producer");
            break;
        case 2:
            console.log("Register food");
            break;
        case 3:
            console.log("Register institution");
            break;
        case 4:
            console.log("List producters");
            break;
        case 5:
            console.log("List food");
            break;
        case 6:
            console.log("List institutions");
            break;
        case 7:
            console.log("Make donation");
            break;
        case 0:
            console.log("Exit system...");
            process.exit();
        default:
            console.log("Invalid Option...");
            break;
    }
}
const nome = readline_sync_1.default.question("Nome do alimento: ");
const categoria = readline_sync_1.default.question("Categoria: ");
const quantidade = Number(readline_sync_1.default.question("Quantidade: "));
const produtor = readline_sync_1.default.question("Produtor responsavel: ");
const food = new Food_1.Food(nome, categoria, quantidade, produtor);
let producers = [];
const farmer = new FamilyFarmer_1.FamilyFarmer(1, "Joazinho", "1211111113", 10);
const gardenProducer = new CommunityGardenProducer_1.CommunityGardenProducer("Maria", "987.654.321-00", 300, 15);
producers.push(farmer);
producers.push(gardenProducer);
for (const producer of producers) {
    producer.present();
    console.log("--------------------");
}
