//non primitive datatype

let arr = [10, 20, 30, 40, 50, "rohit"];
console.log(arr);
//typeof is a object 
console.log(typeof arr);

//key : value 
let obj = {
    name : "pawan",
    age : 23,
    city : "delhi"
}
console.log(obj); 
//function 
let fun = function(){
    console.log("this is a function ");
    return  10;
}
//type of a function is a function
console.log( fun());

//type conversion
let account_balance = "100";
let num = Number(account_balance);
console.log(num);

//boolean convert to number

let x = true;
console.log(Number(x));

//null
let x1 = null;//while conversion of null it show output zero
console.log(x1);

//undefined
let x2;
console.log(x2);//show not a number

//string k under converstion
let ab =20;
console.log(String(ab));

console.log(((6*(3+18))/6)-9);
//divide multi left to right
//add sub left to right

//modules operator
console.log(20%3)
//reminder 

//++ increment operator , -- decrement operator
let sum =20;
let total =++sum;
console.log(total);//21 
console.log(sum);//21

//comparison operator
let a=20;
let b=20;
console.log(a==b);

let num = 10;
let str = "10";
console.log(num==str);//true
console.log(num===str);//false 