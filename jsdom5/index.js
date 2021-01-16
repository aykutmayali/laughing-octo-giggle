var header = document.getElementById("header")
console.log(Object.keys(header.style))

// className
// document.querySelector("#header").className += " new-class"

// classList
document.querySelector("#header").classList.add("new-class")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("another")
console.log(document.querySelector("#header").className)
document.querySelector("#header").classList.toggle("another")
console.log(document.querySelector("#header").className)