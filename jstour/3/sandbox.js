// const userOne = {
//     username: 'ryu',
//     email: 'ryu@sforg.com',
//     login(){
//         console.log('ninja logged in')
//     },
//     logout(){
//         console.log('ninja logged out')
//     }
// }

// console.log(userOne['email'], userOne.username);
// userOne.login();

// function of constructor //
// function User(username,email){
//     this.username = username;
//     this.email = email;
//     this.login = function(){
//         console.log(`${this.username} has logged in`);
//     };
// }

// User.prototype.login = function(){
//     console.log(`${this.username} has logged in`);
// }

// function Admin(username,email,title){
//     User.call(this,username,email);
//     this.title = title;
// }

// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.deleteUser = function(){
//     //delete
// }

class User{
    constructor(username,email){
        this.username = username;
        this.email = email;
        this.score =0;
    }
    login(){
        console.log('a ninja logged in!');
        return this;// return an object, not undefined anymore!
    }
    logout(){
        console.log('one ninja disappered!');
        return this;
    }
    incScore(){
        this.score++;
        console.log(`${this.username} scored, has score of ${this.score} points`)
        return this; // return this object
    }
}

class Admin extends User{
    constructor(username,email,title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter((u)=>{
            return u.username !== user.username;
        });
    }
    addUser(user){
        users.push(user);
    }
}

const userOne = new User('ryu', 'ryu@sforg.com');
const userTwo = new User('chun-li', 'cl@sforg.com');

console.log(userOne.username, userTwo.username);
userOne.login(); //no returned value(before adding return this to the class), undefined for js
userTwo.logout();
userTwo.login();
userOne.incScore();
userTwo.incScore();
userTwo.incScore();
userTwo.incScore();

userTwo.logout().login().incScore().incScore().logout();
userOne.incScore().incScore().incScore().logout();//method chaining

const userThree = new Admin('aykut', 'aykut@sforg.com','black-belt');
console.log(userOne, userTwo, userThree);
let users= [userOne,userTwo,userThree];
console.log(users);
userThree.deleteUser(userOne);
console.log(users);
userThree.addUser(userOne);
console.log(users);

//Array.prototype , Date.prototype
//User.prototype















