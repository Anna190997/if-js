const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]: function () {
    return this;
  },
  next() {
    if (this.current === undefined) {
      this.current = 0;
    }
    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    }
    if (this.current === this.data.length) {
      this.current = 0;
      return this.next();
    }
    return {
      done: true,
    };
  },
};

const changeStyle = (color) => (click) => {
  click.target.style.color = color.next().value;
};
const first = document.getElementById('text1');
const second = document.getElementById('text2');
const third = document.getElementById('text3');
first.addEventListener('click', changeStyle(colors));
second.addEventListener('click', changeStyle(colors));
third.addEventListener('click', changeStyle(colors));
