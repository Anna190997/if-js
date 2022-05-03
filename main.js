function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(5, 4));

function min(a, b) {
  return a < b ? a : b;
}
console.log(min(3, 4));

function max(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}
console.log(max(5, 9));

function max(a, y) {
  return a > y ? a : y;
}
console.log(max(8, 12));

const palindrome = (str) => {
  return str === str.split('').reverse().join('');
};
console.log(palindrome('anna'));

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100 + 1));
}
const replaceZero = (arr) => {
  return String(arr).replaceAll('0', 'zero');
};
console.log(replaceZero(array));
