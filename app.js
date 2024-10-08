// import { button } from 'bootstrap';
import { fetchUsers } from "./api.js";
import calculatePrice from './calculator.js'
import { button as customButton } from './ui.js'

// async function init() {
//     const users = await fetchUsers();

//     console.log(users)
//     console.log(API_URL)
// }

// init()
console.log(customButton())
console.log(calculatePrice(10))