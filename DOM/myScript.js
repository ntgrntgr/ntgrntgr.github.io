const box = {x: 1, y: 1, length: 10, width: 10}; 
function animate(){
init();
setInterval(moveRight,5);
while(box.x>1){
moveRight();



}

}
function init(){

drawbox();

}

function moveRight(){
box.x+=5;
if(box.x>198){
box.x-=5;
}
else{
drawbox();
}
}
function moveDown(){
box.y+=5;
if(box.y>93){
box.y-=5;
}
else{
drawbox();
}
}
function moveLeft(){
box.x-=5;
if(box.x<1){
box.x+=5;
}
else{
drawbox();
}
}
function moveUp(){
box.y-=5;
if(box.y<1){
box.y+=5;
}
else{
drawbox();
}
}
function drawbox(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0,0,207,102);
ctx.fillStyle = "orange";
ctx.fillRect(box.x,box.y,box.length,box.width);
}
//function lightCanvas(){}

var wordOnpage = document.getElementById("highl");
var error = "Wrong word!!!";
var message = "Hurray!!!";


function secondFunction(){
if(document.getElementById("usertext").value==4){
   document.getElementById("answer").innerHTML="That is correct!!";
}else{
document.getElementById("answer").innerHTML="Wrong!!";
}
}

var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


