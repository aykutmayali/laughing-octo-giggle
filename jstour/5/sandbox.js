const button = document.querySelector('button');
button.addEventListener('click',() => {
    console.log('button clicked');
    box.textContent += 'button clicked';
});

// const items = document.querySelectorAll('li');
// Array.from(items).forEach(item =>{
//     item.addEventListener('click', () => {
//         console.log('item clicked');
//     });
// });

// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e =>{
//         console.log('item clicked');
//         console.log(e);
//         console.log(item);
//         e.target.style.textDecoration = 'line-through';
//     });
// });

const ul = document.querySelector('ul');
ul.addEventListener('click', e =>{
    if(e.target.tagName== 'LI'){
        e.target.remove();
    }
})

const copy = document.querySelector('.copied');
copy.addEventListener('copy', ()=>{
    console.log(' what ');
})

const box = document.querySelector('.box');
box.addEventListener('mousemove', e =>{
//    console.log(e);
    console.log(e.offsetX, e.offsetY);
    box.textContent= `x pos: ${e.offsetX} - y pos: ${e.offsetY}`;
})

document.addEventListener('wheel' , e =>{
    console.log(e.pageX, e.pageY);
})