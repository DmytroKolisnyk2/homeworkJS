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
