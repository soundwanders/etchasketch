// etchsketchscript.js

const gridContainer = document.querySelector('.grid-container'); // get html grid-container
let brushColor = 'black'; // sets default Brush color to black

// FUNCTIONS

// generate grid function by creating divs and appending them to parent-gridcontainer
function generateGrid (square) {
  for (let i = 0; i < square * square; i++) {
    const box = document.createElement('div');
    box.className = 'div';
    gridContainer.appendChild(box); // add divs to grid-container
  }
  gridContainer.style.gridTemplateColumns = `repeat(${square}, 1fr)`;

  // add Event Listener to listen for mouse to enter each grid box's borders
  const squares = document.querySelectorAll('.div'); // get all div grid boxes
  squares.forEach(box => box.addEventListener('mouseenter', function drawFunction (e) {
    const target = e.target;

    // draw if brush color is black (default state)
    if (brushColor === 'black') {
      const halfopacity = `${Number(target.style.opacity) + 0.5}`;
      target.style.opacity = halfopacity;
      target.style.backgroundColor = brushColor;

      // else if brush color is multi, use random rgb brush
    } else if (brushColor === 'multi') {
      const halfopacity = `${Number(target.style.opacity) + 0.5}`;
      rgbValue1 = getRandomRGBValue();
      rgbValue2 = getRandomRGBValue();
      rgbValue3 = getRandomRGBValue();
      target.style.opacity = halfopacity;
      target.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;

      // else if brush color is white use white brush
    } else if (brushColor === 'white') {
      const halfopacity = `${Number(target.style.opacity) + 0.5}`;
      target.style.opacity = halfopacity;
      target.style.backgroundColor = 'white';

      // else if brush color is eraser, use eraser brush
    } else if (brushColor === 'eraser') {
      target.style.opacity = 1.0;
      target.style.backgroundColor = '';
    }
  }));
}

// return random rgb value using 'math' intrinsic object
function getRandomRGBValue () {
  return Math.floor(Math.random() * (256));
}

// ERASE GRID BY REMOVING INNERHTML AND ALL CHILD NODES FROM DIV-GRIDCONTAINER
function clearGrid () {
  gridContainer.innerHTML = ('');
  document.querySelectorAll('.box').forEach(function (s) {
    document.getElementById('gridContainer').removeChild(s);
  });
  generateGrid(24);
}

//
/*
ADD HOTKEY 'B' TO STOP PAINTING
document.addEventListener('keypress', function(event){
  if (event.key === 66 || event.keyCode === 66){
    console.log("B key pressed. Drawing paused.");
    squares.forEach(box => box.removeEventListener('mouseenter', drawFunction));
  } else {
    squares.forEach(box => box.addEventListener('mouseenter', drawFunction));
  }
})
*/
//

// BUTTONS
// using switch and attaching case to button id's to switch target's id on button click.
// cases call on and activate functions to manipulate grid

const buttons = document.querySelectorAll('.btn'); // Call all buttons from html
buttons.forEach(btn => btn.addEventListener('click', function (e) { // add Event Listener to buttons
  switch (e.target.id) {
    case 'clearGrid':
      console.log('Start over button pressed. Reset grid.');
      clearGrid();
      alert('Grid has been erased');
      break;

    case 'black':
      brushColor = 'black';
      console.log('Brush color switched to black');
      (alert);
      alert('Switched to black brush');
      break;

    case 'white':
      brushColor = 'white';
      console.log('Switched to white brush');
      (alert);
      alert('Switched to white brush');
      break;

    case 'multi':
      brushColor = 'multi';
      console.log('Brush color switched to multi.');
      (alert);
      alert('Switched to multicolor brush');
      break;

    case 'eraser':
      brushColor = 'eraser';
      console.log('Switched to eraser');
      break;

    case 'newgrid':
      brushColor = 'newGrid';
      console.log('Grid reset & new grid created');
      break;
  }
}));

// ADD GRID WITH 24 COLUMNS
generateGrid(24);
