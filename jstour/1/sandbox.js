// let ninjas = ['one', 'two', 'three']
// let result = ninjas.join(',')
// console.log(result)
// console.log(result[3])

// //let age;
// let age = null;
// console.log(age,age+3, `the age is${age}`);

// let beam = 25;
// console.log("beam == '25'");
// console.log(beam == '25'); //type conversion
// console.log("beam === '25'");
// console.log(beam === '25');

// let score = '100';

// score = Number(score);
// console.log(score+1);
// console.log(typeof score);

// let sth = Number('hello');
// console.log(sth); //Not a number
// sth = String(score)
// console.log(sth, typeof sth)

// const age3 =30;

// if(true){
//     const age1 =40;
//     const name = 'ali';
//     console.log('inside first code block : ', age1, name);
// }

// if(true){
//     const age2 =50,
   
//     var test1= 34;

//     console.log('in second block : ', age2);
// }

// console.log('outside the code block : ', age,test1);

const age = 30;
const name='berna';
if(true){

  // age = 40;
  let age = 40;
  const name = 'shaun';
  var data = 'data';
  let den= 'den'
  age=35;
  console.log('inside 1st code block:', age, name,data);

  if(true){

    let age = 50;
    console.log('inside 2nd code block:', age, name,data);

  }

}

console.log('outside code block:', age, name,data);


// speak(); // can not work before declaration
// function expression
const speak = function(){
    console.log('good day');
}

speak();

const radius = 5
// const calcArea = function(r){
//     return 3.14 * r**2;
// };
    
//arrow function style
// const calcArea =(r)=>{
//     return 3.14 * r**2;
// }
const calcArea = r => 3.14 * r**2;

const area= calcArea(radius);
console.log(`Area of the radius '${radius}' is ${area}`);

const greet = () => 'hello , world';
console.log(greet());

let people =['asaf', 'veysel', 'kerem', 'burak'];

people.forEach(function(people){
    console.log(people + ' member of team');
}
);

people.forEach(person => console.log(person));
people.forEach((person,index) => console.log(person + ' is '+ (index+1) + '. member of group'));

const logPerson = (person, index) => {
    console.log(`${index+1} - hello ${person}`);
};

people.forEach(logPerson);

const ul = document.querySelector('.people');
let html =``;
people.forEach((person ,index)=>{
    html += `<li style= "color:hotpink">${index+1}. member of the group is ${person}</li>`;
});

console.log(html);
ul.innerHTML = html;





