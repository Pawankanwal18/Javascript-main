// //for of loop to accesing the array  element


// const arr =[10,20,30,40];
// for(let value of arr)
// {
//     console.log(value);
// }

// //dont't use for of loop in obj

// const obj ={
//     name : "rosni",
//     age : 19,
//     gender : "female"
// }
// for(let value of obj){
//     console.log(value);
// }

 //callback function ,passing an argument(refrence) within any function is called a callback function

//  function names(fun){
//     console.log("hello i am name ");
//     fun();
//  }

//  function meet(){
//     console.log("my name is callback function");

//  }

//  names(meet); 
 
// greet(()=>{
//     console.log("yoo what is up");
//  });

// function fetchData(){
//     console.log("hello  i am a fetchData");

// }
// setInterval(fetchData,3000);
// let arr =[10,35,43,23,65];
//single argument : number
//second index
//thied: array passing
//arr.forEach(useCallbackFunction)


// function greet(num){
//     console.log(num);
// }

// arr.forEach(greet);


// arr.forEach((num, index,a)=> {
//     a[index] = num*2;
// });
// console.log(arr);

                        //filter

//  let arr =[10,35,43,23,65];
//  const result = arr.filter((num)=>num%2==0);
//  console.log(result);


// const students = [
//     {name:"pawan", age:22, marks :70},
//     {name:"rohit", age:23, marks :50},
//     {name:"mohit", age:25, marks :94},
//     {name:"sohan", age:29, marks :78},
//     {name:"ruhi", age:28, marks: 59},
// ]
// const result = students.filter((obj)=> obj.marks>50

// );
// console.log(result)

                       //map

// const arr = [1,2,4,5]
//  const result=arr.map((num)=> num*num);
//  console.log(result);
// const arr =[1,2,3,4,5,6]
// const result = arr.filter((num)=> num%2==0).map((num)=>num*num);
// console.log(result);

                