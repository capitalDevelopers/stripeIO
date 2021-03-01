var stripe1black = false;
var socket = io();
socket.emit("stripe2")

socket.on("paintblack", () => {
  stripe1black = !stripe1black;
  document.getElementById("stripe1").style.backgroundColor =  stripe1black ? "#000000" : "#ff0000";
})

function stripe2clicked() {
  stripe1black = !stripe1black;
 // document.getElementById("stripe1").style.backgroundColor = stripe1black ? "#000000" : "#ff0000";
  socket.emit("stripe2")
}

function stripe3clicked() {
  document.getElementById("stripe1").style.backgroundColor = "#000044";
}

function stripe1clicked() {
  document.getElementById("stripe1").style.backgroundColor = "#000044";
}