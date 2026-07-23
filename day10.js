                            //Prototype/prototypechain also  understand by just like inheritance


//   let obj ={
//     name: "pawan",
//     age : 33,
//     addres : {
//         pincode: 232313,
//         city: "kolkata",
//     }
// };

//  console.log(obj.toString());

let user1 = {
    name: "rohan",
    age : 34,
}


let user2 = {
    amount: 32,
    money :69
}

user2.__proto__ = user1;
console.log(user2.name);