//Etchsketchscript.js
// use javascript to generate divs (divs=grid squares) to fill grid, instead of copy/pasting HTML to creat divs

addGrid(16, 50); // addGrid 16 cols 50 rows

const container = document.querySelector('.grid-container'); //get grid-Container from index.html
function addGrid(rows, cols) {  //create a function to add squares to the grid
    const gridBox = rows*cols;
    for (i=0; i<gridBox; i++) {     // for statement to add grid squares until reaches 16, 50
        const box = document.createElement('div')
        box.className = 'div';
        container.appendChild(box); // add div to grid container
    }
    container.style.gridTemplateColumns = 'repeat(${rows, cols}, 1fr)';

    const gridElements = document.getElementsByClassName('div');
    for (i = 0; i < (gridElements.length); i++) {
       gridElements[i].addEventListener('mouseenter', changeColor); //when mouse passes over grid box, change box color. not implemented yet!
    }
}