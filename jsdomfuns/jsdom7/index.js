var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.prepend(newLi)

/**
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

var newP = document.createElement("p")
newP.textContent = "V School rocks!"
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
document.body.append(newP)