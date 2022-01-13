/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: nikko thorne
      Date:   1/12/2022

      Filename: project02-02.js
 */
 
//Function to verify form
function verifyForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    (document.getElementById("name").value !== "") && (document.getElementById("email").value !== "") && 
    (document.getElementById("phone").value !== "")
    ? window.alert("Thank you!") :
   window.alert("Please fill in all fields");
}
   //Event Listener
   document.getElementById("submit").onclick = verifyForm;
   
   