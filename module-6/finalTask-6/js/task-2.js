import users from './users.js';
console.log("task-2");

const getUsersWithEyeColor = (users, color) => {
  const result = users.filter(user => user.eyeColor === color);
  return result;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]