// geting canvas by id c
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//0 and 1's -  giving a variable, and then splitting it's characters to make up an array.
var matrix = "丐丑丒专且1世1丛0丝1丟";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++) drops[x] = 1;

//drawing the characters
function draw() {
  //Black BG for the canvas
  //translucent BG to show trail, trasparent gradient
  ctx.fillStyle = "rgba(0, 0, 0, 0.04"; //black with almost visible opacity, and with every loop to opiacity will desccreas to the original 0.04 percent, that is way it has the fading effect!
  ctx.fillRect(0, 0, c.width, c.height); //fill the entire window

  ctx.fillStyle = "#0F0"; //green text
  ctx.font = font_size + "px arial";
  //looping over drops
  for (var i = 0; i < drops.length; i++) {
    //a random number character to print
    var text = matrix[Math.floor(Math.random() * matrix.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    // since w are displaying 1 letter, it seems that it is going down.
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    //incrementing Y coordinate
    drops[i]++;
  }
}
setInterval(draw, 35);

let result = document.querySelector(".result");
let input = document.getElementById("myInput").value;
let button = document.querySelector(".btn");

button.addEventListener("click", function() {
  let imputValue = "";
  let entered = document.getElementById("myInput");
  let array = entered.value.split("");
  let checked = isBoolFor(array);

  if (checked) {
    let imputValue = parseInt(document.getElementById("myInput").value, 2);
    result.textContent = imputValue;
  } else {
    result.textContent = `${
      document.getElementById("myInput").value
    } is not binary`;
  }
});

function isBoolFor(arr) {
  for (var i = arr.length - 1; i >= 0; --i) {
    if (arr[i] != 0 && arr[i] != 1) return false;
  }
  return true;
}
