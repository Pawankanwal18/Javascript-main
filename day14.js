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

 function names(fun){
    console.log("hello i am name ");
    fun();
 }

 function meet(){
    console.log("my name is callback function");

 }

 names(meet); 
 