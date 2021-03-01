var stripe1black = false;
var socket = io();

socket.on("paintblack", () => {
  stripe1black = !stripe1black;
  document.getElementById("stripe").style.backgroundColor =  stripe1black ? "#000000" : "#ff0000";
})

function stripe1clicked() {
  stripe1black = !stripe1black;
  socket.emit("stripe")
  console.log("clicked stripe")
}