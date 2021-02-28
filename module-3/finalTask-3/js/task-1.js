console.log("task-1");

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const array = Object.keys(user);
for (const key of array) {
  console.log(`${key} : ${user[key]}`);
}