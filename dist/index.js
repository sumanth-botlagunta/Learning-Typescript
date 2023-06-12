"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello TypeScript!');
let age = 50;
if (age > 20) {
    age += 10;
}
let value = 'Typescript';
let isPublished = true;
let array;
function render(document) {
    console.log(document);
}
let numbers = [10, 20, 30, 40];
numbers.forEach((n) => n * 7);
let strings = [];
for (const i in numbers) {
    strings.push(i.toString());
}
console.log(strings);
let user = [1, 'Sumanth'];
let mySize = 3;
console.log(mySize);
function caluclateTax(income, taxYear = 2023) {
    if (income < 50000 && taxYear < 2022) {
        return income * 1.2;
    }
    else if (income < 60000) {
        return income * 1.25;
    }
    return income * 1.3;
}
let myTax = caluclateTax(90000, 2021);
let employee = {
    id: 1,
    name: 'Sumanth',
    retire: (date) => {
        console.log(date);
    },
};
function kgstolbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgstolbs(10), kgstolbs('10kgs'));
let myquanity = 100;
console.log(`the quanity is ${myquanity}`);
//# sourceMappingURL=index.js.map