/* eslint-disable */
import { palindrome } from '../src/js/main.js';
import { search } from '../src/js/main.js';

test('Сhecks if a word is a palindrome', () => {
  expect(palindrome('level')).toBe(true);
});

test('finds matches', () => {
  expect(search('Germany')).toBe(undefined);
});



