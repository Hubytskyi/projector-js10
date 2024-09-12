'use strict';

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old`;
//     }
// }

// const john = new Person("John", 30);
// console.log(john.greet())

// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     speak() {
//         return `${this.name} makes a sound!`
//     }
// }

// class Dog extends Animal {
//     speak() {
//         return `${this.name} barks!`
//     }
// }

// const loki = new Dog('Loki')
// console.log(loki.speak())

// class Employee {
//     constructor(name, position) {
//         this.name = name;
//         this.position = position;
//     }

//     getDetails() {
//         return `${this.name} works as a ${position}.`
//     }
// }

// class Manager extends Employee {
//     constructor(name, position, deparment) {
//         super(name, position)

//         this.deparment = deparment;
//     }

//     getDetails() {
//         return `${this.name} works as a ${this.position}, and manage the ${this.deparment}`
//     }
// }

// // function Employee(name, position) {
// //     const name = name;
// //     const position = position;
// // }

// // Employee('Alice', "Developer")

// const alice = new Manager('Alice', 'Manager', 'Sales');
// console.log(alice.getDetails())

// class BankAccount {
//     #balance;

//     constructor(initialBalance) {
//         this.#balance = initialBalance;
//     }

//     deposit(amount) {
//         this.#balance += amount
//     }

//     withdraw(amount) {
//         this.#balance -= amount
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const bankAcc = new BankAccount(1000)
// // bankAcc.#balance = 100000
// bankAcc.deposit(100)
// bankAcc.withdraw(200)
// console.log(bankAcc.getBalance())

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     updateEmail(email) {
//         if (this.#validateEmail(email)) {
//             this.email = email;
//             console.log('Email changed successfully')
//         } else {
//             console.log('Invalid email')
//         }
//     }

//     #validateEmail(email) {
//         return email.includes('@')
//     }
// }

// const user = new User('John', 'john@gmail.com');

// user.updateEmail('sometext@gmailcom')

class Animal {
    makeSound() {
        console.log('text from Animal')
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('text from Cat')
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('text from Dog')
    }
}

const animals = [new Animal(), new Cat(), new Dog()];

console.log(animals)

animals.forEach((animal) => {
    animal.makeSound()
})