const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');

const switchColor = {
  active: false,
  start(colors) {
    if (this.active) return;
    this.active = true;
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    this.intervalId = setInterval(() => document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)], 1000);
  },
  stop() {
    this.active = false;
    clearInterval(this.intervalId);
  }
}
startRef.addEventListener('click', () => switchColor.start.call(switchColor, colors));
stopRef.addEventListener('click', () => switchColor.stop.call(switchColor));