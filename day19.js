    //   call back hell
    function pizzaOrder(){
        console.log("placing order for pizza");

        setTimeout(()=>{
            console.log("order is placed for pizza");
        } ,2000)
    }
    pizzaOrder();

    function pizzaPrepare(){
        console.log("preparing pizza");

        setTimeout(()=>{
            console.log("pizza is prepared");
        } ,5000)
    }

    pizzaPrepare();