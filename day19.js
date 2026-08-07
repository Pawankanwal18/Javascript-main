//     //   call back hell
//     function pizzaOrder(Callback){
//         console.log("placing order for pizza");

//         setTimeout(()=>{
//             console.log("order is placed for pizza");
//             Callback();
//         } ,2000)
//     }
   

//     function pizzaPrepare(callback){
//         console.log("preparing pizza");

//         setTimeout(()=>{
//             console.log("pizza is prepared");
//             callback()
//         } ,5000)
//     }

   
//     function pizzaDeliver(){
//         console.log("delivering pizza");

//         setTimeout(()=>{
//             console.log("pizza is delivered succesfully");
//         } ,3000)
//     }


// pizzaOrder(()=>{
//     pizzaPrepare(()=>{
//         pizzaDeliver();
//     });
// });  


//java is a single threaded syncronous language:

//ja behaviour : asyncronus
//single thread means = one task will be excuted at a time :
 
 console.log("hello big brother");

 function meet(){
    const arr =[2,4,6];
    console.log(arr[0]);

 }

 function greet(){
    const a=2+3;
    console.log(a);
    meet();
    console.log(a*a);

 }

 greet();
 console.log("program End"); 

 //web api has set timeout, set interval, fetch, dom, console there all are the part of the web api 