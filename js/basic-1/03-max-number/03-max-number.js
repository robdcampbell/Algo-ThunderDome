const maxNum = (arr) => {
  let max = Math.max(...arr);

  let sorted = arr.sort((a, b) => b - a);
  return sorted[0];
};

console.log(maxNum([90, 9, 8, 342, 5555, 63, 23, 0, 2]));
