"use strict";

// Task 1
// console.log(a);  // ? 10, undefined
// var a = 10;

// function test() {
//   console.log(b);  // ? 20, undefined
//   var b = 20;

//   if (true) {
//     var b = 30;
//     console.log(b);  // ? 30
//   }

//   console.log(b);  // ? 30
// }

// test();


// Task 2
// function makeCounter() {
//   let count = 0;

//   return function () {
//     count += 1;
//     return count;
//   };
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1());  // ? 1
// console.log(counter1());  // ? 2
// console.log(counter2());  // ? 1

// const numbers = [1, 2, 3, 4, 5];

// function numberMap(n) {
//   if (n % 2 === 0) {
//     return n * 2;
//   }

//   return n;
// }

// const result = numbers.map(n => {
//   if (n % 2 === 0) {
//     return n * 2;
//   }

//   return n;
// });

// console.log(result); // ? [1,4,3,8,5] +++
// console.log(result); // ? [4, 8] +
// console.log(result); // ? [empty, 4, empty,  8, empty] +
// console.log(result); // ? [undefined, 4, undefined,  8, undefined] +

// "use strict";
// console.log(this)
// const person = {
//   name: 'Alice',
//   age: 25,
//   greet() {
//     // return this;
//     // return `Hello, my name is ${this.name}`;
//   }
// };

// console.log(person.greet())

// const greetFn = person.greet;
// const greetFn = person.greet.bind(person);
// console.log(greetFn());  // ? 

// `Hello, my name is undefined`
// `Hello, my name is Alice`
// function, obejct

// const [first, , third] = [1, 2, 3, 4, 5];

// console.log(first);  // ? 1
// console.log(third);  // ? 3

// console.log('start')
// setTimeout(() => {
//   console.log('settimeout')
// }, 3000)
// console.log('end')

// function first() {
//   console.log('1')
//   second()
// }

// function second() {
//   console.log(2)
// }

// first();

// []
// [first]
// [first, log('1')]
// [first]
// [first, second]
// [first, second, log(2)]
// [first, second]
// [first]
// []

// function rec() {
//   // повинен бути вихід з рекурсії
//   rec();
// }

// rec()

// []
// [rec]
// [rec, rec,]
// [rec, rec, rec]
// [rec, rec, rec, rec]

// const button = document.querySelector('button')
// button.addEventListener('click', handleClick)
// function handleClick() {
//   console.log('click')
// }