                          //advance  loops

// let obj ={
//     name : "pawan",
//     age : 32,
//     city : "rampur",
//     gender : "male"
// };

// for(let key in obj)
// {
//     console.log(key,obj[key]);

// }
 
// let obj2= Object.create(obj);
// obj2.money =420;
// obj2.id = "roh";
// // console.log(obj2);
// console.log(Object.keys(obj2));
// for(let key in obj2)
// {
//     console.log(key);
// }
  //if writeable value is true then value is changable and if value is false then value  is not changeable

// const obj1 = {
//     name : "sohan",
//     age : 30,
//     city : "raipur",
//     account_number: 421803
// }
//  Object.defineProperty(obj1,'account number',{
//     writable : false
//  })

//  obj1.account_number =421803;
//  console.log(obj1.account_number);


// const customer={
//     name : "pawan",
//     age :23,
//     account_number :123,
//     balance : 20000
// }
// Object.defineProperty(customer , "name",{
//     writable: false,
// })

// customer.name = "rohit";
// customer.age =24;
// console.log(customer);

//enumerable : jis bhi key ka enumerable true hoga,un sbka acces hga ya print hoga ya acces hoga un sbka 
//inherit hoke bhe koi bhe property or key aatu hai , uska enumrable true hoga to uska bhe access hoga 


const customer={
    name : "pawan",
    age :23,
    account_number :123,
    balance : 20000
}

Object.defineProperty(customer ,"name",{
    enumerable: false,
})
for(let key in customer)
    console.log(key);