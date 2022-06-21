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

let hotelHTML = data
  .map((places) => {
    return generateHotel(places.imageUrl, places.name, places.city, places.country);
  })
  .join('');

hotelDiv.innerHTML = hotelHTML;
const information = document.querySelector('.places');
information.appendChild(hotelDiv);

//Add filter of form

const btn = document.getElementById('number');
const formFilter = document.getElementById('filter');
btn.addEventListener('click', btnClick);
function btnClick() {
  const classList = formFilter.classList;
  if (classList.contains('hidden')) {
    classList.toggle('hidden');
  } else {
    classList.add('hidden');
  }
}

//Add count on button
const btnPlusFirst = document.getElementById('plus-btn-first');
const btnMinusFirst = document.getElementById('minus-btn-first');
const amountFirst = document.getElementById('amount-first');
const btnPlusSecond = document.getElementById('plus-btn-second');
const btnMinusSecond = document.getElementById('minus-btn-second');
const amountSecond = document.getElementById('amount-second');
const btnPlusThird = document.getElementById('plus-btn-third');
const btnMinusThird = document.getElementById('minus-btn-third');
const amountThird = document.getElementById('amount-third');
btnPlusFirst.addEventListener('click', countPlusFirst);
btnMinusFirst.addEventListener('click', countMinusFirst);
btnPlusSecond.addEventListener('click', countPlusSecond);
btnPlusSecond.addEventListener('click', childrenPlus);
btnMinusSecond.addEventListener('click', countMinusSecond);
btnPlusThird.addEventListener('click', countPlusThird);
btnMinusThird.addEventListener('click', countMinusThird);
function countPlusFirst() {
  const amountPlusFirst = amountFirst.innerHTML;
  if (amountPlusFirst <= 29) {
    amountFirst.innerHTML++;
    const amountPlusFirst = amountFirst.innerHTML;
    btn.value = result(amountPlusFirst);
  }
}
function countMinusFirst() {
  const amountMinusFirst = amountFirst.innerHTML;
  if (+amountMinusFirst >= 2) {
    amountFirst.innerHTML--;
    const amountMinusFirst = amountFirst.innerHTML;
    btn.value = result(amountMinusFirst);
  }
}
function countPlusSecond() {
  const amountPlusSecond = amountSecond.innerHTML;
  if (+amountPlusSecond <= 9) {
    amountSecond.innerHTML++;
    const amountPlusSecond = amountSecond.innerHTML;
    btn.value = result(amountPlusSecond);
  }
}
function countMinusSecond() {
  const amountMinusSecond = amountSecond.innerHTML;
  if (+amountMinusSecond >= 1) {
    amountSecond.innerHTML--;
    const amountMinusSecond = amountSecond.innerHTML;
    btn.value = result(amountMinusSecond);
  }
}
function countPlusThird() {
  const amountPlusThird = amountThird.innerHTML;
  if (+amountPlusThird <= 29) {
    amountThird.innerHTML++;
    const amountPlusThird = amountThird.innerHTML;
    btn.value = result(amountPlusThird);
  }
}
function countMinusThird() {
  const amountMinusThird = amountThird.innerHTML;
  if (+amountMinusThird >= 2) {
    amountThird.innerHTML--;
    const amountMinusThird = amountThird.innerHTML;
    btn.value = result(amountMinusThird);
  }
}
const result = (amountFirst, amountSecond, amountThird) => {
  return `${amountFirst} Adults — ${amountSecond} Children — ${amountThird} Room`;
};

const childrenFilter = document.getElementById('children_number');
function childrenPlus() {
  const classChildren = childrenFilter.classList;
  if (classChildren.contains('hidden_children')) {
    classChildren.toggle('hidden_children');
  }
}
