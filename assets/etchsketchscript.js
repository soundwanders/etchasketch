//Etchsketchscript.js

const gridContainer = document.querySelector('.grid-container'); //get div grid-Container from html
let brushColor = "black";

//-----FUNCTIONS-----//

// GENERATE GRID FUNCTION BY CREATING DIVS AND APPENDING THEM TO PARENT-GRIDCONTAINER
function generateGrid(square) {
    for (let i=0; i < square*square; i++) {   
        const box = document.createElement('div');
        box.className = 'div';
        gridContainer.appendChild(box) // add divs to grid-container
    }
    gridContainer.style.gridTemplateColumns = `repeat(${square}, 1fr)`;

    const squares = document.querySelectorAll('.div');
    //create EVENT LISTENER on mouseenter over each grid box
    squares.forEach(box => box.addEventListener('mouseenter', function(e){
        const target = e.target;
        //IF BRUSH COLOR IS BLACK (DEFAULT STATE)
        if(brushColor === "black"){
            let halfopacity = `${Number(target.style.opacity) + 0.5}`;
            target.style.opacity = halfopacity;
            target.style.backgroundColor = brushColor;
            //ELSE IF BRUSH COLOR IS MULTI, USE RANDOM RGB BRUSH
        } else if (brushColor === "multi"){
            let halfopacity = `${Number(target.style.opacity) + 0.5}`;
            rgbValue1 = getRandomRGBValue();
            rgbValue2 = getRandomRGBValue();
            rgbValue3 = getRandomRGBValue();
            target.style.opacity = halfopacity;
            target.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
        }
    }));
};

//GET RANDOM RGB VALUE USING 'MATH'
function getRandomRGBValue (){
    return Math.floor(Math.random() * (256));
}

//ERASE GRID BY REMOVING ALL CHILD NODES FROM DIV-GRIDCONTAINER
function clearGrid() {
    gridContainer.innerHTML = ('');
    document.querySelectorAll('.box').forEach(function(s){
    document.getElementById('gridContainer').removeChild(s);
    })
    generateGrid(20);
    alert('Grid has been reset!');
}

//-----BUTTONS-----//

const buttons = document.querySelectorAll('.btn'); // Call all buttons from html
buttons.forEach(btn => btn.addEventListener('click', function(e){ // EVENT LISTENER for user click
    switch (e.target.id) {
        case 'clearGrid':
        clearGrid();
        generateGrid(20);
        break;

        case 'black':
            brushColor = "black";
            clearGrid();
            generateGrid(20);
        break;

        case 'multi':
            brushColor = "multi";
            clearGrid();
            generateGrid(20);
        break;
    }
}));

 //-----ADD GRID WITH 20 COLUMNS-----//
 generateGrid(20);