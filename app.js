"use strict";

// const promise = new Promise(function (resolve, reject) {
//     resolve(123)
// });

// fetch('api url')
//     .then
// // console.log(promise)

// promise.then((result) => {
//     console.log(result)
// })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json()
//     })
//     .then((users) => {
//         console.log(users)
//     })

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         return response.json()
//     })
//     .then((posts) => {
//         console.log(posts)
//     })

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: "PUT",
//     body: JSON.stringify({
//         title: "Test post",
//         body: "some text...",
//     })
// })
//     .then((response) => {
//         return response.json()
//     })
//     .then((posts) => {
//         console.log(posts)
//     })



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         console.log(response)

//         if (!response.ok) {
//             throw new Error('Something went wrong!')
//         }

//         return response.json()
//     })
//     .then((posts) => {
//         console.log(posts)
//         renderPosts(posts)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

// function renderPosts(posts) {
//     const list = document.querySelector('ul');

//     posts.forEach((post) => {
//         const li = document.createElement('li')
//         li.innerHTML = post.title;

//         list.append(li)
//     })
// }

// const user = {
//     "id": 1
// }