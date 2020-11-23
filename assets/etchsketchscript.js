// Etchsketchscript.js

const gridContainer = document.querySelector('.grid-container'); // get html grid-container
let brushColor = 'black'; // sets default Brush color to black

// ---FUNCTIONS---//

// GENERATE GRID FUNCTION BY CREATING DIVS AND APPENDING THEM TO PARENT-GRIDCONTAINER
function generateGrid (square) {
  for (let i = 0; i < square * square; i++) {
    const box = document.createElement('div');
    box.className = 'div';
    gridContainer.appendChild(box); // add divs to grid-container
  }
  gridContainer.style.gridTemplateColumns = `repeat(${square}, 1fr)`;

  // add EVENT LISTENER on mouseenter for each grid box
  const squares = document.querySelectorAll('.div'); // get all div grid boxes
  squares.forEach(box => box.addEventListener('mouseenter', function drawFunction (e) {
    const target = e.target;

    // DRAW IF BRUSH COLOR IS BLACK (DEFAULT STATE)
    if (brushColor === 'black') {
      const halfopacity = `${Number(target.style.opacity) + 0.5}`;
      target.style.opacity = halfopacity;
      target.style.backgroundColor = brushColor;

      // ELSE IF BRUSH COLOR IS MULTI, USE RANDOM RGB BRUSH
    } else if (brushColor === 'multi') {
      const halfopacity = `${Number(target.style.opacity) + 0.5}`;
      rgbValue1 = getRandomRGBValue();
      rgbValue2 = getRandomRGBValue();
      rgbValue3 = getRandomRGBValue();
      target.style.opacity = halfopacity;
      target.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;

      // ELSE IF BRUSH COLOR IS WHITE USE WHITE BRUSH
    } else if (brushColor === 'white') {
      const halfopacity = `${Number(target.style.opacity) + 0.5}`;
      target.style.opacity = halfopacity;
      target.style.backgroundColor = 'white';

      // ELSE IF BRUSH COLOR IS ERASER, USE ERASER BRUSH
    } else if (brushColor === 'eraser') {
      target.style.opacity = 1.0;
      target.style.backgroundColor = '';
    }
  }));
}

// RETURN RANDOM RGB VALUE USING 'MATH' INTRINSIC OBJECT
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

/* ADD HOTKEY 'B' TO STOP PAINTING   -- non functional at the moment
document.addEventListener('keypress', function(event){
    if (event.key === 66 || event.keyCode === 66){
        console.log("B key pressed. Drawing paused.");
        squares.forEach(box => box.removeEventListener('mouseenter', drawFunction));
    } else {
            squares.forEach(box => box.addEventListener('mouseenter', drawFunction));
        }
});

*/

// ---BUTTONS---//
// USING SWITCH AND ATTACHING CASE TO BUTTON ID'S TO SWITCH TARGET'S ID ON BUTTON CLICK.
// CASES CALL ON AND ACTIVATE FUNCTIONS TO MANIPULATE GRID

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

// ---ADD GRID WITH 24 COLUMNS---//
generateGrid(24);
