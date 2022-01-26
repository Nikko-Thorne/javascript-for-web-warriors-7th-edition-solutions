"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-05

      Degrees <-> Radians Coverter
      Author: Nikko Thorne
      Date:   1/24/2022

      Filename: project04-05.js
 */


// Function to convert degrees to radians 
function degreesToRadians(degrees) {
   return degrees*Math.PI/180;
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
   return radians*180/Math.PI;
}

// Event handler that converts radians to degrees when the input box is changed
document.getElementById("rValue").onchange = function() {
   let radians = document.getElementById("rValue").value;
  console.log("Radians = " + radians);
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
}

// Event handler that converts degrees to radians when the input box is changed
document.getElementById("aValue").onchange = function() {
   let degrees = document.getElementById("aValue").value;
   console.log("Degrees = " + degrees)
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
}





/* ================================================================= */
 // Function to display a numeric value in the format ##.### 
 function formatValue3(value) {
    return value.toFixed(3);
 }