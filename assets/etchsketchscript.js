//Etchsketchscript.js

const gridContainer = document.querySelector('.grid-container'); //get grid-Container

// FUNCTIONS //

// Generate Grid Function
function generateGrid(square) {  //creating a function to add squares to the grid as new divs
    for (let i=0; i < square*square; i++) {   
        const box = document.createElement('div');
        box.className = 'div';
        gridContainer.appendChild(box) // add div to grid-container
    }
    container.style.gridTemplateColumns = `repeat(${square}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${square}, 1fr);`;

    const gridElements = document.getElementsByClassName('div');
    for (let i = 0; i < (gridElements.length); i++) {
        gridElements[i].addEventListener('mouseenter', changeColor);
    }
}

//Change Color Function
function changeColor(x) {
    const target = x.target;
    rgbValue1 = getRandomRGBValue();
    rgbValue2 = getRandomRGBValue();
    rgbValue3 = getRandomRGBValue();
    if (target.style.backgroundColor) {
        let halfOpacity = `${Number(target.style.opacity) + 0.5}`;
        target.style.opacity = halfOpacity;
    } else {
        target.style.opacity = '0.5';
        target.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
    }
}

//Get Random RGB Value Function
function getRandomRGBValue () {
    return Math.floor(Math.random() * (256));
}

 // addGrid 16 cols
generateGrid(16);


// EVENT LISTENERS //
boom