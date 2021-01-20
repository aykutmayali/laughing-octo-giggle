const squares = Array.from(document.querySelectorAll('.grid div'))
console.log(squares)

let currentSnake = []

//add the number 0 to the currentSnake array to see what happens
// currentSnake.push()
// console.log(currentSnake)

//Challenge: draw the snake as 3 squares long on the third row down using unshift
currentSnake.unshift(19,20,21)
console.log(currentSnake)

//Challenge: add to the HEAD of the snake using push
currentSnake.push(22)
console.log(currentSnake)


currentSnake.forEach(element => squares[element].classList.add('snake'))