"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Nikko Thorne
      Date:   02-19-2022

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   e.preventDefault();
   
   let regex1 = /[A-Z]/;
   let regex2 = /\d/;
   let regex3 = /[!\$#%]/;
   
if(pwd.length < 8) {
  feedback.textContent = " your password must be at least 8 characters";
  } else if (regex1.test(pwd) === false) {
      feedback.textContent = "Your password must incluide an upper case";
    } else if (regex2.test(pwd) === false) {
      feedback.textContent = "Your password must include a number";
     } else if (regex3.test(pwd) === false) {
      feedback.textContent = "Your password must incluide one of the following '!$#%'";
    }
    else {
        signupForm.submit();
    }
}
);