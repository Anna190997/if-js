import { bubbleSort } from './bubbleSort.js';
import { baseUrl } from './api.js';
import { amountFirst } from './modalweb.js';
import { childrenAge } from './modalweb.js';
import { amountThird } from './modalweb.js';

const generateSearch = (place, placeAdaptive, amountFirst, childrenAge, amountThird) =>
  `${baseUrl}search=${place}${placeAdaptive}&adults=${amountFirst}&children=${childrenAge}&rooms=${amountThird}`;

const getPlace = async () => {
  document.querySelector('.places_items_search').innerHTML = '';
  const place = document.getElementById('destination')?.value;
  const placeAdaptive = document.getElementById('destination_adaptive')?.value;
  try {
    const response = await fetch(
      generateSearch(
        place,
        placeAdaptive,
        amountFirst.innerHTML,
        childrenAge,
        amountThird.innerHTML,
      ),
    );
    const resultHotel = await response.json();
    generateHotel(resultHotel);
  } catch (err) {
    alert('Произошла ошибка. Обновите, пожалуйста, страницу');
  }
};
const generateHotel = (resultHotel) => {
  const hotel = document.getElementById('places_items_search');
  const available = document.getElementById('hide');
  available.classList.remove('hide');
  bubbleSort(resultHotel);
  resultHotel.forEach((destination) => {
    hotel.innerHTML += `
       <div class="hotel_offer_search slider__item">
       <img src=${destination.imageUrl} class="places_image_search" alt="places_image"/>
       <div class="name_hotel_search">
       <a href="#" class="hotel_links_search">${destination.name}</a> </div>
       <div class="location_search">${destination.city}, ${destination.country}</div>
       </div>`;
  });
};
document.getElementById('submit').addEventListener('click', getPlace);
document.getElementById('submit_adaptive').addEventListener('click', getPlace);

async function getResponse() {
  try {
    if (!sessionStorage.getItem('content')) {
      const response = await fetch(baseUrl);
      const content = await response.json();
      sessionStorage.setItem('content', JSON.stringify(content));
    }
    const arr = JSON.parse(sessionStorage.getItem('content'));
    const information = document.getElementById('places_items');
    bubbleSort(arr);
    arr.forEach((key) => {
      information.innerHTML += `
       <div class="hotel_offer col-7 slider__item">
       <img src=${key.imageUrl} class="places_image" alt="places_image"/>
       <div class="name_hotel">
       <a href="#" class="hotel_links">${key.name}</a> </div>
       <div class="location">${key.city}, ${key.country}</div>
       </div>`;
    });
    new ChiefSlider('#slider_2', { loop: true });
  } catch (err) {
    alert('Произошла ошибка. Обновите, пожалуйста, страницу');
  }
}
getResponse();
