"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Nikko Thorne
      Date:   1/30/2022

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for(let i = 0; i < phrases.length; i++) {
    phrases[i].onclick = function(){
        
    let phrases = document.createElement("h1");
    phrases.textContent = this.textContent;
   
    let footnote = document.createElement("p");
    footnote.textContent = footnotes[i];
    footnote.style = "font-style: italic; font-size: 1.2em;"
    
    let closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.value = "Close Footnote"
    closeButton.style = "display: block; margin: 10px auto;"
    
    let popup = window.open("", footnote, "width=300p, height=200, top=100, left=100");
    popup.document.body.style = "background-color: ivory; font-size: 16px; padding: 10px";
    popup.document.body.appendChild(phrases);
    popup.document.body.appendChild(footnote);
    popup.document.body.appendChild(closeButton);
    
   closeButton.onclick = function() {
       popup.close();
      }
    }
}