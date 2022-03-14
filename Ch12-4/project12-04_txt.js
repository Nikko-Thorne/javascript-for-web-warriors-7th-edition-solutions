"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-04

      Project to create an interactive slideshow
      Author: Nikko Thorne
      Date:   03/13/2022  

      Filename: project12-04.js
*/

$( () => {
    
    //declare slider number var
    let slideNumber = 0;
    
    //apply click method to img#leftbutton
    $("img#leftbutton").click(e => {
        if(slideNumber > 0) {
            $("img.slideImages").animate({left: "+=401px"}, {duration: 1000});
            slideNumber--;
            let currentSlide = $("img.slidesImages")[slideNumber];
            let slideCaption = $(currentSlide).attr("alt");
            changeCaption(slideCaption);
        }
    });
    
      //apply click method to img#rightbutton
    $("img#rightbutton").click(e => {
        if(slideNumber < 11) {
            $("img.slideImages").animate({left: "-=401px"}, {duration: 1000});
            slideNumber++;
            let currentSlide = $("img.slidesImages")[slideNumber];
            let slideCaption = $(currentSlide).attr("alt");
            changeCaption(slideCaption);
        }
    });
    
    function changeCaption(captionText) {
        $("div#caption").effect("blind", {mode: "hide", direction: "left"}, 500, () => {
            $("div#caption").text(captionText);
        })
         .effect("blind", {mode: "show", direction: "left"}, 500);
    }
});
