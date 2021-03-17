import users from './users.js';
console.log("task-6");

const getUsersWithAge = (users, min, max) => {
  const result = users.filter(user => user.age > min && user.age < max);
  return result;
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]