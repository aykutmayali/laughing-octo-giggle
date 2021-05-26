//--------------------------------------------------------fetch
// fetch('../12/todos/asaf.json').then((response) =>{
//     console.log('resolved',response);
//     return response.json(); // this returns promise
// }).then(data => {
//     console.log(data);
// }).catch((err) =>{
//     console.log('rejected', err)
// });

//--------------------------------------------------------async await

const getTodos = async () =>{
    const response = await fetch('../12/todos/asaf.json');
    if(response.status !== 200){
        throw new Error();
    }

    const data = await response.json();    
    return data;    
};

// const test = getTodos();

// console.log(test);

console.log(1);
console.log(2),
getTodos()
    .then(data => console.log(' resolved ',data))
    .catch(err => console.log('rejected ',err));

console.log(3);
console.log(4);


