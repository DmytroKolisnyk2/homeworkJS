const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return Promise.resolve(updatedUsers);
};

const logger = updatedUsers => {
  console.log('%c task-2', 'color: green; font-size: 14px')
  console.table(updatedUsers)
};

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);