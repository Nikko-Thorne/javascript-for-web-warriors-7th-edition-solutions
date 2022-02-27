"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Nikko Thorne
      Date:   02/24/2022

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");


if(localStorage.sbloggerVisit) {
    let storedLastDate = localStorage.getItem("sbloggerVisit");
    lastVisitDate.textContent = storedLastDate; 
    let lastDate = new Date(storedLastDate);
    for(let items of articleDates) {
        let articleDate = new Date(items.textContent);
        if(articleDate > lastDate) {
            items.innerHTML += "<strong>new</strong>";
        }
    }
}           else {
           lastVisitDate.textContent = "Welcome to SBlogger!";
           for(let items of articleDates) {
               items.innerHTML += "<strong>new</strong>";
           }
    }
    
    let currentDate = new Date("09/12/2024");
    localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
    
