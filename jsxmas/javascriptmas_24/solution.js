//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
         //Paste this wherever you need to sleep the incrimentor 
        for (let i = 0; i <= 100; i++) {
            document.getElementById('spinning').innerHTML = i
            await sleep(75)
            if (pushed) {
                stop(i)
                break
            }
            if (!pushed && i === 100 ) {
                result.innerHTML = "Sorry, you lose. You haven't hit the button on time."
            }
        }
  
}


//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result'); //display your result message here
     let diffAbs = Math.abs(i - targetInt)
    if (i === targetInt) {
        result.innerHTML = congrats[Math.floor(Math.random() * congrats.length) + 1]
    } else if (diffAbs === 1) {
        result.innerHTML = `Off by ${diffAbs}. So close!`
    } else {
        result.innerHTML = `Oh no!  Off by ${Math.abs(i - targetInt)}`
    }    
}


//main
setTargetInt();
spin()