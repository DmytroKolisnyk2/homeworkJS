console.log("task-3");

let calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = prompt("Введіть число   а");
    this.b = prompt("Введіть число   b");
  },
  sum() {
    return +this.a + +this.b;
  },
  mult() {
    return +this.a * +this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mult());
