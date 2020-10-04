/* sets */

function mySet(){
    var collection =[]; //var collection hold the set
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
        console.log((collection.indexOf(element) !== -1)); // for node run in vs
     }; // this method check for presence of an element and return true false 

     this.values = function(){
         return collection; // return all values in the collection
         console.log(collection);
     }

     this.add = function(element){
         if(!this.has(element)){
             collection.push(element);
             return true;
             console.log(element + "element added");
         } // this method will remove an element from a set
         return false;
     }

     this.remove = function(element){
         if(this.has(element)){
             index = collection.indexOf(element);
             console.log(element + "element removed");
             collection.splice(index, 1);
             return true;
         } // this method will remove an element from a set
         return false;
     };

     this.size = function(){
         return collection.length;
         console.log(collection.length + "set size");
     }; // this method will return size of the collection

     this.union = function(otherSet){
         var unionSet =new Set();
         var firstSet =this.values();
         var secondSet =otherSet.values();
         firstSet.forEach(function(e){
             unionSet.add(e);
         });
         secondSet.forEach(function(e){
             unionSet.add(e);
         });
         return unionSet;
     };// this method will return union of two sets

     this.intersection = function(otherSet){
        var intersectionSet = new Set();
        var firstSet =this.values();
        var secondSet =otherSet.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersection.add(e);
                console.log(e + "intersective element");
            }
        });// this method will return intersection of two sets
        return intersectionSet;
     };

     this.difference = function(otherSet){
         var differenceSet = new Set();
         var firstSet = this.values();
         firstSet.forEach(function(e){
             if(!otherSet.has(e)){
                 differenceSet.add(e);
                 console.log(e + "difference element");
             }
         });// this method will return difference of two sets
         return differenceSet;
     };

     this.subset = function(otherSet) {
         var firstSet = this.values();
         return firstSet.every(function(value){
             return otherSet.has(value);
         });
     };
    }

    var setA = new mySet();
    var setB = new mySet();

    setA.add("a");
