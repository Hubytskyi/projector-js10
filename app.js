"use strict";

// const title = document.querySelector('#main-title');
// const img = document.querySelector('img');
// title.setAttribute('title', 'Основи роботи з DOM')
// title.removeAttribute('title')
// console.log(title.innerHTML)
// console.log(title.dataset.userRole)

// const button = document.querySelector('button');
// const buttonWrapper = document.querySelector('.button-wrapper');

// button.addEventListener('click', (event) => {
//     // event.stopPropagation();

//     console.log('click')
// });

// buttonWrapper.addEventListener('click', () => {
//     console.log('button wrapper click')
// });

// document.body.addEventListener('click', () => {
//     console.log('body click')
// });

// console.log(button)

// const input = document.querySelector('input')
// console.log(input)

// input.addEventListener('change', (event) => {
//     console.log('--> input change: ', event.target.value)
// });

// input.addEventListener('input', (event) => {
//     console.log('--> input input: ', event.target.value)
// });

// title.addEventListener('mouseenter', (event) => {
//     event.target.classList.toggle('accent')
// })

// title.addEventListener('mouseleave', (event) => {
//     event.target.classList.toggle('accent')
// })

// input.addEventListener('keyup', (event) => {
//     console.log('--> input keyup: ', event.target.value)
// });

// input.addEventListener('keydown', (event) => {
//     console.log('--> input keydown: ', event.target.value)
// });

// input.addEventListener('keypress', (event) => {
//     console.log('--> input keypress: ', event.target.value)
// });

// const form = document.querySelector('form')

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const { start, end } = event.target

//     console.log('--> input keypress: ', start.value, end.value)
// });

// const start = document.querySelector('#start')
// const end = document.querySelector('#end')
// const button = document.querySelector('button')

// let startValue = null;
// let endValue = null;

// start.addEventListener('change', (event) => {
//     startValue = event.target.value
//     console.log(event.target.value)
// })

// end.addEventListener('change', (event) => {
//     endValue = event.target.value
//     console.log(event.target.value)
// })

// button.addEventListener('click', calculation)

// function calculation() {
//     console.log(new Date(startValue) - new Date(endValue))
// }

// const one = document.querySelector('#one')
// const two = document.querySelector('#two')

// one.addEventListener('focus', () => {
//     console.log('focus')
// })

// one.addEventListener('blur', () => {
//     console.log('blur')
// })

// window.addEventListener('scroll', (event) => {
//     console.log(document.documentElement.scrollTop)
// })

// window.addEventListener('resize', (event) => {
//     console.log(event)
// })