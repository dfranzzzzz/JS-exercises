// My solution

const sumAll = function(start, end) {
  let sum = 0;

  if (start < 0 || end < 0 || typeof(start) != "number" || typeof(end) != "number") {
    return 'ERROR'; 
  } else {
    if(start > end) {
      for(i = end; i <= start; i++ ){
        sum += end++;
      }
    } else {
      for(i = start; i <= end; i++ ){
        sum += start++;
      }
    }
  }
  return sum;
};

module.exports = sumAll

// provided solution

// const sumAll = function(min, max) {
//   if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//   if (min < 0 || max < 0) return "ERROR";
//   if (min > max) {
//     const temp = min;
//     min = max;
//     max = temp;
//   }
//   let sum = 0;
//   for (let i = min; i < max + 1; i++) {
//     sum += i;
//   }
//   console.log(sum);
// };