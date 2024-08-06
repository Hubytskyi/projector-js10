"use strict";

// const stack = ["HTML", "CSS", "JavaScript", "Vue"];

// stack[1] = "SCSS";
// stack[3] = "React";

// console.log(stack);

// const data = ["JS", 42, true, {}];

// console.log(data.length);

// const lastElement = stack[stack.length - 1];
// console.log(stack.at(-1));
// console.log(lastElement);

// console.log(typeof stack);

// console.log(Array.isArray("stack"));

// if (typeof stack === "object" && Array.isArray(stack)) {
//   console.log(stack);
// }

// console.log(Array.isArray("Hello"));

// if (Array.isArray("Hello")) {
//   console.log(stack);
// }

// const result1 = stack.push("React");
// const result2 = stack.unshift("HTTP");
// const result3 = stack.pop();
// const result4 = stack.shift();

// console.log(stack);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// for (let i = 0; i < stack.length; i++) {
//   console.log(stack[i]);
// }

// const stack = ["HTML", "CSS", "JavaScript", "Vue"];

// const result = stack.forEach((element, index) => {
//   console.log(`${index} ---> ${element}`);
// });

// console.log(result);

// console.log(stack);
// const result = stack.splice(10, 2, "React", "Angular");
// console.log(stack);
// console.log(result);

// stack[10] = "React";
// stack.forEach((element, index) => {
//   console.log(element, index);
// });
// console.log(stack);

// const newStack = stack.slice();
// const newStack2 = stack.slice(1);
// const newStack3 = stack.slice(1, 3);

// console.log(stack);
// console.log(newStack);

// const stack = ["HTML", "CSS", "JavaScript", "Vue"];
// const stack2 = ["Java", "Python"];
// let stack3 = [];

// // stack = [] = dasd23er23fd2f2f2f
// if (Array.isArray(stack) && Array.isArray(stack2)) {
//   // asda32r323f2
//   stack3 = stack2.concat(stack, stack2);
// }

// console.log(stack3);
// const user1 = {
//   name: "Андрій",
//   age: 20,
// };

// const user2 = {
//   name: "Анна",
//   age: 22,
// };

// const user3 = {
//   name: "Юлія",
//   age: 23,
// };

// const users = [user3, user2, user1];
// console.log(users);
// const numbers = [1, 2, 25, 15];

// users.sort(function (userA, userB) {
//   if (userA.age > userB.age) {
//     return 1;
//   }

//   if (userA.age < userB.age) {
//     return -1;
//   }

//   return 0;
// });
// numbers.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }

//   if (a < b) {
//     return -1;
//   }

//   return 0;
// });

// console.log(numbers);

// const numbers2 = [1, 2, 25, 15];

// numbers2.sort(function (a, b) {
//   return a - b;
// });

// numbers2.sort(() => a - b);

// console.log(numbers2);

// function sortByName() {

// }

// const stack = ["html", "css", "js"];

// const result = stack.map((element, index) => {
//   if (element.length > 3) {
//     return `${element} - ${index}`;
//   }
//   return element;
// });

// console.log(stack);
// console.log(result);

// const numbers = [1, 2, 3, 4];

// numbers.reverse();

// console.log(numbers);

// const str = "hello-world!";

// const words = str.split(" ");
// const words2 = str.split("w");

// const str2 = words2.join(" --- ");

// console.log(str2);
// console.log(words2);

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.indexOf(1));
// console.log(numbers.includes(6));

// const user1 = {
//   name: "Андрій",
//   age: 20,
// };

// const user2 = {
//   name: "Анна",
//   age: 22,
// };

// const user3 = {
//   name: "Юлія",
//   age: 23,
// };

// const users = [user3, user2, user1];
// console.log("all users: ", users);
// // const user = users.find((element, index) => {
// //   return element.age > 20;
// // });

// const filteredUsers = users.filter((element, index) => {
//   console.log(index, element);
//   return element.age > 20;
// });

// console.log("user: ", user);
// console.log("filteredUsers: ", filteredUsers);

// const numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// console.log(numbers);
// console.log(numbers.flat(Infinity));

// const numbers = [1, 2, 3, 4, 5, 6];

// const result1 = numbers.every((number) => {
//   if (number >= 1) {
//     return true;
//   }
// });

// const result2 = numbers.some((number) => {
//   if (number >= 7) {
//     return true;
//   }
// });

// console.log(result1);
// console.log(result2);

const numbers = [1, 2, 3, 4, 5, 6];
const initialValue = 10;

const sum = numbers.reduce(function (acc, currentValue) {
  console.log("currentValue: ", currentValue);
  // 1 ітерація
  //  acc = initialValue || numbers[0]
  // currentValue = 1
  // return 11

  // 2 ітерація
  // acc = 12
  // 11 + 2
  // return 15

  // 3 ітерація
  // acc = 15
  // 13 + 3
  return acc + currentValue;
}, initialValue);

console.log("sum: ", sum);
