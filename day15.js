                   //reduce

// const arr = [10,29,32,43,2];

// const result = arr.reduce((acc, curr) => acc+curr, 0);

// console.log(result);

// let arr= ["orenge", "apple","orenge", "apple","orenge", "apple","orenge"];

// const result = arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//         acc[curr]=1;
//     return acc;
// },{})

// console.log(result);


                   //sets
//store uniqe value

// const set1 = new Set([10,32,32,21,10,30]);
// console.log(set1);

// const user_id = new Set(["pawan_kanwal", "mohit_32","ajay21","rohan_32"]);
// let new_user = "pawan_kanwal";
// console.log(user_id.has(new_user));
  
                 //union

// let set1 =new Set([10,20,30,40,50]);
// let set2 = new Set([30,50,60,90]);

// let set3 =new Set([...set1,...set2]);
// console.log(set3);  


                //intersection

// let set1 =new Set([10,20,30,40,50]);
// let set2 = new Set([30,50,60,90]);

// const result = [...set1].filter((num)=>set2.has(num));

// console.log(result)

                    //iterate over set


// let set1 =new Set([10,20,30,40,50]);
// let set2 = new Set([30,50,60,90]);

// // for(let value of set1)
// //     console.log(value);


// set1.forEach((value)=>console.log(value));

                           //map is key value pair in js

 //key value pair : key should be unique

//  const map1 = new Map();
//  map1.set(3,90);
//  map1.set("pawan",18);
//  map1.set("rohit");
//  //map1.set("rohit",40); value ko  update karega 


//  map1.delete(3);
// //  map1.has("pawan")
//  console.log(map1.has("pawan"));