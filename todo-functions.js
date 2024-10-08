import { TASKS_STORAGE_KEY } from './todo-config.js';
import { collection } from './todo-selectors.js';

// Відображення задач з LocalStorage
export function renderTasks() {
    if (getTasksFromLocalStorage()) {
        const tasks = JSON.parse(getTasksFromLocalStorage());

        // Створюємо елемент для кожної задачі
        tasks.forEach((task, index) => {
            createTask(task, index);
        });
    }
}

// Отримуємо індекс останньої задачі для присвоєння новим задачам
function getLastTasksIndex() {
    if (getTasksFromLocalStorage()) {
        return JSON.parse(getTasksFromLocalStorage()).length;
    }

    return 0;
}

// Створення HTML-елементу для задачі
function createTask(task, index) {
    const li = document.createElement('li');
    li.innerHTML = task;
    li.classList.add('task');
    li.setAttribute('data-id', index); // Присвоюємо задачі унікальний індекс

    // Додаємо кнопку для видалення задачі
    const button = document.createElement('button');
    button.innerHTML = 'x';
    button.className = 'button-icon button-delete';

    li.append(button);

    // Додаємо задачу до колекції (списку)
    collection.append(li);
}

// Додавання нової задачі
export function addTask(event) {
    event.preventDefault(); // Відміняємо перезавантаження сторінки при сабміті

    const currentForm = event.target;
    const inputValue = currentForm.task.value; // Отримуємо значення з поля вводу

    if (!inputValue) {
        return; // Якщо поле порожнє, не додаємо задачу
    }

    const currentIndex = getLastTasksIndex(); // Отримуємо індекс для нової задачі

    createTask(inputValue, currentIndex); // Створюємо нову задачу
    setTaskToLocalStorage(inputValue); // Зберігаємо задачу в LocalStorage

    currentForm.reset(); // Очищаємо поле вводу
}

// Зберігаємо задачу в LocalStorage
function setTaskToLocalStorage(task) {
    let tasks = [];

    if (getTasksFromLocalStorage()) {
        tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо існуючі задачі
    }

    tasks.push(task); // Додаємо нову задачу
    setTasksToLocalStorage(tasks); // Оновлюємо LocalStorage
}

// Оновлюємо LocalStorage
function setTasksToLocalStorage(tasks) {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks)); // Зберігаємо задачі у форматі JSON
}

// Отримуємо задачі з LocalStorage
function getTasksFromLocalStorage() {
    return localStorage.getItem(TASKS_STORAGE_KEY); // Повертаємо задачі у вигляді рядка
}

// Очищаємо LocalStorage
function clearTasksFromLocalStorage() {
    localStorage.removeItem(TASKS_STORAGE_KEY); // Видаляємо всі задачі з LocalStorage
}

// Видалення всіх задач
export function removeTasks() {
    collection.innerHTML = ''; // Очищаємо HTML-код списку задач

    clearTasksFromLocalStorage(); // Очищаємо LocalStorage
}

// Видалення окремої задачі
export function removeTask(event) {
    if (event.target.classList.contains('button-delete')) {
        const li = event.target.closest('.task'); // Знаходимо батьківський елемент (задачу)
        const tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо задачі з LocalStorage

        // Фільтруємо задачі, залишаючи лише ті, які не мають індексу видаленої задачі
        const filteredTasks = tasks.filter((_, index) => {
            return index.toString() !== li.getAttribute('data-id');
        });

        removeTasks(); // Видаляємо всі задачі з інтерфейсу
        setTasksToLocalStorage(filteredTasks); // Зберігаємо оновлений список задач
        renderTasks(); // Відображаємо задачі після видалення
    }
}

// Фільтрація задач
export function filterTasks(event) {
    const filterQuery = event.target.value; // Отримуємо значення з поля фільтрації

    const tasks = collection.querySelectorAll('.task'); // Отримуємо всі задачі

    tasks.forEach((task) => {
        const taskValue = task.firstChild.textContent; // Отримуємо текст задачі
        if (!taskValue.includes(filterQuery.trim())) {
            task.classList.add('hidden'); // Ховаємо задачі, які не відповідають запиту
        } else {
            task.classList.remove('hidden'); // Показуємо задачі, що відповідають запиту
        }
    });
}