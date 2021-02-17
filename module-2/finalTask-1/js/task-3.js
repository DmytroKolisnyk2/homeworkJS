console.log("task-3");

const findLongestWord = function (string) {
  const words = string.split(" ");
  let result = '';
  for (const word of words) {
    if (word.length > result.length) {
      result = word;
    }
  }
  return result;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
console.log(findLongestWord("Google do a roll")); 

console.log(findLongestWord("May the force be with you")); 