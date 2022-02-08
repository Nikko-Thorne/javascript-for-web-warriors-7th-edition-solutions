"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Nikko Thorne
      Date:   02/05/2022

      Filename: project06-03.js
*/
/*declare var useShip */
let useShip = document.getElementById("useShip");
/*add event listener on click */
useShip.addEventListener("click", copyShippingToBilling);

/* Create function for copy shipping to building */
function copyShippingToBilling() {
   if (useShip.checked) {
     document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
       document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;   
        document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
         document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
          document.getElementById("cityBill").value = document.getElementById("cityShip").value;
           document.getElementById("countryBill").value = document.getElementById("countryShip").value;
            document.getElementById("codeBill").value = document.getElementById("codeShip").value;
             document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;     
   }   
}

/* Declare variables */
let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

/* for loop to add event listeners to form elements */
for(let i = 0; i < fieldCount; i++) {
    formElements[i].addEventListener("invalid", showValidationError);
    }

function showValidationError(evt) {
    evt.preventDefault();
    errorBox.textContent = "Complete all highlighted fields";
}