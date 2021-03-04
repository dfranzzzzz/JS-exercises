// My solution

const palindromes = function(str) {
  const newStr = str.toLowerCase().replace(/[^a-z]/g, '');
  return newStr.split('').reverse().join('') == newStr;
}

console.log(palindromes('A car, a man, a maraca.'));
module.exports = palindromes;

// Provided solution

// const palindromes = function(string) {
//   processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
//   return (
//     processedString
//       .split("")
//       .reverse()
//       .join("") == processedString
//   );
// };