"use strict";

// Клас для роботи з API GitHub
class GitHubAPI {
  constructor() {
    // Базова URL адреса API GitHub для отримання користувачів
    this.baseURL = 'https://api.github.com/users';
    // Токен для аутентифікації 
    this.token = ''
  }

  // Асинхронний метод для отримання інформації про користувача за username
  async getUser(username) {
    try {
      // Відправка GET-запиту до API GitHub з використанням токена аутентифікації
      const response = await axios.get(`${this.baseURL}/${username}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });
      // Повернення даних користувача з API
      return response.data;
    } catch (error) {
      // Обробка помилок, якщо запит до API не вдався
      if (error.response) {
        // Обробка помилок залежно від статусу HTTP відповіді
        switch (error.response.status) {
          case 404:
            throw new Error('User not found.'); // Якщо користувача не знайдено
          case 403:
            throw new Error('API rate limit exceeded.'); // Якщо перевищено ліміт запитів до API
          default:
            throw new Error(`Server error: `, error.response.status); // Інші серверні помилки
        }
      } else {
        // Помилка без відповіді від сервера
        throw new Error('Something went wrong');
      }
    }
  }
}

// Клас для управління інтерфейсом користувача
class UI {
  constructor() {
    // Отримання елементів DOM для форми пошуку та відображення результатів
    this.searchForm = document.querySelector('#searchForm');
    this.searchInput = document.querySelector('#searchInput');
    this.resultsContainer = document.querySelector('#resultsContainer');
    this.loadingIndicator = document.querySelector('#loadingIndicator');

    // Ініціалізація об'єкта для роботи з API
    this.githubApi = new GitHubAPI();

    // Виклик методу для ініціалізації обробників подій
    this.initializeEventListeners();
  }

  // Метод для ініціалізації подій (обробник події форми)
  initializeEventListeners() {
    this.searchForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Запобігання перезавантаженню сторінки при сабміті форми

      this.handleSearch(); // Виклик методу пошуку користувача
    });
  }

  // Метод для обробки пошуку користувача
  async handleSearch() {
    // Отримання введеного імені користувача з поля пошуку
    const username = this.searchInput.value.trim();

    // Якщо ім'я користувача порожнє, показати повідомлення про помилку
    if (!username) {
      this.showError('Please enter a Github username!');
      return;
    }

    // Очищення попередніх результатів і показ індикатора завантаження
    this.clearResult();
    this.setLoading(true);

    try {
      // Отримання даних користувача з API
      const user = await this.githubApi.getUser(username);
      this.displayUserProfile(user); // Відображення профілю користувача
    } catch (error) {
      this.showError(error.message); // Відображення помилки, якщо запит не вдався
    } finally {
      this.setLoading(false); // Приховати індикатор завантаження
    }
  }

  // Метод для показу/приховування індикатора завантаження та блокування поля вводу
  setLoading(isLoading) {
    this.loadingIndicator.style.display = isLoading ? 'block' : 'none';
    this.searchInput.disabled = isLoading;

    // Блокування кнопки пошуку, якщо йде завантаження
    const searchButton = this.searchForm.querySelector('button');
    if (searchButton) {
      searchButton.disabled = isLoading;
    }
  }

  // Метод для відображення повідомлення про помилку
  showError(message) {
    const errorHTML = `
     <div class="error-container text-center py-5">
        <div class="text-danger mb-3">
          <i class="bi bi-exclamation-circle" style="font-size: 3rem;"></i>
        </div>
        <h3 class="h4 mb-3">Oops! Something went wrong</h3>
        <p class="text-muted mb-3">${message}</p>
      </div>
    `;
    // Відображення повідомлення про помилку в контейнері результатів
    this.resultsContainer.innerHTML = errorHTML;
  }

  // Метод для очищення результатів
  clearResult() {
    this.resultsContainer.innerHTML = '';
  }

  // Метод для відображення профілю користувача GitHub
  displayUserProfile(user) {
    const userHTML = `
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <img src="${user.avatar_url}" class="avatar" alt="Profile avatar">
            <div>
              <h2 class="mb-0">${user.name || user.login}</h2>
              ${user.login ? `<p class="text-muted mb-0">@${user.login}</p>` : ''}
            </div>
          </div>
          <a href="${user.html_url}" target="_blank" class="btn btn-primary">
            <i class="bi bi-box-arrow-up-right"></i> View Profile
          </a>
        </div>
        <div class="card-body">
          ${user.bio ? `
            <div class="alert alert-light" role="alert">
              <i class="bi bi-quote"></i> ${user.bio}
            </div>
          ` : ''}
          
          <div class="row mb-3">
            <div class="col-md-3 col-6 mb-2">
              <div class="card h-100">
                <div class="card-body text-center">
                  <h5 class="mb-1">${user.followers}</h5>
                  <small class="text-muted">Followers</small>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6 mb-2">
              <div class="card h-100">
                <div class="card-body text-center">
                  <h5 class="mb-1">${user.following}</h5>
                  <small class="text-muted">Following</small>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6 mb-2">
              <div class="card h-100">
                <div class="card-body text-center">
                  <h5 class="mb-1">${user.public_repos}</h5>
                  <small class="text-muted">Repositories</small>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-6 mb-2">
              <div class="card h-100">
                <div class="card-body text-center">
                  <h5 class="mb-1">${user.public_gists}</h5>
                  <small class="text-muted">Gists</small>
                </div>
              </div>
            </div>
          </div>

          <ul class="list-group">
            ${user.company ? `
              <li class="list-group-item">
                <i class="bi bi-building"></i> ${user.company}
              </li>
            ` : ''}
            ${user.location ? `
              <li class="list-group-item">
                <i class="bi bi-geo-alt"></i> ${user.location}
              </li>
            ` : ''}
            ${user.blog ? `
              <li class="list-group-item">
                <i class="bi bi-link"></i> 
                <a href="${user.blog}" target="_blank">${user.blog}</a>
              </li>
            ` : ''}
            <li class="list-group-item">
              <i class="bi bi-calendar"></i> 
              Joined: ${new Date(user.created_at).toLocaleDateString()}
            </li>
          </ul>
        </div>
      </div>
    `;
    // Відображення профілю користувача в контейнері результатів
    this.resultsContainer.innerHTML = userHTML;
  }
}

// Ініціалізація інтерфейсу після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  new UI();
});
