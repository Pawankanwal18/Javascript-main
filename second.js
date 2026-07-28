//  function attech(content){
//  let element = document.createElement('li');
// element.innerHTML = content;


// const parent = document.getElementById("root");
// // parent.appendChild(element);
// parent.append(element);
//  };

//  attech("TS");
//  attech("REACT");
//  attech("NODE");


//text  node
// function call(content){
// const element = document.createTextNode(content);
// const parent = document.getElementById("root");
// parent.appendChild(element)
// };
// call("hello ji");

//attribute node
// const element = document.createAttribute("Id");
// element.value = "first";
//  const curr_list = document.querySelector('li');
//  curr_list.setAttributeNode(element);
 

// const parent =document.getElementById("root");
// parent.appendChild(element)

// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element)

const element = document.getElementById("root");
console.log(element.getAttribute("class"));