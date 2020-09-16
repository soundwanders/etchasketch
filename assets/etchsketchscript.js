//Etchsketchscript.js

const gridContainer = document.querySelector('.grid-container'); //get div grid-Container from html
let brushColor = "black";

//-----FUNCTIONS-----//

// GENERATE GRID FUNCTION BY CREATING DIVS AND APPENDING THEM TO PARENT-GRIDCONTAINER
function generateGrid(square) {
    for (let i=0; i < square*square; i++) {   
        const box = document.createElement('div');
        box.className = 'div';
        gridContainer.appendChild(box) // add div to grid-container
    }
    gridContainer.style.gridTemplateColumns = `repeat(${square}, 1fr)`;

    const gridElements = document.getElementsByClassName('div');
    for (let i = 0; i < (gridElements.length); i++) {
        gridElements[i].addEventListener('mouseenter', changeColor);
    }
}

//CHANGE COLOR RANDOM RGB function
function changeColor(square) {
    const target = square.target;
    rgbValue1 = getRandomRGBValue();
    rgbValue2 = getRandomRGBValue();
    rgbValue3 = getRandomRGBValue();
    if (target.style.backgroundColor) {
        let opacity = `${Number(target.style.opacity) + 0.5}`;
    }
}

/*
//CHANGE BRUSH COLOR USING IF, ELSE --------broken
function changeColor(square) {
    const target = square.target;
    rgbValue1 = getRandomRGBValue();
    rgbValue2 = getRandomRGBValue();
    rgbValue3 = getRandomRGBValue();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseenter', function(box){
        if(brushColor === "multi"){
            let halfopacity = `${Number(target.style.opacity) + 0.5}`;
            changeColor.target.style.opacity = halfopacity;
            changeColor.target.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
        }
            else if(brushColor === "black"){
                let halfopacity = `${Number(target.style.opacity) + 0.5}`;
                target.style.opacity = halfopacity;
                changeColor.target.style.backgroundColor = 'black';
            }
            changeColor.target.style.backgroundColor = 'black';
        }
    ));
};

*/

//GET RANDOM RGB VALUE USING 'MATH' RETURNING A RANDOM NUMBER FROM 256 RGB VALUES
function getRandomRGBValue (){
    return Math.floor(Math.random() * (256));
}

//ERASE GRID BY REMOVING ALL CHILD NODES FROM DIV-GRIDCONTAINER
function clearGrid() {
    gridContainer.innerHTML = ('');
    generateGrid(16);
    alert('Grid has been reset!');
}


//-----BUTTONS-----//

const buttons = document.querySelectorAll('.btn'); // Call all buttons from html
buttons.forEach(btn => btn.addEventListener('click', function(box){ // EVENT LISTENER for user click
    switch (square.target.id) {
        case 'clearGrid':
        clearGrid();
        generateGrid(16);
        break;

        case 'black':
            brushColor = "black";
            clearGrid();
            generateGrid(16);
        break;

        case 'multi':
            brushColor = "multi";
            clearGrid();
            generateGrid(16);
        break;
    }
}));


 //-----ADD GRID WITH 20 COLUMNS-----//
 generateGrid(20);