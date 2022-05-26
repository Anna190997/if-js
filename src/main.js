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
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};
export const deepEqual = (object1, object2) => {
  const arr1 = Object.getOwnPropertyNames(object1);
  const arr2 = Object.getOwnPropertyNames(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const bothAreObjects =
      typeof object1[arr1[i]] === 'object' && typeof object2[arr1[i]] === 'object';
    if (!bothAreObjects && object1[arr1[i]] !== object2[arr1[i]]) {
      return false;
    }
    if (bothAreObjects && !deepEqual(object1[arr1[i]], object2[arr1[i]])) {
      return false;
    }
  }
  return true;
};
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
