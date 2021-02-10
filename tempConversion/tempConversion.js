//My solution

const ftoc = function(faren) {
  return Math.round(((faren - 32) * (5/9)) * 10) / 10;
}

const ctof = function(cels) {
  return Math.round(((cels * 9/5) +32) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}

//Provided Solution

// var ftoc = function(f) {
//  return Math.round((f - 32) * (5/9) * 10) / 10
// }

// var ctof = function(c) {
//   return Math.round(((c * 9/5) + 32) * 10) / 10 
// }