const arr=[2,34,645,434,"pawan","hello"];
// console.log(arr[4]);
// console.log(arr.length);
// console.log(arr.at(5));
// //length
// const newarr = structuredClone(arr);
// console.log(newarr==arr);

arr.push(30);
console.log(arr); 

//pop, pop the last element from array
console.log(arr.pop());
console.log(arr.pop());

//shift delete eliment from start 
console.log(arr.shift());
arr.unshift(100);
console.log(arr);  