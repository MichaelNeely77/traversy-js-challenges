// Solution 1

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }


// Soluton Two
// const reverseString = (str) => str.split('').reverse().join('');

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

module.exports = reverseString;
