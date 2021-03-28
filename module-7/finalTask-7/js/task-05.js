const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
const addName = () => {
  nameOutputRef.textContent = nameInputRef.value;
  if (nameInputRef.value.split(" ").join("") === "") {
    nameOutputRef.textContent = "незнайомець";
  }
};

nameInputRef.addEventListener("input", addName);
