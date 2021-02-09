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
