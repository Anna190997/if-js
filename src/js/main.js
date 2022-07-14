async function getResponse() {
  try {
    const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
    const content = await response.json();
    const information = document.querySelector('.places_items');
    content.forEach((key) => {
      information.innerHTML += `
       <div class="hotel_offer col-7 slider__item">
       <img src=${key.imageUrl} class="places_image" alt="places_image"/>
       <div class="name_hotel">
       <a href="#" class="hotel_links">${key.name}</a> </div>
       <div class="location">${key.city}, ${key.country}</div>
       </div>`;
    });
  } catch (err) {
    alert('Произошла ошибка. Обновите, пожалуйста страницу');
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
  childrenNumber.innerHTML += `<select class="children_age">
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
btnPlusSecond.addEventListener('click', childrenFilter);
function childrenDelete() {
  childrenNumber.removeChild(childrenNumber.lastElementChild);
}
btnMinusSecond.addEventListener('click', childrenDelete);
