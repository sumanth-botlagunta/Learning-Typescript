"use strict";
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
//# sourceMappingURL=index.js.map