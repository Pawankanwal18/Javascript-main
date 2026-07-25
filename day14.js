// //for of loop to accesing the array  element


// const arr =[10,20,30,40];
// for(let value of arr)
// {
//     console.log(value);
// }

// //dont't use for of loop in obj

// const obj ={
//     name : "rosni",
//     age : 19,
//     gender : "female"
// }
// for(let value of obj){
//     console.log(value);
// }

 //callback function ,passing an argument(refrence) within any function is called a callback function

//  function names(fun){
//     console.log("hello i am name ");
//     fun();
//  }

//  function meet(){
//     console.log("my name is callback function");

//  }

//  names(meet); 
 
// greet(()=>{
//     console.log("yoo what is up");
//  });

// function fetchData(){
//     console.log("hello  i am a fetchData");

// }
// setInterval(fetchData,3000);
// let arr =[10,35,43,23,65];
//single argument : number
//second index
//thied: array passing
//arr.forEach(useCallbackFunction)


// function greet(num){
//     console.log(num);
// }

// arr.forEach(greet);


// arr.forEach((num, index,a)=> {
//     a[index] = num*2;
// });
// console.log(arr);

//filter
 let arr =[10,35,43,23,65];
 const result = arr.filter((num)=>{
    return num%2==0;
 })
 console.log(result);