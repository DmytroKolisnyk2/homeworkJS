const validationInputRef = document.querySelector("#validation-input");
const validationLength = +validationInputRef.dataset.length;
validationInputRef.placeholder = `Введи ${validationLength} символів`;
console.log(validationLength);
const validation = () => {
  if (validationInputRef.value.length !== validationLength) {
    validationInputRef.classList.remove("valid");
    validationInputRef.classList.add("invalid");
  }
  if (validationInputRef.value.length === validationLength) {
    validationInputRef.classList.remove("invalid");
    validationInputRef.classList.add("valid");
  }
};
validationInputRef.addEventListener("blur", validation);

// Не працює(((
// const validationInputRef = document.querySelector("#validation-input");
// const validationLength = +validationInputRef.dataset.length;
// validationInputRef.placeholder = `Введи ${validationLength} символів`;
// console.log(validationLength);
// const validation = function(value) {
//   console.log(validationInputRef.value.length);
//   if (validationInputRef.value.length !== value) {
//     validationInputRef.classList.remove("valid");
//     validationInputRef.classList.add("invalid");
//   }
//   if (validationInputRef.value.length === value) {
//     validationInputRef.classList.remove("invalid");
//     validationInputRef.classList.add("valid");
//   }
// };
// validationInputRef.addEventListener("input", validation(validationLength));
