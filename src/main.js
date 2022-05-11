import { color } from './color.js';

const first = document.getElementById('text1');
const second = document.getElementById('text2');
const third = document.getElementById('text3');

first.addEventListener('click', color());
second.addEventListener('click', color());
third.addEventListener('click', color());
