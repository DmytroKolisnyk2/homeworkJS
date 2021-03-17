import users from './users.js';
console.log("task-4");

const getInactiveUsers = users => {
  const result = users.filter(user => !user.isActive);
  return result;
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]