function getUsersFullName(userNames){
    const [firstName, middleName, lastName] = userNames;
    const middleInitial = middleName[0];
    
    return `${firstName} ${middleInitial} ${lastName}`;
}

console.log(getUsersFullName(['İbrahim', 'Asaf', 'Yalcin']));

class Cat {
    name;
    age;
}

const tito = new Cat();
tito.age = 12;
tito.name = 'tito';

function Dalmatian (name) {
    this.name = name;
  }
  
  Dalmatian.prototype.bark = function() {
    console.log(`${this.name} barks!`);
  };

  // function Dog(age, weight, name) {
//   this.age = age;
//   this.weight = weight;
//   this.name = name;
//   this.bark = function () {
//     console.log(`${this.name} says woof!`);
//   };
// }

function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
      console.log(`${this.name} says woof!`);
  };
  
  dog1 = new Dog(2, 60, 'Java');
  
  dog2 = new Dog(4, 55, 'Jodi');
  
  dog1.bark();
  
  dog2.bark();


  function Hamster() {
    this.hasFur = true;
  }
  
  let waffle = new Hamster();
  let pancake = new Hamster();

  Hamster.prototype.eat = function () {
    console.log('Chomp chomp chomp!');
  };
  
  waffle.eat();
  // 'Chomp chomp chomp!'
  
  pancake.eat();
  // 'Chomp chomp chomp!'

  Hamster.prototype = {
    isHungry: false,
    color: 'brown'
  };

  console.log(waffle.color);
// undefined

waffle.eat();
// 'Chomp chomp chomp!'

console.log(pancake.isHungry);
// undefined

const muffin = new Hamster();

muffin.eat();
// TypeError: muffin.eat is not a function

console.log(muffin.isHungry);
// false

console.log(muffin.color);
// 'brown'

//The previous objects don't have access to the updated prototype's properties; they just retain their secret link to the old prototype:
//ew Hamster objects created moving forward will use the updated prototype:

function Phone() {
  this.operatingSystem = 'Android';
}

Phone.prototype.screenSize = 6;

const myPhone = new Phone();

const own = myPhone.hasOwnProperty('operatingSystem');

console.log(own);
// true

const inherited = myPhone.hasOwnProperty('screenSize');

console.log(inherited);
// false

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true
// isPrototypeOf() is a great way to confirm if an object exists in another object's prototype chain.

const myPrototype = Object.getPrototypeOf(ralph);

console.log(myPrototype);
// { favoriteFood: 'cheese', hasTail: true }


function Longboard() {
  this.material = 'bamboo';
}

const board = new Longboard();

console.log(board.constructor);

// // function Longboard() {
// //   this.material = 'bamboo';
// // }
const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

console.log(rodent.constructor);
// function Object() { [native code] }


const capitals = {
  California: 'Sacramento',
  Washington: 'Olympia',
  Oregon: 'Salem',
  Texas: 'Austin'
};

Object.getPrototypeOf(capitals) === Object.prototype

// true

// Inheritance in JavaScript is when an object is based on another object. Inheritance allows us to reuse existing code, having objects take on properties of other objects.

// When a function is called as a constructor using the new operator, the function creates and returns a new object. This object is secretly linked to its constructor's prototype, which is just another object. Using this secret link allows an object to access the prototype's properties and methods as if it were its own. If JavaScript does not find a particular property within an object, it will keep looking up the prototype chain, eventually reaching Object() (top-level parent) if necessary