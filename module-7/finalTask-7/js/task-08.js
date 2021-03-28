const numberRef = document.querySelector("#controls > input");
const renderRef = document.querySelector("#render");
const destroyRef = document.querySelector("#destroy");
const boxesRef = document.querySelector("#boxes");
const count = +numberRef.value;
console.log(count);
const createBoxes = (amount) => {
  let size = 30;
  let string = "";
  for (let i = 0; i < amount; i++) {
    string = `
<div style="width: ${size}px; height: ${size}px; background-color:rgb(${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )})"></div>`;
    boxesRef.insertAdjacentHTML("beforeend", string);
    size += 10;
  }
};

const destroyBoxes = () => {
  [...boxesRef.children].forEach((child) => child.remove());
};
renderRef.addEventListener("click", createBoxes.bind(count, count));
destroyRef.addEventListener("click", destroyBoxes);
