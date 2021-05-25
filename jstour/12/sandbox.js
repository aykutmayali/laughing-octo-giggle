// console.log(1);
// console.log(2);

// setInterval(() => console.log("callback fired after 2"),2000);

// console.log(3);
// console.log(4);

//----------------------------------------------------------

// const getTodos = () =>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () =>{
//         if(request.readyState ===4  && request.status ===200  ){
//             console.log(request, request.responseText);
//         } else if(request.readyState === 4){
//             console.log('could not fetch the data');
//         }

//         //console.log(request,request.readyState);
//     });

//     request.open('GET','https://jsonplaceholder.typicode.com/todos');
//     request.send();

// }

// getTodos();

// getTodos();


//---------------------------------------------------------------

// const getTodos = (callback) =>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () =>{
//         if(request.readyState ===4  && request.status ===200  ){
//             const data = JSON.parse(request.responseText);
//             console.log(undefined, data);
//         } else if(request.readyState === 4){
//             console.log('could not fetch the data',undefined);
//         }

//         //console.log(request,request.readyState);
//     });

//     //request.open('GET','https://jsonplaceholder.typicode.com/todos');
//     request.open('GET', 'todos.json');
//     request.send();

// }

// console.log(1);
// console.log(2);

// getTodos((err,data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

//--------------------------------------------------------

// const getTodos = (resource,callback) =>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () =>{
//         if(request.readyState ===4  && request.status ===200  ){
//             const data = JSON.parse(request.responseText);
//             console.log(undefined, data);
//         } else if(request.readyState === 4){
//             console.log('could not fetch the data',undefined);
//         }

//         //console.log(request,request.readyState);
//     });

//     //request.open('GET','https://jsonplaceholder.typicode.com/todos');
//     request.open('GET', resource);
//     request.send();

// };

console.log(1);
console.log(2);

// getTodos('todos/asaf.json',(err,data) => {
//     console.log('callback fired');
//     // if(err){
//     //     console.log(err);
//     // } else {
//     //     console.log(data);
//     // }
//     console.log(data);
//     getTodos('todos/kerem.json', (err,data) =>{
//         console.log(data);
//         getTodos('todos/veysel.json', (err,data) =>{
//             console.log(data);
//         });
//     });
// });

console.log(3);
console.log(4);

const getSomething = () => {
    return new Promise((resolve, reject) => {
       // resolve('some data');
        reject('some error');
    });
}

// getSomething().then((data) => {
//     console.log(data + ' hello');
// }, (err) => {
//     console.log(err + ' ++');
// });

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});



const getTodos = (resource) =>{
    return new Promise((resolve,reject)=> {

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () =>{
            if(request.readyState ===4  && request.status ===200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('error getting resource');
        }
        });
        request.open('GET', resource);
        request.send();
    });   
};

// getTodos('todos/veysel.json').then(data =>{
//     console.log('promise resolved ', data);
// }).catch((err) =>{
//     console.log('promise rejected ',err);
// });


getTodos('todos/asaf.json').then(data =>{
    console.log('promise 1 resolved: ',data);
    return getTodos('todos/kerem.json');
}).then(data =>{
    console.log('promise 2 resolved: ',data);
    return getTodos('todos/veysel.json');
}).then(data =>{
    console.log('promise 3 resolved: ',data);
}).catch(err =>{
    console.log(' promise rejected: ',err);
});