   //  // callback hell converted to async/await
   //  function pizzaOrder(){
   //      return new Promise((resolve) => {
   //          console.log("talking for pizza order");

   //          setTimeout(() => {
   //              console.log("order is placed for pizza");
   //              resolve();
   //          }, 2000)
   //      });
   //  }

   //  function pizzaPrepare(){
   //      return new Promise((resolve) => {
   //          console.log("preparing pizza");

   //          setTimeout(() => {
   //              console.log("pizza is prepared");
   //              resolve();
   //          }, 5000)
   //      });
   //  }

   //  function pizzaDeliver(){
   //      return new Promise((resolve) => {
   //          console.log("delivering pizza");

   //          setTimeout(() => {
   //              console.log("pizza is delivered succesfully");
   //              resolve();
   //          }, 3000)
   //      });
   //  }

   //  async function greet(){
   //      await pizzaOrder();
   //      await pizzaPrepare();
   //      await pizzaDeliver();
   //      console.log("Food delivered successfully");
   //  }

   //  greet();


//java is a single threaded syncronous language:

//ja behaviour : asyncronus
//single thread means = one task will be excuted at a time :
 
//  console.log("hello big brother");

//  function meet(){
//     const arr =[2,4,6];
//     console.log(arr[0]);

//  }

//  function greet(){
//     const a=2+3;
//     console.log(a);
//     meet();
//     console.log(a*a);

//  }

//  greet();
//  console.log("program End"); 

 //web api has set timeout, set interval, fetch, dom, console there all are the part of the web api 
 //web api is present in the browser of your computer ,event listione are also the part of the web api 
 function test1(){

    const p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("hello everyone");
   },5000)
 })
  return p1;
 }
 

 function test2(){

     const p2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
      resolve("how are you all ");
   },5000)
 })
 return p2;
 }

// p1.then(response=>console.log(response))
//using await async to fix
async function greet() {

   const data1 = await test1();
   console.log(data1);

    const data2 = await test2();
   console.log(data2);

}
greet();  

//async function alwayes return promises

 