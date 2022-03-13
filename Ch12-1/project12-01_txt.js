"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Nikko Thorne
      Date:   03/12/2022

      Filename: project12-01.js
*/

//run oage when loaded
$( () => {

//add mouseover event to menu
   $("li.submenu")
   .mouseover(e => {
      $(e.currentTarget).children("ul").show();
   })
   
   //mouseoff event
   .mouseout(e => {
      $(e.currentTarget).children("ul").hide();
   });
 
});




                                                
                                                