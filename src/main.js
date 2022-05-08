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

export function setMagenta() {
  this.style.color = 'magenta';
  this.removeEventListener('click', setMagenta);
  this.addEventListener('click', setCyan);
}
export function setCyan() {
  this.style.color = 'cyan';
  this.removeEventListener('click', setCyan);
  this.addEventListener('click', setFirebrick);
}
export function setFirebrick() {
  this.style.color = 'firebrick';
  this.removeEventListener('click', setFirebrick);
  this.addEventListener('click', setSpringgreen);
}
export function setSpringgreen() {
  this.style.color = 'springgreen';
  this.removeEventListener('click', setSpringgreen);
  this.addEventListener('click', setSkyblue);
}
export function setSkyblue() {
  this.style.color = 'skyblue';
  this.removeEventListener('click', setSkyblue);
  this.addEventListener('click', setMagenta);
}
document.getElementById('text1').addEventListener('click', setMagenta);
document.getElementById('text2').addEventListener('click', setMagenta);
document.getElementById('text3').addEventListener('click', setMagenta);
