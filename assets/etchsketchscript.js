//Etchsketchscript.js
// use javascript to generate divs (divs=grid squares here) to fill grid, instead of copy/pasting HTML to creat divs

const gridContainer = document.querySelector('.grid-container'); //get grid-Container from index.html

generateGrid(16); // addGrid 16 cols

// Generate Grid Function
function generateGrid(square) {  //creating a function to add squares to the grid as new divs
    for (let i=0; i<square*square; i++) {   
        const box = document.createElement('div');
        box.className = 'div';
        container.appendChild(box) // add div to grid-container
    }
    container.style.gridTemplateColumns = `repeat(${square}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${square}, 1fr);`;

    const gridElements = document.getElementsByClassName('div');
    for (let i = 0; i < (gridElements.length); i++) {
        gridElements[i].addEventListener('mouseenter', changeColor); //when mouse passes over grid box, change box color. not implemented yet!
    }
}
