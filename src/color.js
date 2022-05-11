export const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

export const color = function () {
  let i = 0;
  return function () {
    this.style.color = colors[i];
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  };
};
