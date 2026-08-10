 //wether
//  const obj =fetch(`http://api.weatherapi.com/v1/current.json?key=d1cf592c162e45739d7121722260808&q=London&aqi=yes`)
// obj.then((data)=>{
//     console.log(data);
// });


const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=d1cf592c162e45739d7121722260808&q=London&aqi=yes`)



//  Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


//promises chaining 
// Promises.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

//more optimized code of promises

Promises
.then(response=>response.json())
.then(data=>console.log(data))

 