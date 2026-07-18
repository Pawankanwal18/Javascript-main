//memory managemant is a byte addresing
let a =10;
let b= a;
 b = 30;
console.log(b);
console.log(a);
//primitive data type : immutable means that not change the value of a variable once it is created.

//non primitive data type :  mutable 

//object example:
let obj1 ={
    id:20,
    name:"pawan"

}
let obj2 = obj1;

obj2.id =30;
console.log(obj1);
console.log(obj2); 

//primitive data store in stack  memory
//non primitive data store in heap memory

//string in js

let str1 = "pawan";
let str2 = "hyy dostooo";
let str3 = 'hello ji kase ho';

let price = 200;

console.log(`price of the tomato is ${price}`);

//srtring concatination
let str4 ="hello ji ";
let str5 ="pawan kase ho app";
console.log(str4+str5);

console.log('"hello pawan kanwal"');

let message = 'Pawan ji bhut hi ache or honest person h. \n or vo mxt or bhut hi jyada mxt insan h .';
console.log(message);

let hero = "hello  bhai kase ho app";
console.log(hero.length);

let newstring = "hello don";
console.log(newstring.slice(0,5));

console.log(newstring.substring(0,5));

str10 = "hello kase ho bhai ";
console.log(str10.replce("bhai","dost");)