import './sass/main.scss';
import Tick from '@pqina/flip';

function setupFlip(tick) {

  Tick.helper.interval(function () {

    tick.value++;

    // Set `aria-label` attribute which screenreaders will read instead of HTML content
    tick.root.setAttribute('aria-label', tick.value);

  }, 1000);

}     
console.log(Tick);
// // const days = Math.floor(time / (1000 * 60 * 60 * 24));

// // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// // const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// // const secs = Math.floor((time % (1000 * 60)) / 1000);

// // new CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: new Date('Jul 17, 2019'),
// // });
