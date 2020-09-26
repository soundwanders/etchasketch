Javascript Etch A Sketch Readme

<--User Guide--> <br>
---Move your cursor across the grid to color in the boxes.<br>
---The buttons at the top of the page change the color of the boxes.<br>
---Brush Color buttons do not clear the grid when pressed, allowing you to use multiple brush colors.<br>
---The Clear Grid button will erase and reset the grid, allowing you to start over.<br>
---Grid squares are shaded; 50% opacity per mouse pass over.<br>
---The Eraser button allows user to return grid box to default color.<br>
---Default Brush color is set to Black.<br><br>

<--Project Notes--><br>
---Created blank HTML document, CSS stylesheet, Javascript script files and initialized github repo.
<br>
---Added a div 'Grid Container' to HTML body to act as the grid template.
<br>
---Needed to figure out how to create grid boxes using Javascript without just copy/pasting divs in HTML doc.<br>
    -Used for loop to create infinite # of divs that will serve as grid boxes, then append them to div grid container.<br>

---Needed to manipulate the background color of the boxes to allow user to draw on grid.

---Added Event Listener to each div, on mouse enter a function is executed.<br>
    -Draw function uses an if else statement to target each div box on the grid container.<br>
    -On target of the boxes, change the background color of the div's within the grid container to imitate coloring.<br>

---I couldn't figure out how to get the Javascript to communicate with the buttons.<br>
    -Solved by using a Switch statement and declaring the cases' IDs as the different button functions.<br>

---Went back and added the different Brush colors and Eraser to the Draw function's if else statement.<br>
    -Goes through script and checks for Brush color, then changes background of div to that color.<br>
    -Added Console logs for each brush color switch to test each function.<br>

---Changed the Switch statement's cases, removing the Clear Grid function on brush color switch
to allow for creative freedom and color mixing.<br><br><br>
-broop