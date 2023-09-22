// console.log("baked lays");

function countOccurences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
  }
  return count;
}

console.log(countOccurences("hello", "o")); // 2;
// countOccurences('hello', 'z') // 0;
