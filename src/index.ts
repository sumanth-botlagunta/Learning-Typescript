import { type } from 'os';

console.log('Hello TypeScript!');
let age: number = 50;
if (age > 20) {
  age += 10;
}

let value: string = 'Typescript';
let isPublished: boolean = true;
let array;

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [10, 20, 30, 40];
numbers.forEach((n) => n * 7);

let strings: string[] = [];
for (const i in numbers) {
  strings.push(i.toString());
}

console.log(strings);

// tuples
let user: [number, string] = [1, 'Sumanth'];

// enums
const enum Sizes {
  small = 1,
  medium,
  large,
}
let mySize: Sizes = Sizes.large;
console.log(mySize);

// functions
function caluclateTax(income: number, taxYear: number = 2023): number {
  if (income < 50_000 && taxYear < 2022) {
    return income * 1.2;
  } else if (income < 60_000) {
    return income * 1.25;
  }
  return income * 1.3;
}

let myTax: number = caluclateTax(90_000, 2021);

// objects
// type alliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Sumanth',
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types
function kgstolbs(weight: number | string): number {
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
console.log(kgstolbs(10), kgstolbs('10kgs'));

// literals
type Quantity = 50 | 100 | 150;
let myquanity: Quantity = 100;
console.log(`the quanity is ${myquanity}`);

// optional chaining
