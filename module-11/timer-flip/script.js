"use strict";
function handleTickInit(tick) {

  // get timer offset (if not found, set to today)
  const offset = new Date(localStorage.getItem('countdown-offset') || new Date());

  // store the offset (not really necessary but saves some if statements)
  localStorage.setItem('countdown-offset', offset);

  // time in hours the timer will run down
  const timeDuration = Tick.helper.duration(33, 'day');

  // add 24 hours to get final deadline
  const deadline = new Date(offset.setMilliseconds(offset.getMilliseconds() + timeDuration));

  // create counter
  const counter = Tick.count.down(deadline, { format: ['h', 'm', 's'] });

  // update tick with the counter value
  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    // redirect, uncomment the next line
    // window.location = 'my-location.html'

    // hide counter, uncomment the next line
    // tick.root.style.display = 'none';

    // show message, uncomment the next line
    // document.querySelector('.tick-onended-message').style.display = '';
  };
}