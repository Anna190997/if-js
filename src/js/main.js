const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const generateHotel = (imageUrl, name, city, country) => {
  return `
<div class="hotel_offer col-7">
<img src= ${imageUrl} class="places_image" alt="places_image"/>
<div class="name_hotel">
<a href="#" class="hotel_links">${name}</a> </div>
<div class="location">${city} ${country}</div>
</div>
`;
};

const hotelDiv = document.createElement('div');
hotelDiv.classList.add('places_items');

const hotelHTML = data
  .map((places) => {
    return generateHotel(places.imageUrl, places.name, places.city, places.country);
  })
  .join('');

hotelDiv.innerHTML = hotelHTML;
const information = document.querySelector('.places');
information.appendChild(hotelDiv);

//Add filter of form

const btn = document.getElementById('number');
const btnAdaptive = document.getElementById('number-adaptive');
const formFilter = document.getElementById('filter');
const adults = document.getElementById('adults');
const children = document.getElementById('children');
const rooms = document.getElementById('rooms');
btn.addEventListener('click', btnClick);
btn.addEventListener('click', btnDelete);
btnAdaptive.addEventListener('click', btnClick);
btnAdaptive.addEventListener('click', btnDelete);
function btnClick() {
  const classList = formFilter.classList;
  if (classList.contains('hidden')) {
    classList.toggle('hidden');
  } else {
    classList.add('hidden');
  }
}

//Add count on button
const amountFirst = document.getElementById('amount-first');
const btnPlusSecond = document.getElementById('plus-btn-second');
const btnMinusSecond = document.getElementById('minus-btn-second');
const amountSecond = document.getElementById('amount-second');
const amountThird = document.getElementById('amount-third');
btnPlusSecond.addEventListener('click', childrenView);
// btnPlusSecond.addEventListener('click', childrenFilter);
btnMinusSecond.addEventListener('click', childrenDelete);

document.querySelector('.change_filter').onclick = function (e) {
  const target = e.target;
  if (target.dataset.plus) {
    const amount = target.closest('div').querySelector('.amount');

    if (+target.dataset.max > +amount.innerHTML) {
      amount.innerHTML++;
      btn.value = result(amountFirst, amountSecond, amountThird);
      adults.value = resultAdults(amountFirst);
      children.value = resultChildren(amountSecond);
      rooms.value = resultRooms(amountThird);
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
        const ageList = children.classList;
        if (!ageList.contains('children_hidden')) {
          ageList.add('children_hidden');
        }
      }
    }
    btn.value = result(amountFirst, amountSecond, amountThird);
    adults.value = resultAdults(amountFirst);
    children.value = resultChildren(amountSecond);
    rooms.value = resultRooms(amountThird);
  }
};

const result = (amountFirst, amountSecond, amountThird) => {
  return `${amountFirst.innerHTML}  Adults — ${amountSecond.innerHTML}  Children — ${amountThird.innerHTML}  Room`.replace(
      / /g,
      '',
  );
};

const resultAdults = (amountFirst) => {
  return `${amountFirst.innerHTML}`.replace(/ /g, '');
};

const resultChildren = (amountSecond) => {
  return `${amountSecond.innerHTML}`.replace(/ /g, '');
};

const resultRooms = (amountThird) => {
  return `${amountThird.innerHTML}`.replace(/ /g, '');
};

function childrenDelete() {
  children.removeChild(children.lastElementChild);
}

const childrenAdd = document.getElementById('children_number');
function childrenView() {
  const ageList = childrenAdd.classList;
  if (ageList.contains('children_hidden')) {
    ageList.toggle('children_hidden');
  }
}

function btnDelete() {
  const ageList = childrenAdd.classList;
  if (!ageList.contains('children_hidden')) {
    ageList.add('children_hidden');
  }
}

// function childrenFilter() {
//   const children = document.getElementById('children_number');
//   let arr = Array(17);
//
//   children.innerHTML += `<select class="children_age">
//   ${arr.forEach(element, (index) => <option> ${index} years old</option>)}
//            </select>`;
// }