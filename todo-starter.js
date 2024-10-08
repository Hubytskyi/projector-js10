import { 
    renderTasks, 
    addTask, 
    removeTasks, 
    removeTask,
    filterTasks
} from './todo-functions.js';

import {
    form,
    collection,
    clearButton,
    filterInput
} from './todo-selectors.js';

function initEventListeners() {
    // Додаємо обробники подій
    document.addEventListener('DOMContentLoaded', renderTasks); // При завантаженні сторінки відображаємо задачі з LocalStorage
    form.addEventListener('submit', addTask); // Додаємо задачу при сабміті форми
    clearButton.addEventListener('click', removeTasks); // Видаляємо всі задачі при натисканні на кнопку
    collection.addEventListener('click', removeTask); // Видаляємо окрему задачу при натисканні на кнопку "x"
    filterInput.addEventListener('input', filterTasks); // Фільтруємо задачі при введенні тексту у поле
}

export function logs() {
    console.log('Projects has been started on port: 5500' )
}

export default initEventListeners;