 /*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nikko Thorne
      Date:   01/09/2022

      Filename: project02-01.js
 */


//Function Convert Celsius to Fahrenheit 
function CelsiusToFahrenheit() {
    Cv=document.getElementById("cValue");
    F = ((fV.value - 32) / 1.8);
    Cv.value=F;
    //return F;   
}

fV=document.getElementById("fValue");
fV.addEventListener("change", CelsiusToFahrenheit);
 
 //Function Convert Fahrenheit to Celsius
function FahrenheitToCelsius() {
    Fv=document.getElementById("fValue");
    C = (cV.value * 1.8 + 32);
    Fv.value=C;
    //return C;   
}

cV=document.getElementById("cValue");
cV.addEventListener("change", FahrenheitToCelsius);