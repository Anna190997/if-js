/* eslint-disable */
import { deepEqual } from '../src/main.js';
test('object comparison', () => {
  const obj1 = {
    a: 'a',
    b: {
      a: 'a',
      b: 'b',
      c: {
        a: 1,
      },
    },
  };
  const obj2 = {
    b: {
      c: {
        a: 1,
      },
      b: 'b',
      a: 'a',
    },
    a: 'a',
  };
  expect(deepEqual(obj1, obj2)).toBe(true);
});
