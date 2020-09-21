//Etchsketchscript.js

const gridContainer = document.querySelector('.grid-container'); //get html grid-container
let brushColor = "black"; //sets default Brush color to black

//---FUNCTIONS---//

// GENERATE GRID FUNCTION BY CREATING DIVS AND APPENDING THEM TO PARENT-GRIDCONTAINER
function generateGrid(square) {
    for (let i=0; i < square*square; i++) {   
        const box = document.createElement('div');
        box.className = 'div';
        gridContainer.appendChild(box) // add divs to grid-container
    }
    gridContainer.style.gridTemplateColumns = `repeat(${square}, 1fr)`;
    const squares = document.querySelectorAll('.div'); //get all div grid boxes

    //add EVENT LISTENER on mouseenter for each grid box
    squares.forEach(box => box.addEventListener('mouseenter', function brush(e){
        const target = e.target;

        //DRAW IF BRUSH COLOR IS BLACK (DEFAULT STATE)
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
}

// RETURN RANDOM RGB VALUE USING 'MATH' INTRINSIC OBJECT
function getRandomRGBValue (){
    return Math.floor(Math.random() * (256));
}

//ERASE GRID BY REMOVING INNERHTML AND ALL CHILD NODES FROM DIV-GRIDCONTAINER
function clearGrid() {
    gridContainer.innerHTML = ('');
    document.querySelectorAll('.box').forEach(function(s){
    document.getElementById('gridContainer').removeChild(s);
    });
    generateGrid(24);
}



// ADD HOTKEY 'B' TO STOP PAINTING
document.addEventListener('keypress', function(event){
    const squares = document.querySelectorAll('.div'); //get all div grid boxes
    const box = document.createElement('div');
    box.className = 'div';

    if (event.key === 66 || event.keyCode === 66 || event.key=== 'b'){
        console.log("B key pressed. Drawing paused.");
        squares.forEach((box) => box.removeEventListener('mouseenter', paint));
    } else {
            squares.forEach((box) => box.addEventListener('mouseenter', paint));
        }
});

//---BUTTONS---//

const buttons = document.querySelectorAll('.btn'); // Call all buttons from html
buttons.forEach(btn => btn.addEventListener('click', function(e){ // add Event Listener to buttons
    switch (e.target.id) {    
        case 'clearGrid':
        console.log("Start over button pressed. Reset grid.");
        clearGrid(alert);
        alert("Grid has been erased");

        break;

        case 'black':
            brushColor = "black";
            console.log("Brush color changed to black.");
            clearGrid(alert);
            alert("Switched to Black brush");
        break;

        case 'multi':
            brushColor = "multi";
            console.log("Brush color changed to multi.");
            clearGrid(alert);
            alert('Switched to Multicolor brush');
        break;
    }
}));

 //---ADD GRID WITH 20 COLUMNS---//
 generateGrid(24);