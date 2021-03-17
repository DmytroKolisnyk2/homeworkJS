import users from './users.js';
console.log("task-7");

const calculateTotalBalance = users => {
  const result = users.map(user => user.balance).reduce((acc, value) => acc + value, 0);
  return result;
};

console.log(calculateTotalBalance(users)); // 20916