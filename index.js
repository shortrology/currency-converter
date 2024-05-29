#! /usr/bin/env/ node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("\n \t welcome to 'codewithBushra' - currency converter\n"));
const currency = {
    USD: 1,
    EUR: 0.91,
    PKR: 277.70,
    CAD: 1.3,
    AUD: 1.65,
};
let answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "PKR", "CAD", "AUD"],
        message: "Enter from currency",
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "PKR", "CAD", "AUD",],
        message: "Enter To currency",
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Amount ",
    }
]);
let fromAmount = currency[answers.from]; //exchange rate
let toAmount = currency[answers.to]; /// exchange rate
let Amount = answers.amount;
let baseAmount = Amount / fromAmount; //usd base currency //4
let convertedAmount = baseAmount * toAmount;
console.log(`convertedAmount  = ${chalk.green(convertedAmount.toFixed(2))}`);
//console.log(fromAmount);
//console.log(toAmount);
//console.log(Amount);
