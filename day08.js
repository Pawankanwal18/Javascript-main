                      //objects

let obj = {
    name: "Pawan",
    Id : 32,
    gender: "male"
}
console.log(obj);

 let fb = {
    userid : "pawan18",
    password: "pawanXYZ",
    "Account number" : 221221
 }
 console.log(fb["Account number"]);
//second method for creating obj
 const person = new Object();
 person.name = "Pawan";
 person.age = 80;
 person.gender = "male";
 console.log(person);
 //delete
 delete person.age;
 console.log(person);