var stripeNum
var stripes = []

stripeNum = 0

class Stripe {

  constructor(body) {
    let divElement = document.createElement("div")
    this.color = randomColor()
    this.isBlack = true;
    divElement.style.backgroundColor = "#000000";
    divElement.setAttribute("id", `stripe${stripeNum}`)
    this.num = stripeNum++
    body.appendChild(divElement)
  }

  toggleColor() {
    let docElement = document.getElementById("stripe" + this.num) 
    this.isBlack = !this.isBlack
    docElement.style.backgroundColor = this.isBlack ? "#000000" : this.color
  }
}

var stripe1black = false;
var socket = io();

function clickedStripe(e) {
    let num = e.target.id.substring(6, 8)
    stripes[num].toggleColor()
    socket.emit("clicked", num)
}


function buildPage() {
  for (i = 0; i < 8; i++) {
    stripes[i] = new Stripe(document.body)
  }
}

document.addEventListener('DOMContentLoaded', buildPage);

socket.on("toggle", num => {
  stripes[num].toggleColor()
})

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}