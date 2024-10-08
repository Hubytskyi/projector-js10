// Отримуємо необхідні DOM елементи
const form = document.querySelector('.create-task-form'); // Форма для створення задач
const collection = document.querySelector('.collection'); // Список задач
const clearButton = document.querySelector('.clear-tasks'); // Кнопка для видалення всіх задач
const filterInput = document.querySelector('.filter-input'); // Поле для фільтрації задач

export {
    form,
    collection,
    clearButton,
    filterInput
}