var firstName = prompt("First Name Please")
var lastName = prompt("Last name Please")
var age = prompt("How old are You?")
var height = prompt("What is your height?")
var petName = prompt("Ehat is your pet name?")
alert("thank you so mucch for the information")



//LOGIc
//four conditions


var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


//Name conditions
if (firstName[0] == lastName[0]){
  nameCond = true;
}else {
  nameCond = false;
}

//age conditions

if (age >20 && age <30) {
  ageCond = true;

}else {
  ageCond = false;
}

//height conditions
if (height >= 170) {
  heightCond = true;

}else {
  heightCond = false;
}



//pet conditions
if (petName[petName.length-1]==="y") {
  petCond = true;

}else {
  petCond = false;
}


//check all conditions
if (nameCond && ageCond && heightCond && petCond) {
  console.log("welcome spy!!!!");

}else {
  console.log("We are sorry ");
}
