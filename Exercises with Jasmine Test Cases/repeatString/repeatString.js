// My solution

const repeatString = function(str, num) {
  let newStr = '';
  for(let i = 1; i <= num; i++){
    newStr += str;
  }
  if (num < 0) {
    return 'ERROR';
  }
  return newStr;
}

module.exports = repeatString

//Provided solution

// var repeatString = function(word, times) {
//   if (times < 0) return 'ERROR'
//   let string = ''
//   for (let i = 0; i < times; i++) {
//     string += word
//   }
//   return string
// }