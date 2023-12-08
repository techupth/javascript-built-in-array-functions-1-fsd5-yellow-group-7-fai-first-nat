//let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter(word => word.length >= 5);
}
let words = ["apple", "cat", "dog", "elephant"];
const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
