import './sass/main.scss';
import {CountdownTimer} from './js/CountdownTimer';
const timer = new CountdownTimer({
  timerRef: '#timer-1',
  targetDate: new Date('Sep 17, 2021'),
});

timer.start();