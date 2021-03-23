<a href = "https://soundwanders.github.io/etchasketch/"> <h2>Etch A Sketch</h2> </a>

## User Guide 
- An Etch A Sketch created with HTML, CSS and Javascript.
- Move your cursor across the grid to color in the boxes
- The buttons at the top of the page change the color of the boxes
- The Clear Grid button will erase and reset the grid, allowing you to start over
- Grid squares are shaded; 50% opacity per mouse pass over
- The Eraser button allows user to return grid box to default color
- Default Brush color is set to Black.
- Brush Color buttons do not clear the grid when pressed, allowing you to use multiple brush colors
____________________________________________________________________________________________________________________________________________
## Project Notes
- Added a div 'Grid Container' to HTML body to act as the grid template. This serves as the 'screen' of the etch-a-sketch.
- To create grid boxes using Javascript, instead of just copy/pasting endless divs in the HTML, I used a for loop within a function to create infinite # of divs that will serve as grid boxes, then append them to the grid container.
    - The creation of grid box divs is limited by the size of the grid container.
    - The etch-a-sketch grid is created by calling the global function 'generateGrid' whenever the web page is opened unless the script is not loaded
- Dynamically change the background color to allow user to draw on grid by attaching an event listener to each grid square
- Added Event Listener to each div, when mouse enters the grid square, a function is executed that changes the background color of the grid square
    - Draw function uses an if else statement to target each div box on the grid container
    - On target of the boxes, change the background color of the div's within the grid container to imitate coloring
- Used a Switch statement, declaring each cases' ID to be the different functions attached to the buttons.
- Added the different Brush colors and Eraser to the Draw function's if, else statement
    - Checks against cases to determine brush color, then changes background color according to the selection returned.
