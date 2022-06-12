const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]: function () {
    return this;
  },
      next() {
        if (this.index < this.data.length) {
          return {
            done: false,
            value: this.style.color === this.data[this.index++],
          };
        }
        return {
          done: true,//здесь наверное д.б false, чтобы цикл не останавливался?
          value: this.index,
        };
      },
    };
for (const color of colors) {
  color.this.data
}
const changeStyle = () => (click) => {
  click.target.style.color = colors.next().value;
};
const first = document.getElementById('text1');
const second = document.getElementById('text2');
const third = document.getElementById('text3');
first.addEventListener('click', changeStyle);
second.addEventListener('click', changeStyle);
third.addEventListener('click', changeStyle);