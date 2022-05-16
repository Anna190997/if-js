/* eslint-disable */
import { search } from '../src/main.js';

test('When we enter place, country or hotel we have item of array', () => {
  expect(search('Ourika')).toBe(undefined);
});
