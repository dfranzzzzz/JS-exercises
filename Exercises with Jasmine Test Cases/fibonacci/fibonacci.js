// My solution

const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  let series = [];
  for (let i = 0; i < num; i++) {
    if (series.length < 2) {
      series.push(1);
    } else {
      series.push(series[i -2] + series[i -1]);
    }
  }
  return series[num -1];
}

module.exports = fibonacci

// Provided Solution

// const fibonacci = function(count) {
//   if (count < 0) return "OOPS";
//   if (count == 0) return 0;
//   let a = 0;
//   let b = 1;
//   for (let i = 1; i < count; i++) {
//     const temp = b;
//     b = a + b;
//     a = temp;
//   }
//   return b;
// };