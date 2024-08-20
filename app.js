"use strict";

// let timerId = setTimeout(sayHi, 2000);

// function sayHi() {
//     console.log('Hi!')
//     alert('Hi!')

//     timerId = setTimeout(sayHi, 2000)
// }

// const timerId = setTimeout(sayHi, 2000);
// console.log(timerId);
// clearTimeout(timerId);

// const timerId = setInterval(sayHi, 2000);
// clearInterval(timerId)

// const timerId = setInterval(sayHi, 2000);


// function deposit(amount) {
//     this.balance += amount // bankAccount.balance = bankAccount.balance + amount
//     return `Deposited $${amount}. New balance: $${this.balance}`
// }

// const bankAccount = {
//     accountNumber: 12345678,
//     balance: 1000,
//     deposit, // deposit: deposit
//     map: function () {

//     }
// deposit(amount) {
//     this.balance += amount // bankAccount.balance = bankAccount.balance + amount
//     return `Deposited $${amount}. New balance: $${this.balance}`
// }
// }

// const wallet = {
//     ownerName: "Alice",
//     balance: 250,
//     currency: "USD",
//     addMoney: deposit
// }

// console.log(bankAccount.deposit(300));
// console.log(wallet.addMoney(300));

// const spendMoney = (amount) => {
//     // console.log('amount > this.balance: ', this.balance)
//     if (amount > this.balance) {
//         return `Not enough funds! Current balance: $${this.balance}`
//     } else {
//         this.balance -= amount; // this.balance = this.balance - amount
//         return `Spend $${amount}. New balance: $${this.balance}`
//     }
// }

// const digitalWallet = {
//     owner: "Bob",
//     balance: 1000,
//     spend: spendMoney,
//     // spendMoney // spendMoney: spendMoney
// }

// console.log(digitalWallet.spendMoney(1300))
// console.log(this)

const shoppingCart = {
    items: [],

    // addItem(item) {
    //     this.items.push(item);
    //     return `Added ${item} to the cart.`
    // },

    addItem: function (item) {
        this.items.push(item);
        return `Added ${item} to the cart.`
    },



    // addMiltypleItems(itemsToAdd) {
    //     itemsToAdd.forEach((item) => { // this = shoppingCart
    //         this.addItem(item)
    //     });

    //     // itemsToAdd.forEach(function(item) { // error, this = undefined
    //     //     this.addItem(item)
    //     // });

    //     return `Added ${itemsToAdd.length} items to the cart.`
    // },

    addMultipleItems2(itemsToAdd) {
        const addItem = this.addItem.bind(this)

        // itemsToAdd.forEach((item) => { // this = shoppingCart
        //     this.addItem(item)
        // });

        itemsToAdd.forEach(function (item) { // error, this = undefined

            addItem(item)
        });

        return `Added ${itemsToAdd.length} items to the cart.`
    }

}

// shoppingCart.addItem('iphone15')
// shoppingCart.addItem('iphone14')
shoppingCart.addMultipleItems2(['macbook air', 'macbook pro'])
console.log('cart: ', shoppingCart.items)