// innerHTML - security risk
// innerText - "expensive"
// textContent

// var person = {name: "Joe"}
// person.name = "Jim"
// console.log(person)
var text = document.querySelector("#header").textContent
document.querySelector("#paragraph").textContent = text

var header = document.getElementById("header")
header.style.backgroundColor = "blue"


document.body.style.backgroundColor = "burlywood"
// fontSize
// background-color
// display
// textAlign
// margin, padding, border