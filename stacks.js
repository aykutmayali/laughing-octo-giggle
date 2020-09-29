/* Stacks */
/*push pop peek length*/

var letters= [];
var word = "oppo";
var rword= "";

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

console.log(letters);

for (var i = 0; i <word.length;i++){
  rword += letters.pop(); 
}

if(rword === word){
  console.log(word + "is a palindrome");
} else {
  console.log(word + "is not a palindrome");
}


