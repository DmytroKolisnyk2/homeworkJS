console.log("task-4");

const formatString = function (string) {
  if (string.length > 40) {
    string = string.split("");
    string.splice(40);
    string = string.join("");
    return `${string}...`;
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
