                   //reduce

// const arr = [10,29,32,43,2];

// const result = arr.reduce((acc, curr) => acc+curr, 0);

// console.log(result);

let arr= ["orenge", "apple","orenge", "apple","orenge", "apple","orenge"];

const result = arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;
    return acc;
},{})

console.log(result);