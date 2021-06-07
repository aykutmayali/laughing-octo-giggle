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