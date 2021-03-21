<a href = "https://soundwanders.github.io/etchasketch/"> <h2>Etch A Sketch</h2> </a>

<h3><--User Guide--></h3><br>
---An Etch A Sketch developed with HTML, CSS and Javascript.
---Move your cursor across the grid to color in the boxes.<br>
---The buttons at the top of the page change the color of the boxes.<br>
---Brush Color buttons do not clear the grid when pressed, allowing you to use multiple brush colors.<br>
---The Clear Grid button will erase and reset the grid, allowing you to start over.<br>
---Grid squares are shaded; 50% opacity per mouse pass over.<br>
---The Eraser button allows user to return grid box to default color.<br>
---Default Brush color is set to Black.
<br><br>
<h3><--Project Notes--></h3>
---Created blank HTML document, CSS stylesheet, Javascript script files and initialized github repo.
    
---Added a div 'Grid Container' to HTML body to act as the grid template. This serves as the 'screen' of the etch-a-sketch.
    
---To create grid boxes using Javascript, instead of just copy/pasting endless divs in the HTML, I used a for loop within a function to create infinite # of divs that will serve as grid boxes, then append them to the grid container.
    -The creation of grid box divs is limited by the size of the grid container when it is created by calling the global function 'generateGrid' when the page is opened.

---Dynamically change the background color to allow user to draw on grid by attaching an event listener to each grid square.

---Added Event Listener to each div, on mouse enter a function is executed that changes the background color of the grid square.
    -Draw function uses an if else statement to target each div box on the grid container.<br>
    -On target of the boxes, change the background color of the div's within the grid container to imitate coloring.<br>    

---Used a Switch statement, declaring each cases' ID as a different button functions.<br>

---Added the different Brush colors and Eraser to the Draw function's if, else statement.<br>
    -Checks for Brush color, then changes background color depending on current brush.<br>
