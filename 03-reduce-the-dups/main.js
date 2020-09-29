/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
// YOUR CODE HERE
let newArray = [];

let index = 0;
while (index< redundantArray.length) {
  //console.log(rebundantArray[index]);
  if (newArray.includes(redundantArray[index]) === false) {
    newArray.push(redundantArray[index])
  }
  index = index +1;
}
console.log(rebundantArray);
console.log(newArray);

// // check image you could change line 18 to let currentNumber=rebundantArry[index]
// if (newArray.includes(currentNumber) === false) {
//   newArray.push(currentNumber)
// }
// index=index + 1;
// }
// console.log(redundantArray);
// console.log (newArray);
