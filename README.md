Etch A Sketch

Created an Etch A Sketch using Javascript.

<--User Guide-->
-Move your cursor across the grid to color in the boxes.
-The buttons at the top of the page change the color of the boxes.
-Brush Color buttons do not clear the grid when pressed, allowing you to use multiple brush colors.
-The Clear Grid button will erase and reset the grid, allowing you to start over.
-Grid squares are shaded; 50% opacity per mouse pass over.
-The Eraser button allows user to return grid box to default color.
-Default Brush color is set to Black.

<--Project Notes-->
-Created blank HTML document, CSS stylesheet, Javascript script files and initialized github repo.

-Added a div 'Grid Container' to HTML body to act as the grid template.

-Needed to figure out how to create grid boxes using Javascript without copy/pasting a bunch of divs in the HTML doc.
    -Used for loop to create infinite # of divs that will serve as grid boxes, then append them to div grid container.

-Needed to manipulate the background color of the boxes to allow user to draw on grid.

-Added Event Listener to each div, on mouse enter a function is executed.
    -Draw function uses an if else statement to target each div box on the grid container.
    -On target of the boxes, change the background color of the div's within the grid container to imitate coloring.

-I couldn't figure out how to get the Javascript to communicate with the buttons.
    -Solved by using a Switch statement and declaring the cases' IDs as the different button functions.

-Went back and added the different Brush colors and Eraser to the Draw function's if else statement.
    -Goes through script and checks for Brush color, then changes background of div to that color.
    -Added Console logs for each brush color switch to test each function.

-Changed the Switch statement's cases, removing the Clear Grid function on brush color switch
to allow for creative freedom and color mixing.