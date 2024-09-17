"use strict";

const form = document.querySelector('.book-form'); // Знаходимо форму додавання книги.
const bookList = document.querySelector('.book-list'); // Знаходимо список книг, де будуть відображатися додані книги.

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// Клас Book створює об'єкт книги з трьома властивостями: title (назва), author (автор), isbn (унікальний номер).

class UI {
  constructor() {
    this.bookList = document.querySelector('.book-list');
  }
  // Клас UI відповідає за взаємодію з інтерфейсом користувача, наприклад, за додавання або видалення книги зі списку.

  renderBook({ title, author, isbn }) {
    const tr = document.createElement('tr'); // Створюємо новий елемент <tr> для таблиці, щоб відобразити книгу.

    tr.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete-button">x</button></td>
    `;
    // Додаємо вміст до рядка таблиці з назвою книги, автором, ISBN і кнопкою для видалення.

    this.bookList.appendChild(tr); // Додаємо новий рядок до списку книг у DOM.
  }

  deleteBook(tr) {
    tr.remove(); // Видаляємо рядок книги зі списку.
    ui.showAlert("Ви успішно видалили книгу!", "success"); // Показуємо повідомлення про успішне видалення книги.
  }

  resetForm() {
    form.reset(); // Очищаємо всі поля форми після додавання книги.
  }

  showAlert(message, className, isAutoHide = true) {
    const div = document.createElement('div'); // Створюємо новий <div> для відображення повідомлення.
    div.textContent = message; // Додаємо текст повідомлення.
    div.classList.add(className); // Додаємо клас для стилізації повідомлення (наприклад, 'success' або 'error').

    form.before(div); // Додаємо повідомлення перед формою.

    if (isAutoHide) {
      setTimeout(() => {
        div.remove(); // Якщо isAutoHide дорівнює true, повідомлення буде автоматично видалено через 3 секунди.
      }, 3000);
    }
  }

  validateInput(input) {
    if (input.value === '') {
      input.classList.add('input-error'); // Якщо поле порожнє, додаємо клас для помилки.
      return true; // Повертаємо true, якщо введення не валідне.
    }

    input.classList.remove('input-error'); // Якщо поле заповнене, видаляємо клас помилки.
    return false; // Повертаємо false, якщо введення валідне.
  }
}

const ui = new UI(); // Створюємо новий об'єкт UI для роботи з інтерфейсом.

function handleSubmit(event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження сторінки).

  const title = event.target.title; // Отримуємо значення поля 'title'.
  const author = event.target.author; // Отримуємо значення поля 'author'.
  const isbn = event.target.isbn; // Отримуємо значення поля 'isbn'.

  const inputs = [title, author, isbn].filter(ui.validateInput);
  // Валідовуємо всі поля форми, якщо поле порожнє, воно буде додано до масиву.

  const isErrorAlreadyExist = form.previousElementSibling.classList.contains('error');
  // Перевіряємо, чи вже є повідомлення про помилку.

  if (inputs.length) {
    if (!isErrorAlreadyExist) {
      ui.showAlert("Усі поля повинні містити значення", "error", false); // Виводимо повідомлення про помилку, якщо є порожні поля.
    }
  } else {
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const isbnValue = isbn.value.trim();
    // Обрізаємо зайві пробіли з полів введення.

    const book = new Book(titleValue, authorValue, isbnValue); // Створюємо новий об'єкт книги.

    if (form.previousElementSibling.classList.contains('error')) {
      form.previousElementSibling.remove(); // Якщо є попередня помилка, видаляємо її.
    }

    ui.renderBook(book); // Додаємо книгу до списку.
    ui.showAlert("Ви успішно додали книгу!", "success"); // Виводимо повідомлення про успішне додавання книги.
    ui.resetForm(); // Очищаємо поля форми.
  }
}

function handleDelete(event) {
  if (event.target.classList.contains('delete-button')) {
    const tr = event.target.closest('tr'); // Отримуємо батьківський <tr> для кнопки видалення.
    ui.deleteBook(tr); // Видаляємо книгу зі списку.
  }
}

form.addEventListener('submit', handleSubmit); // Додаємо обробник події для додавання книги.
bookList.addEventListener('click', handleDelete); // Додаємо обробник події для видалення книги.
