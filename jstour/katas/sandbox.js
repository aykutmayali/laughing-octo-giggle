const products = [
    {name: 'lemon', price: 8},
    {name: 'orange', price: 45},
    {name: 'lettuce', price: 65},
    {name: 'apple', price: 45},
    {name: 'banana', price: 5},
    {name: 'sugar', price: 25},
    {name: 'gum', price: 15},
];

const promos = products
    .filter(product => product.price <20)
    .map(product => `<li> the ${product.name} is ${product.price /2} liras <br>`);
//console.log(promos);


const p = document.querySelector('.contentparagraph');
const inner = products.forEach(element => {
    p.innerHTML += ` ${element.name} is ${element.price} liras ` + "<br>";
});


p.innerHTML += "<ul> promos for this products : <br>";
p.innerHTML += `${promos}`;


function XO(str) {
    //code here
  let x =0;
  let o =0;
  var res = str.toLowerCase();
  if(res.includes('x', 0) && res.includes('o', 0)){
    for(let i=0; i<res.length; i++){
      if(res[i] === 'x'){
       x++;
       }else if(res[i] === 'o'){
         o++;
       }
     }
  }
  
  if (x === o){
    console.log('x: '+ x + ' & ' + ' o :'+o);  
    return true;
  } else {
    return false;
  }
}

str1 ='xxOo';

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(str1 + '  --> '+ str1.toLowerCase());
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));