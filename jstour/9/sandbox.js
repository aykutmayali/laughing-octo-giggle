//------------------------------------------------------------[filter]
//const scores =[10,30,15,25,50,40,5];
// const filteredScores= scores.filter((score) => {    
//     return score> 20;
// });
// console.log(filteredScores);

// const users = [
//     {name: 'asaf', premium: true},
//     {name: 'kerem', premium: false},
//     {name: 'veysel', premium: true},
//     {name: 'burak', premium: false}
// ];

// // const premiumUsers = users.filter(user => {
// //     if(user.premium === true){
// //         return user.name;
// //     }
// // });

// const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers);

//------------------------------------------------------------[map]
// const prices = [10,35,6,78,12,96,68,4];

// const salePrices = prices.map(price => price/2);

// console.log(salePrices);

// const products = [
//     {name: 'lemon', price: 35},
//     {name: 'orange', price: 45},
//     {name: 'lettuce', price: 65},
//     {name: 'apple', price: 45},
//     {name: 'banana', price: 85},
//     {name: 'sugar', price: 25},
//     {name: 'gum', price: 15},
// ];

// const saleProducts = products.map((product) => {
//     if(product.price >30){
//         return {
//             name: product.name, price: product.price /2
//         };        
//     } else {
//         return product;
//     }
// });
// console.log(saleProducts, products); // with mapping org array keeps unchanged


//------------------------------------------------------------[reduce]

// const scores=[10,20,60,40,70,90,30];

// const result = scores.reduce((acc,curr) => {
//     if(curr > 50 ){
//         acc++;
//     }
//     return acc;
// },0); // initial val for acc , curr is a val for each item iterate the array

// console.log(result);

// const scores = [
//     {player: 'asaf', score: 56},
//     {player: 'kerem', socre:90},
//     {player: 'burak', score: 120},
//     {player: 'veysel', score: 200},
//     {player: 'asaf', score: 69}
// ];

// const asafTotal = scores.reduce((acc,curr)=>{
//     if(curr.player === 'asaf'){
//         acc += curr.score;
//     }
//     return acc;
// },0);

// console.log(asafTotal);

//------------------------------------------------------------[find]

// const scores = [10,5,0,40,60,1,20,70];

// const firstHighScore = scores.find((score) =>{
//     return score > 50;
// }
// );

// const firstHighScore1 = scores.find(score => score > 50);

// console.log(firstHighScore1);

//------------------------------------------------------------[sort]

// const names = ['asaf', 'veysel', 'burak', 'kerem'];

// names.sort();
// console.log(names);// destruct the array original form with sort
// names.reverse();
// console.log(names);

// const scores = [10, 50,6,25,89,95,2,7,3,45];
// //scores.sort();
// //console.log(scores); // sort with first digit
// scores.reverse();
// console.log(scores);

// const players = [
//         {player: 'asaf', score: 56},
//         {player: 'kerem', score:90},
//         {player: 'burak', score: 120},
//         {player: 'veysel', score: 200},
//         {player: 'asaf', score: 69}
//     ];

//     // players.sort((a,b)=>{
//     //     if(a.score > b.score){
//     //         return -1;
//     //     } else if(b.score > a.score){
//     //         return 1;
//     //     } else {
//     //         return 0;
//     //     }
//     // });

//   //  players.sort((a,b)=> b.score - a.score);
//     players.sort((a,b) => a-b);

//     console.log(players);

//------------------------------------------------------------[chaining array methods]

const products = [
    {name: 'lemon', price: 8},
    {name: 'orange', price: 45},
    {name: 'lettuce', price: 65},
    {name: 'apple', price: 45},
    {name: 'banana', price: 5},
    {name: 'sugar', price: 25},
    {name: 'gum', price: 15},
];

// const filteredProducts= products.filter( product=> product.price < 20);
// console.log(filteredProducts);

// const saleProduct = filteredProducts.map((product)=>{
//     return {
//         name: product.name , price: product.price /2
//     };
// }); 
// console.log(saleProduct);

// const promos = filteredProducts.map(product => {
//     return `the ${product.name} is ${product.price} liras`; 
// });

const promos = products
    .filter(product => product.price <20)
    .map(product => `<li> the ${product.name} is ${product.price /2} liras <br>`);
console.log(promos);


const p = document.querySelector('.contentparagraph');
const inner = products.forEach(element => {
    p.innerHTML += ` ${element.name} is ${element.price} liras ` + "<br>";
});


p.innerHTML += "<ul> promos for this products : <br>";
p.innerHTML += `${promos}`;
