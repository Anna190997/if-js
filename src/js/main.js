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
// btn.addEventListener('click', btnDelete);
function btnClick() {
  const classList = formFilter.classList;
  if (classList.contains('hidden')) {
    classList.toggle('hidden');
  } else {
    classList.add('hidden');
  }
}

//Add count on button
// const btnPlusFirst = document.getElementById('plus-btn-first');
// // const btnMinusFirst = document.getElementById('minus-btn-first');
// const amountFirst = document.getElementById('amount-first');
// // const btnPlusSecond = document.getElementById('plus-btn-second');
// // const btnMinusSecond = document.getElementById('minus-btn-second');
// // const amountSecond = document.getElementById('amount-second');
// // const btnPlusThird = document.getElementById('plus-btn-third');
// // const btnMinusThird = document.getElementById('minus-btn-third');
// // const amountThird = document.getElementById('amount-third');
// btnPlusFirst.addEventListener('click', countPlusFirst);
// // btnMinusFirst.addEventListener('click', countMinusFirst);
// // btnPlusSecond.addEventListener('click', countPlusSecond);
// btnPlusSecond.addEventListener('click', childrenView);
// btnPlusSecond.addEventListener('click', childrenFilter);
// // btnMinusSecond.addEventListener('click', countMinusSecond);
// btnMinusSecond.addEventListener('click', childrenDelete);
// // btnPlusThird.addEventListener('click', countPlusThird);
// // btnMinusThird.addEventListener('click', countMinusThird);


document.querySelector('.change_filter').onclick = function(e) {
  let target = e.target;
  if (target.dataset.plus != undefined) {
    let amount = target.closest('div').querySelector('.amount');
    amount.innerHTML++;
   if (validation[dataset.minus.firstBtn].min =< amount && validation[dataset.plus.firstBtn].max >= amount) {
      target.setAttribute('disabled', true);
  }
  }


  if (target.dataset.minus != undefined) {
    let amount = target.closest('div').querySelector('.amount');
    amount.innerHTML--;
  }

  }
  if (validation["secondBtn"].min =< amount && validation["secondBtn"].max >= amount) {
    target.setAttribute('disabled', true);
  }
  if (validation["thirdBtn"].min =< amount && validation["thirdBtn"].max >= amount) {
    target.setAttribute('disabled', true);
  }
};
const validation  = {
  firstBtn: {min: 1, max: 30},
  secondBtn: {min: 1, max: 10},
  thirdBtn: {min: 1, max: 30},
}









//   if (+amountMinusSecond == 0) {
//     btnMinusSecond.setAttribute('disabled', true);
//   }
//   if (+amountMinusSecond === 1) {
//     const ageList = children.classList;
//     if (!ageList.contains('children_hidden')) {
//       ageList.add('children_hidden');
//     }
//   }
// }

function childrenDelete() {
  children.removeChild(children.lastElementChild);
}

// const result = (amountFirst, amountSecond, amountThird) => {
//   return `${amountFirst} Adults — ${amountSecond} Children — ${amountThird} Room`;
// };
//
const children = document.getElementById('children_number');
function childrenView() {
  const ageList = children.classList;
  if (ageList.contains('children_hidden')) {
    ageList.toggle('children_hidden');
  }
}

function btnDelete() {
  const ageList = children.classList;
  if (!ageList.contains('children_hidden')) {
    ageList.add('children_hidden');
  }
}

function childrenFilter() {
  const children = document.getElementById('children_number');
  children.innerHTML += `<select class="children_age">
            <option>1 years old</option>
            <option>2 years old</option>
            <option>3 years old</option>
            <option>4 years old</option>
            <option>5 years old</option>
            <option>6 years old</option>
            <option>7 years old</option>
            <option>8 years old</option>
            <option>9 years old</option>
            <option>10 years old</option>
            <option>11 years old</option>
            <option>12 years old</option>
            <option>13 years old</option>
            <option>14 years old</option>
            <option>15 years old</option>
            <option>16 years old</option>
            <option>17 years old</option>
            </select>
          `;
}
