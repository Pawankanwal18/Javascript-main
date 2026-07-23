//                    //object types

// let obj1 = {
//     a:1,
//     b:2
// }
// let obj2 = obj1;
// obj2.a =10;
// console.log(obj2, obj1);

// //deep copy  
// //structureclone is must use and importent

// let obj3 = structuredClone(obj1);
// obj3.a =20;
// console.log(obj3, obj1); 
// //nested object 
// const user ={
//     name: "pawan",
//     balance: 420,
//     address:
// {
//     pincode: 263632,
//     city:"xyz"
// }
// }   
// //console.log(user.address.pincode);

// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 78473;
// console.log(user.address.pincode);

//destructuring of an object mostly used in the function call
// let obj ={
//     name : "pawan",
//     money : 30,
//     balance: 30,
//     age:20,

// };

// const {name , money} = obj;
// console.log(name, money);
// for we can also use the that 

// const {name : full_name, money : amounnt , age : umer}= obj;
// console.log(full_name,amounnt,umer);
// const {name,  age,...obj1}= obj;
// console.log(name,  age);
 
//array destrcturing 
// const arr =[3,4,2,1,2];
// const [first, second, , third] = arr;
// console.log(first, second,third);

// let obj ={
//     name: "pawan",
//     age : 33,
//     addres : {
//         pincode: 232313,
//         city: "kolkata",
//     }
// };
// const {addres:{pincode, city}}= obj;
// console.log(pincode, city);


// let obj ={
//     name: "pawan",
//     age : 33,
//     arr : [2,4,54,3,6],
//     addres : {
//         pincode: 232313,
//         city: "kolkata",
//     }
// };
// const{arr:[first,second]} =obj;
// console.log(first,second);

let user = {
    name: "pawan",
    age: 32,
    greet : function(){
        console.log("hello bhai kase ho");
    },
    meet: function(){
        return 20;

    }
}
 
console.log(user.greet());
console.log(user.meet());

