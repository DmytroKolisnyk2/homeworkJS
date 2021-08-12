import './sass/main.scss';
class CountdownTimer {
  constructor({ targetDate, timerRef }) {
    this.targetDate = targetDate;
    this.timerRef = document.querySelector(`${timerRef}`);;
    this.days = this.timerRef.querySelector('[data-value="days"]');
    this.hours = this.timerRef.querySelector('[data-value="hours"]');
    this.mins = this.timerRef.querySelector('[data-value="mins"]');
    this.secs = this.timerRef.querySelector('[data-value="secs"]');
  }
  start() {
    this.updateClockFace(0);
    const startTime = this.targetDate; 
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;

      this.updateClockFace(deltaTime);
    }, 1000);
  }
  updateClockFace(time) {
    this.days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}
const timer = new CountdownTimer({
  timerRef: '#timer-1',
  targetDate: new Date('Sep 17, 2021'),
});

timer.start();