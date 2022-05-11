/* eslint-disable */
import { number } from '../src/number.js';
test('When we enter two numbers, we get the result', () => {
  const a = 5;
  const b = 2;
  expect(number(a, b)).toBe(7);
});