"use strict";

// API URL для отримання інформації про погоду від OpenWeatherMap
// API KEY використовується для доступу до даних
// ICON URL для відображення іконки погоди

const form = document.querySelector('form'); // Отримуємо елемент форми
const citiesList = document.querySelector('.cities'); // Отримуємо список міст, де будуть додані результати погоди
const msg = document.querySelector('.msg'); // Повідомлення для відображення помилок або попереджень
const button = document.querySelector('button'); // Кнопка, яку натискають для пошуку погоди

const API_KEY = '2ee487a11d28e30cf3f03fbd384eb369'; // API ключ для OpenWeatherMap

const currentCities = []; // Масив для зберігання міст, для яких вже отримана погода

// Функція для рендерингу даних про місто на сторінці
function renderCity(city) {
  const { name, sys, main, weather } = city; // Деструктуризація для отримання даних з об'єкта міста

  msg.innerHTML = ''; // Очищуємо повідомлення
  currentCities.push(name.toLowerCase()); // Додаємо назву міста в масив поточних міст

  const li = document.createElement('li'); // Створюємо елемент <li> для міста
  li.classList.add('city'); // Додаємо клас для стилізації

  // Генеруємо URL іконки погоди
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

  // Створюємо HTML розмітку для відображення даних про місто
  const markup = `
    <h2 class="city-name">
      <span>${name}</span>
      <sup>${sys.country}</sup>
    </h2>
    <p class="city-temp">${Math.round(main.temp)}°</p>
    <img class="city-icon" src="${iconUrl}" alt="${weather[0].description}"/>
    <span>${weather[0].description}</span>
  `;

  li.innerHTML = markup; // Додаємо розмітку в елемент <li>
  citiesList.appendChild(li); // Додаємо елемент <li> до списку міст

  form.reset(); // Очищуємо форму після відправлення
  console.log(city) // Виводимо інформацію про місто в консоль для налагодження
}

// Функція для отримання даних про місто за допомогою Axios
async function fetchCityWithAxios(event) {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки при відправленні форми

  const inputValue = event.target.city.value; // Отримуємо значення введеного міста

  // Перевіряємо, чи вже є місто в поточному списку
  if (currentCities.includes(inputValue.toLowerCase())) {
    msg.innerHTML = `You already know the weather for ${inputValue}`; // Повідомляємо, що погода для цього міста вже відома
    return null;
  }

  // Перевіряємо, чи поле вводу не пусте
  if (!inputValue.trim()) {
    msg.innerHTML = `Input can't be empty`; // Виводимо повідомлення, що поле не може бути порожнім
    return null;
  };

  // Формуємо URL для запиту до API OpenWeatherMap з введеною назвою міста та одиницями виміру в метриках
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;

  try {
    button.setAttribute('disabled', ''); // Відключаємо кнопку, щоб уникнути повторного кліку під час запиту

    const result = await axios.get(apiURL); // Виконуємо запит до API з Axios
    renderCity(result.data); // Відправляємо результат на рендеринг
  } catch (error) {
    // Обробляємо можливі помилки та відображаємо повідомлення
    msg.innerHTML = error.response?.data?.message || error.message || "Something went wrong :(";
    form.reset(); // Очищуємо форму
  } finally {
    button.removeAttribute('disabled'); // Відновлюємо кнопку після виконання запиту
  }
}

// Додаємо обробник події на відправлення форми, який викликає функцію fetchCityWithAxios
form.addEventListener('submit', fetchCityWithAxios);

// function fetchCity(event) {
//   event.preventDefault();

//   const inputValue = event.target.city.value;

//   if (currentCities.includes(inputValue.toLowerCase())) {
//     msg.innerHTML = `You already know the weather for ${inputValue}`;

//     return null;
//   }

//   if (!inputValue.trim()) {
//     msg.innerHTML = `Input can't be empty`;

//     return null;
//   };

//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;

//   fetch(apiURL)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Something went wrong')
//       }

//       return response.json()
//     })
//     .then(renderCity)
//     .catch((error) => {
//       msg.innerHTML = error.message;
//       form.reset();
//     })
// }

// async function fetchCityWithAsync(event) {
//   event.preventDefault();

//   const inputValue = event.target.city.value;

//   if (currentCities.includes(inputValue.toLowerCase())) {
//     msg.innerHTML = `You already know the weather for ${inputValue}`;

//     return null;
//   }

//   if (!inputValue.trim()) {
//     msg.innerHTML = `Input can't be empty`;

//     return null;
//   };

//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;

//   try {
//     const response = await fetch(apiURL);

//     if (!response.ok) {
//       throw new Error('Something went wrong')
//     }

//     const result = await response.json();
//     renderCity(result);
//   } catch {
//     msg.innerHTML = error.message;
//     form.reset();
//   }
// }
