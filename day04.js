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
