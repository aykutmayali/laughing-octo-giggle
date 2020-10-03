var Stack = function(){
    this.count = 0;
    this.storage = {};

    // adds value onto the end of the stack
    this.push = function(value){
        this.storage[this.count]= value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count ===0){
            return undefined;
        }
    
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function(){
        return this.count;
    }

    //return the last element of the array without removing
    this.peek = function (){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

mystack.push(1);
mystack.push(2);

console.log(mystack.peek);


console.log(mystack.pop);


console.log(mystack.peek);


mystack.push(3);

console.log(mystack.peek);

mystack.push("dede");

console.log(mystack.peek);

console.log(mystack.size);



















