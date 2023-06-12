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
