console.log("task-4");

const cafe = {
  name: "Republic",
  width: 200,
  height: 300,
  personal: 5,
  hr: true,
};
const arr = Object.entries(cafe);
for (const entry of arr) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}
const place = cafe.width * cafe.height;
console.log(place);
