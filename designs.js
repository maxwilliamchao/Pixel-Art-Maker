// The user can create a canvas of any (reasonable) size.
// Entering whole numbers in the "Height" and "Width" fields,
// and submitting the form, causes an empty grid to appear on the page.
function makeGrid() {
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  let grid = document.getElementById("pixelCanvas");

  // The user can reset the grid to a blank state.
  // If there are already colored squares in the grid,
  // clicking the Submit button clears them out.
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  for (y = 0; y < height; y++) {
    var row = document.createElement("tr");
    grid.appendChild(row);

// Event listeners are properly added to the grid squares
// (and not to the border or the table itself).
    for (x = 0; x < width; x++){
      var cell = document.createElement("td");
      row.appendChild(cell);
      cell.addEventListener("click", colorize);
    }
  }
}

// The user can color the pixels in the grid.
// Choosing a color from the color selector and clicking on a grid square
// causes that grid square (and only that square) to change color.
function colorize(){
  let inkColor = document.getElementById("colorPicker").value;
  this.style.backgroundColor = inkColor;
}

document.getElementById("sizePicker").addEventListener("submit",
  function(event) {
    event.preventDefault();
    makeGrid();
})
