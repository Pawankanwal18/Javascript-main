                  //Date//
// const d = new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// const now = Date.now();
// const d = new Date("2026-2-20");
//year /month / date /hour /minute /second /milisecond
// const date = new Date(2026,2,20);
// console.log(d.toDateString());
// console.log(date.toString());
 
                   //date setting

// const d = new Date();
// d.setDate(26);
// d.setFullYear(2026);
// d.setMonth(3);
// console.log(d.toString());

                 //date calculation

// const date1 = new Date();
// const date2 = new Date("2026-09-26");

// console.log(date2-date1);

        //countdown timer for olympics
    //days , hour , minute, second,
const date1 = new Date();
const date2 = new Date("2028-07-14");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
const hour = Math.floor((date/(1000*60*60))%24)
console.log(days);
