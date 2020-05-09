function hello(){
  console.log("hello world");
}



function addNum(num1,num2){
  console.log(num1 + num2);
}


function someOne(name = "Sorowar"){
  console.log("hello "+ name);
}


function formal(name = "Sohel", title = 'Hi'){
  return title + " "  +name
}



var v = "Global V"
var stuff = "Global Stuff"
function fun(stuff) {
  console.log(v);
  stuff = " Resassign stuff inside the function"
  console.log(stuff);
}

fun();
console.log(stuff);
