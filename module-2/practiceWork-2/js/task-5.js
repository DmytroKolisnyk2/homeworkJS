console.log("task-5");

const myAverageScore = function (numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  total = total / numbers.length;
  if (total <= 100 && total >= 91) {
    return console.log("My average score: A");
  }
  if (total <= 90 && total >= 81) {
    return console.log("My average score: B");
  }
  if (total <= 80 && total >= 71) {
    return console.log("My average score: C");
  }
  if (total <= 70) {
    return console.log("My average score: D");
  }
};

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
