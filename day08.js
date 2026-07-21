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
 
 //third method
 class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this .gender = gender;

    }
 }

 let per1 = new People("Pawan", 20,"male");
 console.log(per1);

                         //common method on object

 let obj ={
    name : "pawan",
    age : 30,
    account_balence :354525,
    gender : "male"
 };
 
 const arr = Object.values(obj);
 console.log(arr);

 const arr2 = Object.entries(obj);
 console.log(arr2);

