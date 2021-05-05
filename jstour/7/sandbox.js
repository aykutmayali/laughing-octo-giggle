const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/


form.addEventListener('submit', e =>{
    e.preventDefault(); // prevent refreshing the page
   // console.log(username.value);
   // console.log(form.username.value);
    
    const username = form.username.value;
    
    if(usernamePattern.test(username)){
        // feedback ok
        feedback.textContent= 'username is valid';
    } else {
        // feedback not ok
        feedback.textContent= 'username is not valid /^[a-zA-Z]{6,12}$/';
    }
});

const usernamex = 'rembrand££asdwer';
const pattern = /^[a-z]{6,}$/; //regex for chars between a to z and min 6 chars long, $  end of it must be chars, ^ start of it must be chars

//let result = pattern.test(usernamex);
let result = usernamex.search(pattern); // sends position integer that matches
console.log(result);


// live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    console.log(e.target.value, form.username.value); // target is also entered username, both same
    if(usernamePattern.test(e.target.value)){
       // console.log('passed');
        form.username.setAttribute('class', 'success');
    } else {
      //  console.log('fails');
        form.username.setAttribute('class','error');
    }
});

