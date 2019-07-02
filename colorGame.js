var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var heading = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var pickedColor = pickColor();
var modeButtons = document.querySelector(".mode");

function init() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() { 
      this.classList.toggle("selected");
      //this.textContent === "Easy" ? numSquares = 3; easyBtn.classList.add("selected"); hardBtn.classList.remove("selected"): numSquares = 6; easyBtn.classList.remove("selected"); hardBtn.classList.add("selected");
      if( this.textContent === "Easy") {
        numSquares = 3;
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
      } else {
        numSquares = 6;
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
      }
      colors = generateRandomColors(numSquares);
      pickedColor = pickColor();
      colorDisplay.textContent = pickedColor;
      for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
          squares[i].style.backgroundColor = colors[i];
        } else {
          squares[i].style.display = "none";
        }
      }
    });
    reset();
  }
  console.log(easyBtn, hardBtn);
  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "You guessed it";
        changeColors(pickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        messageDisplay.textContent = "Try again";
        this.style.backgroundColor = "#232323";
      }
    });
  } 
}

init();

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  heading.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++ ) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
}

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  heading.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  heading.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];
  }
  heading.style.backgroundColor = "steelblue";
});

function changeColors(color) {
  for (var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = color;
  }
  document.querySelector("h1").style.backgroundColor = color;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (i = 0; i < num; i++ ) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return rgb = "rgb(" + r + ", " + g + ", " + b + ")";
}
