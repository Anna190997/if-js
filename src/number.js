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
