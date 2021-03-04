// My solution

function add (a, b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (obj) {
	return obj.reduce((total, curr) => total + curr, 0);
}

function multiply (obj) {
	return obj.reduce((total, curr) => total * curr);
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(a) {
	if (a === 1 || a === 0) {
		return 1;
	}
	for (let i = a - 1; i >= 1; i--) {
		a *= i;
	}
	return a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

// Provided Solution

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function sum(array) {
//   return array.reduce((total, current) => total + current, 0);
// }

// function multiply(array) {
//     return array.length
//       ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
//       : 0;
// }

// function power(a, b) {
//   return Math.pow(a, b);
// }

// function factorial(n) {
//   if (n == 0) return 1;
//   let product = 1;
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// }

// // This is another implementation of Factorial that uses recursion
// // THANKS to @ThirtyThreeB!
// function recursiveFactorial(n) {
//   if (n===0){
//     return 1;
//   }
//   return n * recursiveFactorial (n-1);
// }