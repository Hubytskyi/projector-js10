"use strict";

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function delay2(ms) {
//     return new Promise((resolve, reject) => setTimeout(reject, ms));
// }

// Promise.all([delay(1000), delay2(2000), delay(3000)])
//     .then(() => console.log('All delays are done!')) // Через 3 секунди
//     .catch((error) => console.log(error))


// function fetchUserData() {
//     return fetch('https://jsonplaceholder.typicode.com/asddasd/1')
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Can't fetch user")
//             }

//             return response.json()
//         })
// }

// function fetchUserPosts() {
//     return fetch('https://jsonplaceholder.typicode.com/sss?userId=1111')
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Can't fetch posts")
//             }

//             return response.json()
//         })
// }

// function fetchUserTodos() {
//     return fetch('https://jsonplaceholder.typicode.com/toddesros?userId=1')
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Can't fetch todos")
//             }

//             return response.json()
//         })
// }

// Promise.all([fetchUserData(), fetchUserPosts(), fetchUserTodos()])
//     .then(([userData, userPosts, userTodos]) => {
//         console.log('userData: ', userData)
//         console.log('userPosts: ', userPosts)
//         console.log('userTodos: ', userTodos)
//     })
//     .catch((error) => console.error("something went wrong, ", error.message))

// Promise.allSettled([fetchUserData(), fetchUserPosts(), fetchUserTodos()])
//     .then((response) => {
//         console.log(response)
//         // console.log('userData: ', userData)
//         // console.log('userPosts: ', userPosts)
//         // console.log('userTodos: ', userTodos)
//     })
//     .catch((error) => console.error("something went wrong, ", error.message))

// Promise.race([fetchUserData(), fetchUserPosts(), fetchUserTodos()])
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((error) => console.error("something went wrong, ", error.message))

// Promise.any([fetchUserData(), fetchUserPosts(), fetchUserTodos()])
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((error) => console.error("something went wrong, ", error.message))

// async function getUsersId() {
//     return ['1', '2']
// }


// getUsersId().then((result) => console.log(result))

// async function fetchUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json();

//         return users;
//     } catch (error) {
//         console.error(error)
//     }
// }

// function doSomething() {
//     console.log('some logic...')
// }

// async function renderUsers() {
//     const list = document.querySelector('ul')

//     const users = await fetchUsers();

//     console.log('users: ', users)
// }

// async = promise
// await = then
// catch = catch

// fetchData();

// renderUsers()

// const data = await fetch('https://jsonplaceholder.typicode.com/users');

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => console.log(users))

let isLoading = false;

async function fetchData() {
    try {
        isLoading = true;

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Something went wrong')
        }

        const users = await response.json();
        if (users[0].id) {
            const response2 = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${users[0].id}`);
            const todos = await response2.json();
        }


        console.log('users', users)
        console.log('todos', todos)

        return users;
    } catch {
        console.error('Щось трапилось')
    } finally {
        isLoading = false;

        // console.log('finally')
    }
}
fetchData()