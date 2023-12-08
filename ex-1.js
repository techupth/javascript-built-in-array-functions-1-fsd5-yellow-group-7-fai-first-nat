//let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map(word => word.length);
}
let words = ['hello', 'world'];
const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
