'use strict';

const btn = document.querySelector('.btn');
const searchContainer = document.querySelector('.search');
const countriesContainer = document.querySelector('.countries');
let counter = 1;

///////////////////////////////////////

const renderCountry = function (data, classname = '') {
  const html = ` <article class="country ${classname}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h4 class="country__region">${data.region}</h4>
      <h3 class="country__name">${Object.values(data.name)[0]}</h3>
      <h3 class="country__capital">${data.capital}</h3>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}mln</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
      <p class="country__row"><span>⏰</span>${data.timezones[0]}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Country not found');
      }
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders[0];
      // if (!neighbour) return;
      // fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
    })
    .catch(error => {
      searchContainer.insertAdjacentHTML(
        'beforebegin',
        '<p>Country not found</p>'
      );
    });
  counter++;
};
btn.addEventListener('click', function () {
  if (counter > 4) {
    countriesContainer.removeChild(countriesContainer.firstElementChild);
    counter--;
  }
  const inputValue = document.querySelector('input').value;
  getCountryData(inputValue);

  disableButton();
});

function disableButton() {
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, 2000);
}
