import { Producer } from "./classes/Producer";
import { FamilyFarmer } from "./classes/FamilyFarmer";
import { CommunityGardenProducer } from "./classes/CommunityGardenProducer";
import { Food } from "./classes/Food";
import { Registry } from "./classes/Registry";
import { Institution } from "./classes/Institution";

import ask from "readline-sync";

let producers: Producer[] = [];
let foods: Food[] = [];
let institutions: Institution[] = [];

const farmer = new FamilyFarmer(1, "Joazinho", "1211111113", 10
);

const gardenProducer = new CommunityGardenProducer("Maria", "987.654.321-00", 300, 15);

producers.push(farmer);
producers.push(gardenProducer);

while (true) {

    console.clear();

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

    const option = Number(
        ask.question("Enter an option: ")
    );

    console.clear();

    switch (option) {

        // ========================================
        // 1 - REGISTER PRODUCER
        // ========================================

        case 1: {

            console.log("Register producer");

            const id = producers.length + 1;

            const nameProducer = ask.question(
                "Producer name: "
            );

            const CPF = ask.question(
                "Insert your CPF: "
            );

            const producedQuantity = Number(
                ask.question(
                    "What is the quantity produced: "
                )
            );

            console.log(`
Choose one type of producer:

[1] Family Farmer
[2] Community Garden Producer
`);

            const choose1 = Number(
                ask.question("Choose: ")
            );

            if (choose1 === 1) {

                const family1 = new FamilyFarmer(
                    id,
                    nameProducer,
                    CPF,
                    producedQuantity
                );

                producers.push(family1);

                console.log(
                    "Family farmer registered successfully!"
                );

            } else if (choose1 === 2) {

                const gardenProducer = new CommunityGardenProducer(
                    nameProducer,
                    CPF,
                    producedQuantity,
                    15
                );

                producers.push(gardenProducer);

                console.log(
                    "Community garden producer registered successfully!"
                );

            } else {

                console.log(
                    "Invalid producer type."
                );
            }

            break;
        }

        // ========================================
        // 2 - REGISTER FOOD
        // ========================================

        case 2: {

            console.log("Register food");

            const nameFood = ask.question(
                "Food name: "
            );

            const category = ask.question(
                "Category: "
            );

            const quantity = Number(
                ask.question(
                    "Quantity: "
                )
            );

            const producerName = ask.question(
                "Responsible producer: "
            );

            const food = new Food(
                nameFood,
                category,
                quantity,
                producerName
            );

            foods.push(food);

            console.log(
                "Food registered successfully!"
            );

            break;
        }

        // ========================================
        // 3 - REGISTER INSTITUTION
        // ========================================

        case 3: {

            console.log("Register institution");

            const institutionName = ask.question(
                "Institution name: "
            );

            const peopleServed = Number(
                ask.question(
                    "How many people does the institution serve? "
                )
            );

            const institutionAddress = ask.question(
                "Institution address: "
            );

            const institution = new Institution(
                institutionName,
                peopleServed,
                institutionAddress
            );

            institutions.push(institution);

            console.log(
                "Institution registered successfully!"
            );

            break;
        }

        // ========================================
        // 4 - LIST PRODUCERS
        // ========================================

        case 4: {

            console.log("List producers");

            if (producers.length === 0) {

                console.log(
                    "No producers registered."
                );

            } else {

                for (const producer of producers) {

                    producer.present();

                    console.log(
                        "--------------------"
                    );
                }
            }

            break;
        }

        // ========================================
        // 5 - LIST FOOD
        // ========================================

        case 5: {

            console.log("List food");

            if (foods.length === 0) {

                console.log(
                    "No food registered."
                );

            } else {

                for (const food of foods) {

                    console.log(food);

                    console.log(
                        "--------------------"
                    );
                }
            }

            break;
        }

        // ========================================
        // 6 - LIST INSTITUTIONS
        // ========================================

        case 6: {

            console.log("List institutions");

            if (institutions.length === 0) {

                console.log(
                    "No institutions registered."
                );

            } else {

                for (const institution of institutions) {

                    console.log(institution);

                    console.log(
                        "--------------------"
                    );
                }
            }

            break;
        }

        // ========================================
        // 7 - MAKE DONATION
        // ========================================

        case 7: {

            console.log("Make donation");

            if (foods.length === 0) {

                console.log(
                    "No food registered."
                );

                break;
            }

            if (institutions.length === 0) {

                console.log(
                    "No institutions registered."
                );

                break;
            }

            // ------------------------------------
            // Escolher alimento
            // ------------------------------------

            console.log(`
========================================
              FOODS
========================================
`);

            for (let i = 0; i < foods.length; i++) {

                console.log(
                    `[${i + 1}] ${foods[i]}`
                );
            }

            const foodChoice = Number(
                ask.question(
                    "\nChoose the food: "
                )
            );

            if (foodChoice < 1 || foodChoice > foods.length) {

                console.log("Food does not exist.");
                break;
            }

            const food = foods[foodChoice - 1];

            // ------------------------------------
            // Escolher instituição
            // ------------------------------------

            console.log(`
========================================
          INSTITUTIONS
========================================
`);

            for (let i = 0; i < institutions.length; i++) {

                console.log(`[${i + 1}] ${institutions[i]}`);
            }

            const institutionChoice = Number(ask.question("\nChoose the institution: "));

            if (institutionChoice < 1 || institutionChoice > institutions.length) {

                console.log("Institution does not exist.");
                break;
            }

            const institution = institutions[institutionChoice - 1];

            // ------------------------------------
            // Quantidade
            // ------------------------------------

            const donationQuantity = Number(ask.question("\nQuantity to donate (KG): "));

            if (donationQuantity <= 0) {

                console.log("Invalid quantity.");
                break;
            }

            if (food.getQuantity() < donationQuantity
            ) {

                console.log("Insufficient food quantity.");
                break;
            }

            // ------------------------------------
            // REALIZAR DOAÇÃO
            // ------------------------------------

            try {

                food.setQuantityKg(
                    food.getQuantityKg() - donationQuantity
                );

                institution.receiveFood(
                    donationQuantity
                );

                institution.register(
                    donationQuantity
                );

                console.log(`
=======================================
            NEW DONATION
=======================================

Food: ${food}
Quantity: ${donationQuantity} KG
Institution: ${institution}

Donation completed successfully!
`);

            } catch (error) {

                console.log(
                    "Could not complete the donation."
                );
            }

            break;
        }

        // ========================================
        // 0 - EXIT
        // ========================================

        case 0: {

            console.log(
                "Exit system..."
            );

            process.exit();
        }

        // ========================================
        // INVALID OPTION
        // ========================================

        default: {

            console.log(
                "Invalid option..."
            );

            break;
        }
    }

    ask.question(
        "\nPress ENTER to continue..."
    );
}