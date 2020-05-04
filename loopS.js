var x = 0;
while (x<5) {
  console.log("x is corrently: "+x);
    if (x==3) {
      console.log("x equal to three");
      break;

    }
    console.log("x is still less then five");
    x=x+1;
}

// print even numbers between 1 to 10
var num =1;

while (num<11) {
  if (num%2==0) {
    console.log(num);
  }
  num=num+1;

}


// For lool
for (var i = 0; i < 5; i++) {
  console.log("Number is "+i);
}
var word = "SOHELSOROWAR"
for (var i = 0; i < word.length; i++) {
  console.log(word[i]);
}
