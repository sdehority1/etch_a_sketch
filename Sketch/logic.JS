//CONTAINER ON LOAD
var container = document.createElement("div");
container.className = "container";
container.setAttribute("id", "outline");
document.body.appendChild(container);

//SQUARES ON LOAD
for (i = 0; i < 256; i++) {
  var squaresOnLoad = document.createElement("div");
  squaresOnLoad.className = "squaresOnLoad";
  var borderOffset = 16 * 2;
  squaresOnLoad.style.width = (384 - borderOffset) / 16 + "px";
  container.appendChild(squaresOnLoad);
  squaresOnLoad.onmouseover = function() {
      event.target.style.background = blackTiles();
    };
}

//RAINBOW GRID BUTTON
var rainbowGridSize = document.querySelector("#rainbowButton");
rainbowGridSize.addEventListener("click", function() {
  clearGrid();
  var size = prompt("How many squares?");
  buildRainbow(size);
});

//BLACK GRID BUTTON
var blackGridSize = document.querySelector("#blackButton");
blackGridSize.addEventListener("click", function() {
  clearGrid();
  var size = prompt("How many squares?");
  buildBlack(size);
});

//CLEAR GRID BUTTON
var gridClearer = document.querySelector("#clearButton");
gridClearer.addEventListener("click", function() {
  clearGrid();
});

//FUNCTION TO BUILD RAINBOW GRID
function buildRainbow(size) {
  var numberOfSquares = size * size;
  for (i = 0; i < numberOfSquares; i++) {
    var square = document.createElement("div");
    square.className = "square";
    var borderOffset = size * 2;
    square.style.width = (384 - borderOffset) / size + "px";
    container.appendChild(square);
    square.onmouseover = function() {
      event.target.style.background = colorTiles();
    };
  };
};

//FUNCTION TO BUILD BLACK GRID
function buildBlack(size) {
  var numberOfSquares = size * size;
  for (i = 0; i < numberOfSquares; i++) {
    var blackSquare = document.createElement("div");
    blackSquare.className = "blackSquare";
    var borderOffset = size * 2;
    blackSquare.style.width = (384 - borderOffset) / size + "px";
    container.appendChild(blackSquare);
    blackSquare.onmouseover = function() {
      event.target.style.background = blackTiles();
    };
  };
};

//FUNCTION TO CLEAR GRID
function clearGrid() {
  var list = document.getElementById("outline");
  while (outline.hasChildNodes()) {
    outline.removeChild(outline.firstChild);
  }
  console.log("It's working.");
};

//RAINBOW TILES
function colorTiles() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
};

//BLACK TILES
function blackTiles() {
  let rgb = "rgb(0,0,0)";
  return rgb;
};


/*
USE container.appendChild(square) to place the small box INSIDE the big box 
USE document.body.appendChild(square) to have the small box float on its own */
