const ul = document.querySelector('.user');
let html =``;
const blogs = [
    {title: 'berlin go', likes: 90},
    {title: 'dublin go', likes: 97}
];
console.log(blogs);

let user= {
    name: 'ciri',
    age: 26,
    location: 'sweeden',
    blogs: ['berlin go', 'dublin go'],
    login: function(){
        console.log(`user : ${user.name} logged in `);
    },
    logout: function(){
        console.log(`user : ${user.name} logged out `);
    },
    logBlogs: function(){
        console.log('this user has written the following blogs :');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    },
    logBlogList: function(){
        console.log(`user : ${user.name} has written the following blogs :`);
        html += `<p> ${user.name} has written the following blogs : </p>`;
       // html += `<li> ${user.forEach(blog => { this.blog})}</li>`;
       this.blogs.forEach(blog => {
           console.log(blog);
           html += `<li> ${blog} </li>`;
       })
    },
    logThis: ()=>{
        console.log(this);
    },
    logThat(){
        console.log(this);
    }
};

console.log(user);
console.log(user.name);
console.log(user['name']);
console.log(user.login());
console.log(user.logout());
user.logBlogs();
user.logBlogList();
ul.innerHTML= html;
user.logThis();
user.logThat();

console.log(Math);
console.log(Math.E);
console.log(Math.PI);

const ar= 7.7;
console.log(Math.round(ar));
console.log(Math.floor(ar));
console.log(Math.ceil(ar));
console.log(Math.trunc(ar));

const r = Math.random();
console.log('Random number generated is '+  Math.round(r*100))

//primitive types stored in stack, quicker
//reference types stored in heap, adds as an array to the heap and adds a pointer to that array , pointer adds to the stack
// more performance for heavy duty


let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne : ${scoreOne}, scoreTwo : ${scoreTwo}`);

scoreOne = 190;
console.log(`scoreOne : ${scoreOne}, scoreTwo : ${scoreTwo}`);

const userOne = {name: 'mantis', age:30};
const userTwo = userOne;
console.log(userOne.age, userTwo.age);
console.log(userOne, userTwo);

userOne.age =37;
console.log(userOne.age, userTwo.age);
console.log(userOne, userTwo);




