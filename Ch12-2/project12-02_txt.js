"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: Nikko Thorne
      Date:   03/13/2022  

      Filename: project12-02.js
*/
$( () => {
    
   
    
    
    //jquery change cValue
    $("input#cValue").change(e => {
        //declare celsius value equal to event target
        let celsius = $(e.target).val();
        //declare fahrenheit
        let fahrenheit = (celsius * 1.8) + 32; 
        //display value of fahrenheit display calculate value as integer
        $("input#fValue").val(fahrenheit.toFixed(0));
    });
    
    //jquery change fvalue
    $("input#fValue").change(e => {
        //declare fahrenheit value equal to event target
        let fahrenheit = $(e.target).val();
        //declare celsius 
        let celsius = (fahrenheit - 32) / 1.8;
        //display celsius 
         $("input#cValue").val(celsius.toFixed(0));
    });
    
});
