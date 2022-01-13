/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Nikko Thorne  
      Date:   01/12/2022

      Filename: project02-03.js
 */

//event handler for on mouse over
document.getElementById("square").onmouseover = function() {
    document.getElementById("feedback").innerHTML = "You're hovering over the square";  
};
//Event handler for mouse off
document.getElementById("square").onmouseout = function() {
    document.getElementById("feedback").innerHTML = "";  
};

//event handler for on mouse over
document.getElementById("triangle").onmouseover = function() {
    document.getElementById("feedback").innerHTML = "You're hovering over the triangle";  
};
//Event handler for mouse off
document.getElementById("triangle").onmouseout = function() {
    document.getElementById("feedback").innerHTML = "";  
};

//event handler for on mouse over
document.getElementById("circle").onmouseover = function() {
    document.getElementById("feedback").innerHTML = "You're hovering over the circle";  
};
//Event handler for mouse off
document.getElementById("circle").onmouseout = function() {
    document.getElementById("feedback").innerHTML = "";  
};