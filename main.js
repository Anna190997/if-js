let user = 'John Doe';
console.log(user);

const student = 'Anna';
console.log(student);

{
  let user = student;
  console.log(student);
} //Anna

let test = 1;
test++;
test += '1'; //21
console.log(test);
test--; //20
console.log(test);
console.log(Boolean(test)); //true

let result = 1;
let arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
  result = result * arr[i];
}
console.log(result);

let numb = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < numb.length; i++) {
  if (numb[i] > 5 && numb[i] < 10) {
    console.log(numb[i]);
  }
}

let obj = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < obj.length; i++) {
  if (obj[i] % 2 === 0) {
    console.log(obj[i]);
  }
}
