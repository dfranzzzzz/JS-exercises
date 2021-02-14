const container = document.querySelector('#container');
const div = document.querySelector('#div');

const content = document.createElement('div');
const para = document.createElement('p');
const h3 = document.createElement('h3');

// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// // shows text in red in p tag
// para.classList.add('red');
// para.textContent = "Hey I'm Red!"
// para.style.color = 'red';

// // shows text in blue in h3 tag
// h3.classList.add('blue');
// h3.textContent = "I'm blue h3";
// h3.style.color = 'blue';

// container.appendChild(content);
// container.appendChild(para);
// container.appendChild(h3);

const h1 = document.createElement('h1');

content.classList.add('div');
content.style.backgroundColor = 'pink';
content.style.border = 'solid';
content.style.borderColor = 'black';

h1.textContent = "I'm in a div";

para.textContent = "Me too!";

content.appendChild(h1);
content.appendChild(para);

container.appendChild(content);




