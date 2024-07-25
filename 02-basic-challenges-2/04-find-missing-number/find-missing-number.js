function findMissingNumber(arr) {
  if(arr.length === 0) return 1;

  const n = arr.length +1;
  const expectedSum = n * (n + 1) / 2;
  
  // Solution 1
//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }
//   return expectedSum - actualSum;
// }

//Solution 2

const actualSum = arr.reduce((sum, number) => sum + number, 0 );

return expectedSum - actualSum;
}

module.exports = findMissingNumber;
