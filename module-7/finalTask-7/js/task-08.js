//-----------------------------------------------------------------
// count не оновлюється при введені нового числа

// const numberRef = document.querySelector("#controls > input");
// const renderRef = document.querySelector("#render");
// const destroyRef = document.querySelector("#destroy");
// const boxesRef = document.querySelector("#boxes");
// const count = +numberRef.value;
// console.log(count);
// const createBoxes = (amount) => {
//   let size = 30;
//   let string = "";
//   for (let i = 0; i < amount; i++) {
//     string = `
// <div style="width: ${size}px; height: ${size}px; background-color:rgb(${Math.round(
//       Math.random() * 255
//     )}, ${Math.round(Math.random() * 255)}, ${Math.round(
//       Math.random() * 255
//     )})"></div>`;
//     boxesRef.insertAdjacentHTML("beforeend", string);
//     size += 10;
//   }
// };

// const destroyBoxes = () => {
//   [...boxesRef.children].forEach((child) => child.remove());
// };
// renderRef.addEventListener("click", createBoxes.bind(count, count));
// destroyRef.addEventListener("click", destroyBoxes);


//----------------------------------------------------------------
// працює але в умові аргументом createBoxes має бути число

const numberRef = document.querySelector("#controls > input");
const renderRef = document.querySelector("#render");
const destroyRef = document.querySelector("#destroy");
const boxesRef = document.querySelector("#boxes");
const count = [+numberRef.value];
console.log(count);
const createBoxes = (amount) => {
  let size = 30;
  let string = "";
  for (let i = 0; i < amount[0]; i++) {
    string = `
<div style="width: ${size}px; height: ${size}px; background-color:rgb(${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )})"></div><br/>`;
    boxesRef.insertAdjacentHTML("beforeend", string);
    size += 10;
  }
};

const destroyBoxes = () => {
  [...boxesRef.children].forEach((child) => child.remove());
};
numberRef.addEventListener("input", () => {
  count[0] = +numberRef.value;
  console.log(count);
  
});
renderRef.addEventListener("click", createBoxes.bind(count, count)); // як тут коректніше написати bind
destroyRef.addEventListener("click", destroyBoxes);
  
//----------------------------------------------------------------
// createBoxes не бачить оновлений count

// const numberRef = document.querySelector("#controls > input");
// const renderRef = document.querySelector("#render");
// const destroyRef = document.querySelector("#destroy");
// const boxesRef = document.querySelector("#boxes");
// let count = +numberRef.value;
// console.log(count);
// const updateCount = () => {
//   count = +numberRef.value;
//   console.log(count);
// };
// const createBoxes = (amount) => {
//   let size = 30;
//   let string = "";
//   for (let i = 0; i < amount; i++) {
//     string = `
// <div style="width: ${size}px; height: ${size}px; background-color:rgb(${Math.round(
//       Math.random() * 255
//     )}, ${Math.round(Math.random() * 255)}, ${Math.round(
//       Math.random() * 255
//     )})"></div><br/>`;
//     boxesRef.insertAdjacentHTML("beforeend", string);
//     size += 10;
//   }
// };
// const destroyBoxes = () => {
//   [...boxesRef.children].forEach((child) => child.remove());
//   console.log(count);
// };
// numberRef.addEventListener("input", updateCount.bind(document, count));
// renderRef.addEventListener("click", createBoxes.bind(document, count)); // createBoxes не бачить оновлений count
// destroyRef.addEventListener("click", destroyBoxes);