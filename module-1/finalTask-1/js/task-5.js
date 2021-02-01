"use strict";

let price;
const country = prompt("В яку країну доставити товар ?");
switch (country.toLowerCase()) {
  case "китай":
    price = 100;
    break;
  case "австралія":
    price = 170;

    break;
  case "чилі":
    price = 250;

    break;
  case "індія":
    price = 80;

    break;
  case "ямайка":
    price = 120;
    break;
  default:
    alert("У вашій країні доставка недоступна");
    break;
}
if (price !== undefined) {
  alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
}

