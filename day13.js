                          //advance  loops

let obj ={
    name : "pawan",
    age : 32,
    city : "rampur",
    gender : "male"
};

// for(let key in obj)
// {
//     console.log(key,obj[key]);

// }
 
let obj2= Object.create(obj);
obj2.money =420;
obj2.id = "roh";
// console.log(obj2);
console.log(Object.keys(obj2));
for(let key in obj2)
{
    console.log(key);
}