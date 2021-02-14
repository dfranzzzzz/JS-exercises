// My solution

const leapYears = function(year) {
  if (year % 100 === 0) {return (year % 400 === 0) ? true : false}
  else {return (year % 4 === 0) ? true : false}
}

module.exports =  leapYears

// Provided solution

// var leapYears = function(year) {
//   return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
// }