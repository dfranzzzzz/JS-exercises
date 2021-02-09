const removeFromArray = function(myArray, ...valuesToCheck) {
  let newArray = [];
  for(let i = 0; i < valuesToCheck.length; i++) {
    if (myArray.includes(valuesToCheck[i])) {
      myArray.splice(myArray.indexOf(valuesToCheck[i]), 1)
    }

  }
  return myArray;
}
// removeFromArray([1,2,3,4], 1,2,3,4)
module.exports = removeFromArray