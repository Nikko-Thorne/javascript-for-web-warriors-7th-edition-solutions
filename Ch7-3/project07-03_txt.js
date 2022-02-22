"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Nikko Thorne
      Date:   02/19/2022

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

//set countdown to 1000 
window.setInterval(countdown, 1000);

//create countdown function
function countdown() {
    let now = new Date();
   currentTime.textContent = now.toLocaleString();
    let newYear = new Date(2024, 0, 1);
    let nextYear = now.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    let daysLeft = (newYear - now) / (1000 * 60 * 60 * 24);
    let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    let  minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
    daysLeftBox.textContent = Math.floor(daysLeft);
    hrsLeftBox.textContent = Math.floor(hrsLeft);
    minsLeftBox.textContent = Math.floor(minsLeft);
    secsLeftBox.textContent = Math.floor(secsLeft);
}