//My solution

const reverseString = function(str) {
  let newStr = str.split('').reverse().join('');
  return newStr;
}

module.exports = reverseString

// Provided solution

// var reverseString = function(string) {
//   return string.split('').reverse().join('') 
// }