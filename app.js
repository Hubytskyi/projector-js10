"use strict";

// const x = 10;
// const y = x++;
// console.log(x, y);

// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr);
// console.log(arr.length);

// const obj = { a: 1, b: 2 };
// const newObj = { ...obj, b: 3 };
// console.log(newObj.b);

// const a = null;
// const b = undefined;
// console.log(a == b, a === b);

// const x = [1, 2, 3];
// const y = x.map(num => num * 2).filter(num => num > 4);
// console.log(y);

// const a = [1, 2];
// const b = [1, 2];
// console.log(a == b, a === b);

// let count = 0;
// const increment = () => count++;
// increment();
// increment();
// console.log(count);

// const set = new Set([1, 2, 2, 3, 4]);
// console.log(set.size);

// const obj = { name: "Alice" };
// const copy = Object.assign({}, obj);
// obj.name = "Bob";
// console.log(copy.name);

// const d = 2
// function test(a, b) {
//     const c = '1'

//     function test2() { }
// }
// test
// console.log(c)

// const a = 'global';

// function outer() {
//     const b = 'outer';

//     function inner() {
//         const c = 'inner';

//         console.log(c)
//         console.log(b)
//         console.log(a)
//     }

//     console.log(a)
//     console.log(b)

//     inner();

// }

// outer();
// console.log(a)

// global, outer, inner, outer, global, global

// const name = 'Solimia';

// function getPersonName() {
//     const name = 'Alyona';

//     return function displayName() {
//         console.log(name)
//     }
// }

// const person = getPersonName();
// person()
// let counter = 0

// function increaseCount() {
//     return counter++
// }
// console.log(increaseCount())
// console.log(increaseCount())
// console.log(increaseCount())

// function getCounter() {
//     let counter = 0

//     return function () {
//         return counter++
//     }
// }

// const count = getCounter();
// const count2 = getCounter();

// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count2())

function getUser() { }

const aUser = 'user1'
var bUser = 'user'

console.log(window)