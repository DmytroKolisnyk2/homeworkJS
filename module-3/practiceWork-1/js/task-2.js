console.log("task-2");

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
const values = Object.values(salaries);
for (const value of values) {
  sum += value;
}
console.log(sum);