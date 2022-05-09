function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
export function number(a, b) {
  return a + b;
}
const sum = curry(number);
console.log(sum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const first = document.getElementById('text1');
const second = document.getElementById('text2');
const third = document.getElementById('text3');

const color = function () {
  let i = 0;
  return function () {
    this.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
};
for (let i = 0; i < colors.length; i++) {
  first.addEventListener('click', color());
  second.addEventListener('click', color());
  third.addEventListener('click', color());
}
