const reverseString = function(str) {
  let newStr = str.split('').reverse().join('');
  return newStr;
}

module.exports = reverseString