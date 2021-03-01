var stripeNum
var stripes = []

stripeNum = 0

class Stripe {

  constructor(body) {
    let divElement = document.createElement("div")
    this.color = randomColor()
    this.isBlack = false;
    divElement.style.backgroundColor = "#000000";
    divElement.setAttribute("id", `stripe${stripeNum}`)
    this.num = stripeNum++
    body.appendChild(divElement)
  }
}

var stripe1black = false;
var socket = io();

function clickedStripe(e) {
    let num = e.target.id.substring(6, 8)
    stripes[num].isBlack = !stripes[num].isBlack
    e.target.style.backgroundColor = stripes[num].isBlack ? "#000000" : stripes[num].color

    socket.emit("clicked", num)
}


function buildPage() {
  for (i = 0; i < 8; i++) {
    stripes[i] = new Stripe(document.body)
  }
}


document.addEventListener('DOMContentLoaded', buildPage);

socket.on("toggle", num => {
  stripes[num].isBlack = !stripes[num].isBlack;
  document.getElementById("stripe" + num).style.backgroundColor =  stripes[num].isBlack ? "#000000" : stripes[num].color;
})

function stripe1clicked() {
  stripe1black = !stripe1black;
  socket.emit("stripe")
  console.log("clicked stripe")
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}