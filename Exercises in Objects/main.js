// // First Exercise

// let user = {
//   name = 'John',
//   surname = 'Smith',
// }

// user.name = 'Pete';

// delete user.name;


// // Second Exercise

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//   for(let prop in obj) {
//     return false;
//   }

//   return true;
// }

// Third Exercise

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// function sum (obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// } 

// alert(sum(salaries));

// // Fourth Exercise

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj){
//   for(let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);

// alert(menu.width);
// alert(menu.height);
// alert(menu.title);
