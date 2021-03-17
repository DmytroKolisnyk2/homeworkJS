import users from "./users.js";
console.log("task-9");

const getUserNames = users => {
  const returnLonger = (a, b) => a.friends.length - b.friends.length;
  const result = users
    .sort(returnLonger)
    .map(user => user.name)
  return result;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]