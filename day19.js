    //   call back hell
    function pizzaOrder(Callback){
        console.log("placing order for pizza");

        setTimeout(()=>{
            console.log("order is placed for pizza");
            Callback();
        } ,2000)
    }
   

    function pizzaPrepare(callback){
        console.log("preparing pizza");

        setTimeout(()=>{
            console.log("pizza is prepared");
            callback()
        } ,5000)
    }

   
    function pizzaDeliver(){
        console.log("delivering pizza");

        setTimeout(()=>{
            console.log("pizza is delivered succesfully");
        } ,3000)
    }


pizzaOrder(()=>{
    pizzaPrepare(()=>{
        pizzaDeliver();
    });
}); 