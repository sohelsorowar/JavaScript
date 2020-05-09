var restart = document.querySelector("#b");

var squares = document.querySelectorAll('td');

function clearBoard(){
  for(var i = 0; i < squares.lenght; i++){
     squares[i].  = '';
  }
}
restart.addEventListener('click',clearBoard);
console.log("connected");


function changeMarker(){
  if (this.textContent === ''){
  this.textContent = 'x';
}else if (this.textContent ==='x') {
  this.textContent = 'o';

}
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}
