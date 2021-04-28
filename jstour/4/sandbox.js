//const para = document.querySelector('p');
//console.log(para);

// const para = document.querySelector('div.error');
// console.log(para)

// const header = document.querySelector('body > main > h2');
// console.log(header);

// const paras = document.querySelectorAll('p');
// console.log(paras);

// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//     console.log(para);
// })

// console.log(para[1]);
// console.log(errors);

// // get an element by ID
// const title= document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errs = document.getElementsByClassName('error');
// console.log(errs);

// // get elements by their tag name
// const pars = document.getElementsByTagName('p');
// console.log(pars);

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'Bomboley';

// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para);
//     para.innerText += ' new added here'
// })

// const content = document.querySelector('.content');
// content.innerHTML += '<h2> This is new added header h2 tag</h2>';

// const list= ['one','two','three','four'];
// content.innerHTML += '<ul class="listForNum"></ul>';
// const listForNum = document.querySelector('.listForNum');
// list.forEach(num => { 
//     listForNum.innerHTML += `<p> ${num} added </p>`;
// })

// const link= document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://finance.yahoo.com/');
// link.innerText = 'Finance yahoo';

// const mssg = document.querySelector('p.error');
// console.log(mssg);
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('style', 'color: orange;');
// mssg.setAttribute('class', 'success');

// const title = document.querySelector('h1');
// console.log(title.innerText);

// console.log(title.style);
// title.style.color ='orange';// better way for arrangement of style
// //title.setAttribute('style', 'margin: 50px;');
// title.style.margin = '10px';
// title.style.fontSize = '40px';
// title.style.margin = '';


const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
console.log(content.classList);
content.classList.remove('error');
console.log(content.classList);
content.classList.add('success');

const paras = document.querySelectorAll('p');
paras.forEach(p=>{
    console.log(p.textContent); // text content also shows unvisible texts// ==p.innerText doesnt show hidden text
});
paras.forEach(p=>{
    if(p.textContent.includes('success')){
        p.classList.add('success');
    } else if(p.textContent.includes('error')){
        p.classList.add('error');
    }
})

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
// console.log(title.parentElement);
// console.log(title.children);

 const container = document.querySelector('.container');
// console.log(container.children);
// Array.from(container.children).forEach(child=>{
//     child.classList.add('container-element');
// })
console.log(container.previousElementSibling);
console.log(container.nextElementSibling);
