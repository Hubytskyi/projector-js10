'use strict';

const form = document.querySelector('.book-form'); // Отримуємо форму для додавання книг.
const bookList = document.querySelector('.book-list'); // Отримуємо список книг, куди будуть додаватися нові книги.

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// Функція-конструктор Book створює об'єкт книги з трьома властивостями: назвою, автором і ISBN.

function UI() {
  this.bookList = document.querySelector('.book-list');
}
// Функція-конструктор UI створює об'єкт для керування інтерфейсом (список книг).

UI.prototype.renderBook = function ({ title, author, isbn }) {
  const tr = document.createElement('tr'); // Створюємо новий рядок таблиці для книги.

  tr.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete-button">x</button></td>
    `;
  // Додаємо вміст книги (назву, автора, ISBN) та кнопку для видалення у вигляді HTML-коду.

  this.bookList.appendChild(tr); // Додаємо новий рядок до списку книг.
}

UI.prototype.deleteBook = function (tr) {
  tr.remove(); // Видаляємо рядок книги зі списку.
  ui.showAlert("Ви успішно видалили книгу!", "success"); // Виводимо повідомлення про успішне видалення книги.
}

UI.prototype.resetForm = function () {
  form.reset(); // Очищаємо форму після додавання книги.
}

UI.prototype.showAlert = function (message, className, isAutoHide = true) {
  const div = document.createElement('div'); // Створюємо елемент для повідомлення.
  div.textContent = message; // Додаємо текст повідомлення.
  div.classList.add(className); // Додаємо клас для стилізації (наприклад, 'success' або 'error').

  form.before(div); // Додаємо повідомлення перед формою.

  if (isAutoHide) {
    setTimeout(() => {
      div.remove(); // Автоматично видаляємо повідомлення через 3 секунди.
    }, 3000);
  }
}

UI.prototype.validateInput = function (input) {
  if (input.value === '') {
    input.classList.add('input-error'); // Якщо поле порожнє, додаємо клас для відображення помилки.
    return true; // Повертаємо true, щоб вказати, що є помилка.
  }

  input.classList.remove('input-error'); // Видаляємо клас помилки, якщо поле заповнене.
  return false; // Повертаємо false, якщо введення валідне.
}

const ui = new UI(); // Створюємо новий екземпляр UI для роботи з інтерфейсом.

function handleSubmit(event) {
  event.preventDefault(); // Скасовуємо стандартну поведінку форми (перезавантаження сторінки).

  const title = event.target.title; // Отримуємо поле 'title' з форми.
  const author = event.target.author; // Отримуємо поле 'author' з форми.
  const isbn = event.target.isbn; // Отримуємо поле 'isbn' з форми.

  const inputs = [title, author, isbn].filter(ui.validateInput);
  // Валідовуємо всі поля форми, якщо якесь поле порожнє, воно буде додано до масиву.

  const isErrorAlreadyExist = form.previousElementSibling.classList.contains('error');
  // Перевіряємо, чи вже є повідомлення про помилку.

  if (inputs.length) {
    if (!isErrorAlreadyExist) {
      ui.showAlert("Усі поля повинні містити значення", "error", false); // Виводимо повідомлення про помилку, якщо є порожні поля.
    }
  } else {
    const titleValue = title.value.trim(); // Видаляємо зайві пробіли з назви.
    const authorValue = author.value.trim(); // Видаляємо зайві пробіли з імені автора.
    const isbnValue = isbn.value.trim(); // Видаляємо зайві пробіли з ISBN.

    const book = new Book(titleValue, authorValue, isbnValue); // Створюємо новий об'єкт книги.

    if (form.previousElementSibling.classList.contains('error')) {
      form.previousElementSibling.remove(); // Якщо є попередня помилка, видаляємо її.
    }

    ui.renderBook(book); // Додаємо нову книгу до списку.
    ui.showAlert("Ви успішно додали книгу!", "success"); // Виводимо повідомлення про успішне додавання книги.
    ui.resetForm(); // Очищаємо поля форми після успішного додавання книги.
  }
}

function handleDelete(event) {
  if (event.target.classList.contains('delete-button')) {
    const tr = event.target.closest('tr'); // Отримуємо батьківський елемент <tr> для кнопки видалення.
    ui.deleteBook(tr); // Видаляємо книгу зі списку.
  }
}

form.addEventListener('submit', handleSubmit); // Додаємо обробник події для відправки форми (додавання книги).
bookList.addEventListener('click', handleDelete); // Додаємо обробник події для кліку по кнопці видалення.
