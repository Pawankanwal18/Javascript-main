                   //object types

let obj1 = {
    a:1,
    b:2
}
let obj2 = obj1;
obj2.a =10;
console.log(obj2, obj1);

//deep copy  

let obj3 = structuredClone(obj1);
obj3.a =20;
console.log(obj3, obj1); 