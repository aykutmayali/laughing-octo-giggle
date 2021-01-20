// innerHTML vs textContent
var myList = document.getElementById("my-list")
myList.innerHTML += "<li>3</li>"

document.body.innerHTML += "<p id='paragraph'>V School rocks!</p>"
document.getElementById("paragraph").style.textAlign = "center"