import users from './users.js';
console.log("task-8");

const getUsersWithFriend = (users, friendName) => {
  const result = users.filter(user => user.friends.includes(friendName)).map(user =>user.name);
  return result;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]