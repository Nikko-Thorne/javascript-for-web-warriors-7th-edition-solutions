"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nikko Thorne
      Date:   03/13/2022

      Filename: project12-03.js
*/

//run once the page is loaded
$( () => {
    
    //jquery selector for children of article h2 elements
    $("article > h2").click(e => {
        
        //declare variables
        let heading = $(e.target);
        let list = $(heading).next();
        let headingImage = $(heading).children("img");
        
        //jquery slidetoggle 
        $(list).slideToggle(500) 
       
       if($(headingImage).attr("src") === "plus.pg") {
          $(headingImage).attr("src", "minus.png");
                } else {
                    $(headingImage).attr("src", "plus.png");
        }
    });
});
