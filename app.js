'use strict'; // Використання строгого режиму для забезпечення безпечнішого коду

// Отримуємо елементи DOM для взаємодії з ними
const input = document.querySelector('.input'); // Поле для відображення чисел і операцій
const operators = document.querySelectorAll('.operator'); // Кнопки операторів (+, -, ×, ÷)
const numbers = document.querySelectorAll('.number'); // Кнопки чисел
const clear = document.querySelector('.clear'); // Кнопка очищення
const result = document.querySelector('.result'); // Кнопка для відображення результату

const RESULT_KEY = 'result'; // Ключ для збереження результату в LocalStorage
const operatorsList = ['+', '-', '×', '÷']; // Список операторів для перевірки
let isResultDisplay = false; // Стан, що вказує на відображення результату

// Функція для обробки кліку на оператор
function handleOperatorClick(event) {
    const operatorValue = event.target.textContent; // Отримуємо значення оператора
    const lastChar = input.textContent.at(-1); // Останній символ у полі відображення

    // Якщо поле відображення містить '0', операція не виконується
    if (input.innerHTML === '0') {
        return null;
    }

    // Якщо останній символ є оператором, замінюємо його на новий оператор
    if (operatorsList.includes(lastChar)) {
        const inputValueWithoutOperator = input.innerHTML.substring(0, input.innerHTML.length - 1); // Видаляємо останній оператор
        input.innerHTML = inputValueWithoutOperator + operatorValue; // Додаємо новий оператор
    } else {
        input.innerHTML += operatorValue; // Якщо операторів немає, додаємо оператор до рядка
    }

    isResultDisplay = false; // Очищаємо стан відображення результату
}

// Функція для обробки кліку на число
function handleNumberClick(event) {
    const numberValue = event.target.textContent; // Отримуємо значення числа
    const inputValue = input.innerHTML; // Поточний рядок у полі відображення

    const numbersOnly = inputValue.split(/\+|\-|\×|\÷/g); // Отримуємо числа без операторів

    // Перевіряємо, чи вже є крапка в числі
    if (numberValue === '.' && numbersOnly.at(-1).includes('.')) {
        return null; // Якщо є, більше не додаємо крапку
    }

    // Якщо введене число є 0 або відображається результат, перезаписуємо поле відображення
    if (input.innerHTML === '0' || isResultDisplay) {
        input.innerHTML = numberValue;
    } else {
        input.innerHTML += numberValue; // Додаємо число до рядка
    }

    isResultDisplay = false; // Очищаємо стан відображення результату
}

// Функція для очищення поля відображення
function handleClear() {
    input.innerHTML = '0'; // Скидаємо значення на '0'
    clearResultFromLS(); // Очищаємо результат у LocalStorage
}

// Функція для обробки кліку на кнопку результату
function handleResult() {
    const inputValue = input.innerHTML; // Отримуємо поточне значення

    if (inputValue === '0') {
        return null; // Якщо значення '0', не обробляємо
    }

    const numbersOnly = inputValue.split(/\+|\-|\×|\÷/g); // Отримуємо числа
    const operatorsOnly = inputValue.replace(/[0-9]|\./g, "").split(''); // Отримуємо оператори

    // Ділення
    let dividerIndex = operatorsOnly.indexOf('÷'); // Індекс оператора ділення

    while (dividerIndex !== -1) {
        const result = numbersOnly[dividerIndex] / numbersOnly[dividerIndex + 1]; // Ділимо числа

        numbersOnly.splice(dividerIndex, 2, result); // Замінюємо два числа результатом
        operatorsOnly.splice(dividerIndex, 1); // Видаляємо оператор

        dividerIndex = operatorsOnly.indexOf('÷'); // Шукаємо наступне ділення
    }

    // Множення
    let multiplyIndex = operatorsOnly.indexOf('×'); // Індекс оператора множення

    while (multiplyIndex !== -1) {
        const result = numbersOnly[multiplyIndex] * numbersOnly[multiplyIndex + 1]; // Множимо числа

        numbersOnly.splice(multiplyIndex, 2, result); // Замінюємо два числа результатом
        operatorsOnly.splice(multiplyIndex, 1); // Видаляємо оператор

        multiplyIndex = operatorsOnly.indexOf('×'); // Шукаємо наступне множення
    }

    // Віднімання
    let subIndex = operatorsOnly.indexOf('-'); // Індекс оператора віднімання

    while (subIndex !== -1) {
        const result = numbersOnly[subIndex] - numbersOnly[subIndex + 1]; // Віднімаємо числа

        numbersOnly.splice(subIndex, 2, result); // Замінюємо два числа результатом
        operatorsOnly.splice(subIndex, 1); // Видаляємо оператор

        subIndex = operatorsOnly.indexOf('-'); // Шукаємо наступне віднімання
    }

    // Додавання
    let sumIndex = operatorsOnly.indexOf('+'); // Індекс оператора додавання

    while (sumIndex !== -1) {
        const result = Number(numbersOnly[sumIndex]) + (Number(numbersOnly[sumIndex + 1])); // Додаємо числа

        numbersOnly.splice(sumIndex, 2, result); // Замінюємо два числа результатом
        operatorsOnly.splice(sumIndex, 1); // Видаляємо оператор

        sumIndex = operatorsOnly.indexOf('+'); // Шукаємо наступне додавання
    }

    input.innerHTML = numbersOnly[0]; // Виводимо результат
    setResultToLS(numbersOnly[0]); // Зберігаємо результат в LocalStorage

    isResultDisplay = true; // Встановлюємо стан відображення результату
}

// Зберігає результат у LocalStorage
function setResultToLS(result) {
    localStorage.setItem(RESULT_KEY, result);
}

// Виводить результат із LocalStorage під час завантаження сторінки
function displayResultFromLS() {
    input.innerHTML = localStorage.getItem(RESULT_KEY) ?? '0'; // Встановлюємо 0, якщо результату немає
}

// Очищає результат у LocalStorage
function clearResultFromLS() {
    localStorage.removeItem(RESULT_KEY); // Видаляє результат з LocalStorage
}

// Подія при завантаженні сторінки для відображення попереднього результату
document.addEventListener('DOMContentLoaded', displayResultFromLS);

// Додає обробники подій для кожного оператора
operators.forEach((operator) => {
    operator.addEventListener('click', handleOperatorClick);
});

// Додає обробники подій для кожного числа
numbers.forEach((number) => {
    number.addEventListener('click', handleNumberClick);
});

// Очищення результату при натисканні на кнопку "очистити"
clear.addEventListener('click', handleClear);

// Виведення результату при натисканні на кнопку "результат"
result.addEventListener('click', handleResult);
