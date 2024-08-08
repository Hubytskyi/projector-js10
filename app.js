"use strict";

// 1
// const array = [!!0, !!null, !!undefined]; // [false, false, false];

// const result1 = array.includes(true); // false
// const result2 = array.includes(false); // true
// console.log(result1); // ...
// console.log(result2); // ...

// const array2 = [!!"", !![], !!false];

// const result3 = array2.includes(true);
// const result4 = array2.includes(false);
// console.log(result3); // false || true
// console.log(result4); // true || false

// const array3 = [
//   55,
//   5,
//   "text",
//   true,
//   { a: "1", b: 2, c: 3, d: "e", f: "1" },
//   [1, 2, 3, 4, 5],
// ];

// const result5 = array3.some((item) => {
//   if (item.length > 4) {
//     console.log(item); //
//     return item;
//   }

//   // return item.length > 4
// });

// console.log(result5); // ... true[], true obj||[], false

// const array4 = [1, false, 0, null, { name: "Alina" }, [1, 2, 3, 4, 5]];

// const result6 = array4.find((item) => {
//   if (typeof item === "object") {
//     console.log("item: ", item);
//     return true;
//   }
// });

// console.log(result6); // ...

// const array5 = [1, false, 0, null, { name: "Alina" }, [1, 2, 3, 4, 5]];

// const result8 = array5.filter((item) => item);

// console.log(result8); // ... [1, {}, []], []

// OBJECT

// const user = {
//   name: "John",
//   age: 42,
//   hasPets: true,
// };

// user.isAdmin = true;
// user.age = 43;

// delete user.name;

// console.log(user);
// console.log(user["has pets"]);

// if ("age" in user) {
//   console.log(user);
// }

// console.log(user.isAdmin);

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// console.log(user.address?.street ?? "невідомо");

// const user2 = {
//   name: "John",
//   age: 42,
//   hasPets: true,
// };

// const keys = Object.keys(user2);
// const values = Object.values(user2);
// console.log(keys);
// console.log(values);

// const entries = Object.entries(user2);
// // console.log(entries);

// const user3 = [
//   ["name", "John"],
//   ["age", 42],
//   ["hasPets", true],
// ];

// const fromEntries = Object.fromEntries(entries);
// const fromEntries2 = Object.fromEntries(user3);
// console.log(fromEntries);
// console.log(fromEntries2);

// for (let value of Object.values(user2)) {
//   console.log(value);
// }

// for (let key of Object.keys(user2)) {
//   console.log(key);
// }

// for (let entry of Object.entries(user2)) {
//   console.log(entry);
// }

// SYMBOL

// const id = Symbol("asdasdas");
// const id2 = Symbol("id");

// const id3 = Symbol.for("id");
// const id4 = Symbol.for("id");

// const user2 = {
//   [id]: 42,
//   name: "John",
//   age: 42,
//   hasPets: true,
// };

// console.log(id3 === id4);
// console.log(id.description);
// console.log(user2);
// console.log(Object.keys(user2));

// const obj = {
//   true: 123,
//   1: 543,
// };

// console.log(obj.true);

// CLONE

// const user = {
//   name: "John",
//   age: 42,
//   hasPets: true,
//   address: {
//     street: "Наукова 11",
//   },
// };

// const user2 = {};

// for (let key in user) {
//   user2[key] = user[key];
// }

// user2.age = 20;

// console.log("user: ", user);
// console.log("user2: ", user2);

// const user3 = Object.assign({}, user);
// user3.age = 30;
// user3.address.street = "Стрийська 22";
// console.log("user3: ", user3);

// Object.freeze(user);
// user.age = 22;
// console.log(user.age);

// const dateNow1 = new Date();
// const dateNow2 = new Date(2024, 0, 1, 0, 0, 0, 0);

// console.log(window);

// function getUserTimeByTimezone(timeZone) {
//   const dateNow = new Date();

//   if (timeZone) {
//     return dateNow.toLocaleString("en", {
//       timeZone: timeZone,
//     });
//   }

//   return dateNow.toLocaleString("en", {
//     timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//   });
// }

// const currentDate = dateNow1.toLocaleString("en", {
//   timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
// });

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
// console.log(dateNow1 > dateNow2);
// console.log(dateNow1.getFullYear());
// console.log(dateNow1.getDay());
// console.log(dateNow1.getHours());
// console.log(dateNow1.toLocaleString());
// console.log(Date.now());

// const dateDiff = Date.now() - Date.parse(dateNow2);
// console.log(Math.floor(dateDiff / 3600000));

// console.log(new Date());

// console.log(new Date("08-08-sdfsd"));
// const date = "";
// if (date !== "Invalid Date") {
// }

function durationBetweenDates(start, end, type) {}

durationBetweenDates("02 Aug 1985", "03 Aug 1985", "hours");
durationBetweenDates("12 Aug 1985", "03 Aug 1985", "seconds");
durationBetweenDates("02 Aug 1985", "03 Aug 1985", "days");
durationBetweenDates("22 Aug 1985", "03 Aug 1985", "minutes");

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAngGEs: "48.7584",
};

const priceDataResult = {
  apples: "23.40",
  bana: "48.00",
  oranges: "48.75",
};
