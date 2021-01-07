//slice method
//it does NOT mututate arrays
//it produces new ones

const films = ['Elf', 'Borat', 'It', 'Split', 'Us']

//get the last 2 films from the array and put them in the thriller section
const thriller = films.slice(3, 5)
console.log(thriller)
console.log(films)

//get the 3rd and 4th film from the array and put them in the horror section
const horror = films.slice(2,4)
console.log(horror)

//get the first 2 films from the array and put them in the comedy section
const comedy = films.slice(0,2)
console.log(comedy)
