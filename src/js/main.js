const baseUrl = `https://fe-student-api.herokuapp.com/api/hotels?`;
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
      const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
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

const btn = document.getElementById('number');
const btnAdaptive = document.getElementById('number-adaptive');
const formFilter = document.getElementById('filter');
const adults = document.getElementById('adults');
const children = document.getElementById('children');
const rooms = document.getElementById('rooms');
const amountFirst = document.getElementById('amount-first');
const btnPlusSecond = document.getElementById('plus-btn-second');
const btnMinusSecond = document.getElementById('minus-btn-second');
const amountSecond = document.getElementById('amount-second');
const amountThird = document.getElementById('amount-third');

function btnClick() {
  const classList = formFilter.classList;
  if (classList.contains('hidden')) {
    classList.toggle('hidden');
  } else {
    classList.add('hidden');
  }
}
btn.addEventListener('click', btnClick);
btnAdaptive.addEventListener('click', btnClick);

document.querySelector('.change_filter').onclick = function (e) {
  const target = e.target;
  if (target.dataset.plus) {
    const amount = target.closest('div').querySelector('.amount');

    if (+target.dataset.max > +amount.innerHTML) {
      amount.innerHTML++;
      btn.value = result(amountFirst, amountSecond, amountThird);
      adults.value = amountFirst.innerHTML.replace(/ /g, '');
      children.value = amountSecond.innerHTML.replace(/ /g, '');
      rooms.value = amountThird.innerHTML.replace(/ /g, '');
      if (amount.innerHTML == 10) {
        btnPlusSecond.setAttribute('disabled', true);
      }
    }
    return;
  }

  if (target.dataset.minus) {
    const amount = target.closest('div').querySelector('.amount');

    if (+target.dataset.min < +amount.innerHTML) {
      amount.innerHTML--;

      if (amount.innerHTML == 0) {
        const ageList = childrenAdd.classList;
        if (!ageList.contains('children_hidden')) {
          ageList.add('children_hidden');
        }
      }
    }
    btn.value = result(amountFirst, amountSecond, amountThird);
    adults.value = amountFirst.innerHTML.replace(/ /g, '');
    children.value = amountSecond.innerHTML.replace(/ /g, '');
    rooms.value = amountThird.innerHTML.replace(/ /g, '');
  }
};

const result = (amountFirst, amountSecond, amountThird) => {
  return `${amountFirst.innerHTML}  Adults — ${amountSecond.innerHTML}  Children — ${amountThird.innerHTML}  Room`.replace(
    / /g,
    '',
  );
};

const childrenAdd = document.getElementById('children_number');
function childrenView() {
  const ageList = childrenAdd.classList;
  if (ageList.contains('children_hidden')) {
    ageList.toggle('children_hidden');
  }
}
btnPlusSecond.addEventListener('click', childrenView);
function btnDelete() {
  const ageList = childrenAdd.classList;
  if (!ageList.contains('children_hidden')) {
    ageList.add('children_hidden');
  }
}
btn.addEventListener('click', btnDelete);
btnAdaptive.addEventListener('click', btnDelete);
const childrenNumber = document.getElementById('children_number');

function childrenFilter() {
  const extraChild = document.createElement('select');
  extraChild.classList.add('children_age');
  extraChild.innerHTML += `
            <option value="1">1 years old</option>
            <option value="2">2 years old</option>
            <option value="3">3 years old</option>
            <option value="4">4 years old</option>
            <option value="5">5 years old</option>
            <option value="6">6 years old</option>
            <option value="7">7 years old</option>
            <option value="8">8 years old</option>
            <option value="9">9 years old</option>
            <option value="10">10 years old</option>
            <option value="11">11 years old</option>
            <option value="12">12 years old</option>
            <option value="13">13 years old</option>
            <option value="14">14 years old</option>
            <option value="15">15 years old</option>
            <option value="16">16 years old</option>
            <option value="17">17 years old</option>          
          `;
  childrenNumber.appendChild(extraChild);
}
btnPlusSecond.addEventListener('click', childrenFilter);
function childrenDelete() {
  childrenNumber.removeChild(childrenNumber.lastElementChild);
}
btnMinusSecond.addEventListener('click', childrenDelete);

const getChildAges = () => {
  const select = document.querySelectorAll('.children_age');
  if (select.length === 0) {
    return '0';
  }
  const arrAge = [];
  select.forEach((item) => {
    arrAge.push(item.value);
  });
  return arrAge.join(',');
};
const childrenAge = getChildAges();

function bubbleSort(arr) {
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (arr[j].name > arr[j + 1].name) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return arr;
}
