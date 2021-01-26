"use strict";
console.log("task-4");

const random = Math.random() * 4 + 1;
console.log(random);
if (random < 2) {
  console.log("Випало число менше 2");
} else if (random > 2) {
  console.log("Випало число більше 2");
} else if ((random = 2)) {
  console.log("Випало число 2");
}
