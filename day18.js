//callback function
function fetchuser(){
    console.log("fetching user data from the database")
    setTimeout(()=>{
        console.log("user data fetched");
        const name = "pawan";
        greet(name);
        meet(name);
    }, 2000)
}
 
function greet(name){
    console.log(`hello ${name}`);
}

function meet(name){
    console.log(`hello ${name}, nice to meet you!`);
}

fetchuser();

function fetchdata(call back){}