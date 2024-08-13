// "use strict";

// const numbers = [1, 2, 3];
// const [firstNumber, secondNumber, thirdNumber] = numbers;

// console.log(firstNumber, secondNumber, thirdNumber)

// const user = {
//     name: "Юлія",
//     age: 20
// };

// for (const [key, value] of Object.entries(user)) {
//     console.log(key, value)
// }

// let guest = 'Jane';
// let admin = 'Pete';

// [guest, admin] = [admin, guest];

// console.log('admin: ', admin)
// console.log('guest: ', guest)

// const numbers = [1, 2, 3, 4, 5, 6];

// const [first, second, ...restNumbers] = numbers;

// console.log('first: ', first);
// console.log('second: ', second);
// console.log('restNumbers: ', restNumbers);

// const title = "Footer Menu";

// const options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// }

// const { height, title: newTitle, width } = options;

// console.log('title: ', options.title)

// console.log('title: ', title)
// console.log('newTitle: ', newTitle)
// console.log('width: ', width)
// console.log('height: ', height)

const options = {
    title: 'Menu',
    size: {
        width: 100,
        height: 200
    },
    items: ['header', 'footer']
}

const { size: { width: w, height: h }, items: [first, second] } = options;

// console.log('width: ', w)
// console.log('height: ', height)
// console.log('first: ', first)
// console.log('second: ', second)

// const { title, ...otherOptions } = options;
// console.log(title)
// console.log(otherOptions)

// function sumAll(one, two, ...args) {
//     let sum;

//     console.log('argument: ', args)
// }

// sumAll(1)
// sumAll(1, 2)
// sumAll(1, 2, 3)
// const numbers = [3, 4, 1]
// console.log(numbers)
// console.log(...numbers)
// console.log(Math.max(...numbers))

// const arr = [1, 2, 3, 4]
// const obj = { a: 1, b: 2 }

// const newArr = [...arr]
// const newObj = { ...obj }
// newObj.b = 5

// console.log(arr)
// console.log(obj)
// console.log(newArr)
// console.log(newObj)

// const set = new Set();
// const set2 = new Set(['апельсини', 'ананаси', 'апельсини', 'яблука']);

// set2.add(111)
// set2.add(222)
// set2.add(333)
// set2.add(111)

// console.log(set2.size)
// console.log(set2.delete(111))
// set2.clear()

// console.log(set2.size)

// const someArr = [1, 2, 3, 4, 5, 6];
// const set = new Set([1, 2, 3, 4, 5, 6])

// someArr.forEach(function (number, index, arr) {
//     console.log('index: ', index, number, arr);
// })

// set.forEach(function (value, valueAgain, set) {
//     console.log(value, valueAgain, set);
// })

// const a = { a: 1 }
// const set = new Set([a, a])
// console.log(set)

// const set = new Set([1, '1'])
// console.log(set)

// const user = {
//     name: 'John',
//     age: 42
// }

// console.log(user)
// console.log(Object.entries(user))

// const map = new Map([
//     ['name', 'Jane'],
//     ['age', 30]
// ])

// map.set(1, 'Значення по ключу числовому')
// map.set('1', 'Значення по ключу рядковому')
// map.set(true, 'Значення по ключу булевому')

// console.log(map)

// for (const key of map.keys()) {
//     console.log(key)
// }

// for (const value of map.values()) {
//     console.log(value)
// }

// for (const [key, value] of map) {
//     console.log(key, value)
// }

// map.forEach(function (key, value, map) {
//     console.log(key, value, map);
// })

// const user = {
//     1: 'number',
//     '42': 'string',
//     true: 'bool'
// }

// const someFunc = () => console.log('some text')

// const map = new Map([
//     [undefined, 'тут ключ undefined'],
//     [someFunc, 'тут ключ функція']
// ]);

// console.log(map.get(someFunc))

// const set = new Set([1, 2, 3, 4, 4, 4, 4])
// console.log([...set])

// let user = {
//     name: 'jane'
// }

// const arr = [user];

// console.log(arr);

// const weakMap = new WeakMap()
// weakMap.set(user, 'some text')

// user = null

// for (const entry of weakMap) {
//     console.log(entry)
// }
// console.log(weakMap)

// const arr = [1, 2, 3, 4, 5]

// console.log(arr.map((number) => {
//     return number + 10
// }));

// console.log(arr.filter((number) => number > 2))

// const user = {
//     firstName: 'Jane',
//     lastName: 'Doe',
//     getFullName() {
//         return this.firstName + ' ' + this.firstName
//     }
// }

// user.getFullName()