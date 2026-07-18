                        // Array//

const arr=[2,34,645,"pawan","hello","true",86,73];
console.log(arr[4]);
console.log(arr.length);
console.log(arr.at(5));
//length
const newarr = structuredClone(arr);
console.log(newarr==arr);

arr.push(30);
console.log(arr); 

//pop, pop the last element from array
console.log(arr.pop());
console.log(arr.pop());

//shift delete eliment from start 
console.log(arr.shift());
arr.unshift(100);
console.log(arr);  
console.log(arr);
console.log(arr.indexOf(2));
console.log(arr);
console.log(arr.slice(2,4));// start from 2 but 4th index is not included 

//splice
console.log(arr);
//console.log(arr.splice(2,4));//start from 2nd index and give the 4 elements
let newsplice = arr.splice(2,4);
console.log(newsplice);
console.log(arr);
 
console.log(arr.toString());
let arr1 =[2 ,34,56,323];
let arr2 =[3 ,45,54,534];
let arr3 = arr1.concat(arr2);
console.log(arr3);
arr1.push(arr2);
console.log(arr1);//2d array

                  //2d array

let arr = [1,2,3,4,5,6,7,8,9];
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d[2][0]);
 
