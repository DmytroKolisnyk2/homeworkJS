const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsRef = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  if (typeof ingredient === "string" || typeof ingredient === "number") {
    const tag = document.createElement("li");
    tag.textContent = ingredient;
    ingredientsRef.appendChild(tag);
  }
});
