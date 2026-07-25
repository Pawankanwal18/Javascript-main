let set1 =new Set([10,20,30,40,50]);
let set2 = new Set([30,50,60,90]);

let set3 =new set([...set1,...set2]);
console.log(set3);  