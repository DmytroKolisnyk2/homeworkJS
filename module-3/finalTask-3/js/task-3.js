console.log("task-3");

// const findBestEmployee = function (employees) {
//   const array = Object.entries(employees);
//   let result = 0;
//   let bestEmployee;
//   for (const value of array) {
//     if (result < value[1]) {
//       bestEmployee = value[0];
//       result = value[1];
//     }
//   }
//   return bestEmployee;
// };

const findBestEmployee = (employees) => {
  const array = Object.keys(employees);
  let result = 0;
  let bestEmployee;
  for (const value of array) {
    if (result < employees[value]) {
      bestEmployee = value;
      result = employees[value];
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
