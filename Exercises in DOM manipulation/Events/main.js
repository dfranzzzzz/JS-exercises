// // Practice 1
// // Method 2
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// // Method 3
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

// ----------------------------------------------------
// //Practice 2
// function alertFunction() {
//   alert("One more time!");
// }

// const btn = document.querySelector('button');

// // method 2
// // btn.onclick = alertFunction;

// // method 3
// btn.addEventListener('click', alertFunction);

// ----------------------------------------------------
// // Practice 3
// const btn = document.querySelector('button');

// btn.addEventListener('click', function (e) {
//   console.log(e);
// });

// btn.addEventListener('click', function (e) {
//   console.log(e.target);
// });

// btn.addEventListener('click', function (e) {
//   e.target.style.background = 'blue';
// });

// ---------------------------------------------------
// //Practice 4
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});