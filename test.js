// console.log("Pterodactyl");
//
// const largeArr = new Array(100).fill("nemo");
// console.log(largeArr);

// Log all pairs of an Array:

const arr = [1, 2, 3, 4, 5];

console.log(arr);

const logAllPairs = (arr) => {
  arr.forEach((val, index) => {
    arr.forEach((val2, index2) => {
      if (index !== index2 && index <= index2) {
        console.log(`val: ${val}: ${val2}`);
      }
    });

    // console.log(val, index);
  });
};

//console.log(logAllPairs(arr));

logAllPairs(arr);
