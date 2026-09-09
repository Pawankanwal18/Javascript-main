              //function

// function hello(){
//     console.log("kase ho")
//     console.log(32)
// }
// hello();

// function sum(number1,number2){
//     console.log(number1+number2)
// };
// sum(2,3);
// sum(10,320);

// function multi(number1,number2)
// {
//     // console.log(number1*number2)
//     return number1*number2;
// }

// let result = multi(4,6);
// console.log(result);
// // console.log(multi(43,5));

// const fun = function(){
//     console.log("hello brother");
//     console.log("how are you");
//     return "money";
   
// }
// console.log(fun());

//arrow function we dont't even write return

// const sum = (number1, number2) => number1+number2;


// let result = sum(2,5);
// console.log(result);

// const cube = number => number*number*number; 
// let result = cube(3);
// console.log(result);

//rest operator
// const sum = function(...number){
//     //for loop sum nikal sakta h
//   console.log(number);


// }

// sum(2,3,4);
// sum(4,6,5,4,3,);
 
let obj = {
    name: "pawan",
    age : 30,
    amount: 420,
}

function fun({name , amount}){
    console.log(name , amount);
}

fun(obj);