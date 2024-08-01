"use strict";

// const message = "Привіт!";

// function showMessage() {
//   const message = "Hello";

//   console.log(message);
// }

// функція приймає параметри
// function showMessage2(name = "незнайомець") {
//   console.log(`Привіт, ${name}`);
// }

// під час виклику функції передаються аргументи
// showMessage2();

// function getSum(a, b) {
// const result = a + b;
// console.log(result);
// return result;
// return a + b;
// }
// const sum = getSum(2, 3);

// const user = {
//   firstName: "John",
//   lastName: "Doe",
// };

// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// const fullName = getFullName(user.firstName, user.lastName);
// console.log("fullName: ", fullName);

// function getSum(a, b) {
//   if (typeof a !== "number" && typeof b !== "number") {
//     return "Потрібно ввести числа";
//   } else {
//     return a + b;
//   }
// }

// function getSum(a, b) {
//   if (typeof a !== "number" && typeof b !== "number") {
//     return "Потрібно ввести числа";
//   }

//   return a + b;
// }

// function getSum(a, b) {
//   if (typeof a !== "number" && typeof b !== "number") {
//     console.log("Потрібно ввести числа");
//   } else {
//     console.log(a + b);
//   }
// }

// getSum(1, 2);
// console.log(sum);

// function getSum(a, b) {
//   const result = a + b;
//   return; // undefined
// }

// const sum = getSum(1, 2);
// console.log(sum);

// function getSum(a, b) {
//   const result = a + b;
//   return result;
// }

// if (getSum(2, 2) === 5) {
//   console.log("Вірно!");
// } else {
//   console.log("---");
// }

// console.log(getSum(1, 2));

// function getSum(a, b) {
//   const result = a + b;
//   return result;
// }

// const getSum2 = function (a, b) {
//   return a + b;
// };
// console.log(getSum2(3, 4));

// const getSum = (a, b) => {
//   return a + b;
// };

// const getSum3 = (a) => a + 2;

// const getSum4 = () => 2 + 2;

// const redirect = (path) => {

// }

// console.log(getSum4());

// (function () {
//   console.log("Моментальний виклик");
// })();

// function greeting(name) {
//   console.log(`Привіт, ${name}!`);

//   return `Привіт, ${name}!`;
// }

// function greeting2(name) {
//   alert(`Привіт, ${name}!`);
// }

// function processUserInput(callback) {
//   const userName = prompt("Введіть своє ім'я");

//   callback(userName);
// }

// // processUserInput(greeting2);
// processUserInput(function (name) {
//   alert(`Привіт, ${name}!`);
// });

// function validate(input, cb) {
//   if (input.includes("@")) {
//   } else {
//   }
// }

// function pow(x, n) {
//   // x = 2, n = 3
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     // result *= x
//     result = result * x;
//   }

//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   }

//   return x * pow(x, n - 1);
// }

// const number = pow(2, 3);
// console.log("number:", number);

// for (let i = 0; i < 10; i++) {
//   for(let j = 0; j < 10; i++) {
//     for () {

//     }
//   }
// }
