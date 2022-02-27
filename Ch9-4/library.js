"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Nikko Thorne
      Date:   02/26/2022 

      Filename: project09-04.js
*/

/* Page Objects */
let blocks = document.getElementsByClassName("block");
let timer = document.getElementById("timer");
let blockContainer = document.getElementById("slidingBlocks");

// Customized JavaScript event that will fire when the puzzle is solved
let event = new CustomEvent("puzzleSolved");
let timerID;

// Event listener to load the puzzle interface
window.addEventListener("load", init);


// Function to set up the puzzle
function init() {
   // Add event handlers to every block in puzzle
   for (let items of blocks) {
      items.onclick = swapWithBlank;
   } 
   
   // Event listener for the Start button
   document.getElementById("Start").addEventListener("click", startGame);
   
   // Function to scramble the order of the puzzle blocks
   function startGame() {
      timer.value = 0;      
      let scrambledOrder = scrambleIntegers(8);

      for (let i = 1; i <= 8; i++) {
         let currentBlock = blockContainer.children[i-1];
         currentBlock.id = "block" + scrambledOrder[i-1];
         currentBlock.firstElementChild.src = "block" + scrambledOrder[i-1] + ".jpg";
         currentBlock.firstElementChild.alt = scrambledOrder[i];
      }  

      // Start the timer when the Start button is clicked
      timerID = window.setInterval(runTimer, 1000);
      function runTimer() {
         timer.value++;
      }
   }  
}


// Function that swaps a clicked block if it is a adjacent to the blank space
function swapWithBlank(e) {
   let blankCheck, rowCheck, colCheck, qs;
   let activeBlock = e.target.parentElement;
   
   let rowNum = parseInt(activeBlock.classList[1].charAt(1));
   let colNum = parseInt(activeBlock.classList[2].charAt(1));

   // Check preceding column for blank
   if (colNum > 1) {
      blankCheck = activeBlock.previousElementSibling;
      if (blankCheck.id === "block0") {
         swap(activeBlock, blankCheck);
         checkBoard();
         return;
      }
   }
   // Check next column for blank
   if (colNum < 3) {
      blankCheck = activeBlock.nextElementSibling;
      if (blankCheck.id === "block0") {
         swap(activeBlock, blankCheck);
         return;
      }
   }  
  // Check preceding row for blank
   if (rowNum > 1) {
      blankCheck = activeBlock.previousElementSibling.previousElementSibling.previousElementSibling;
      if (blankCheck.id === "block0") {
         swap(activeBlock, blankCheck);
         checkBoard();
         return;
      }
   } 

  // Check next row for blank
   if (rowNum < 3) {
      blankCheck = activeBlock.nextElementSibling.nextElementSibling.nextElementSibling;
      if (blankCheck.id === "block0") {
         swap(activeBlock, blankCheck);
         checkBoard();
         return;
      }
   } 

   function swap(block, blank) {    
      let holdClass = blank.className;
      blank.className = block.className;
      block.className = holdClass;
      
      let clonedBlock = block.cloneNode(true);
      clonedBlock.onclick = swapWithBlank;
      let clonedBlank = blank.cloneNode(true);

      blank.parentNode.replaceChild(clonedBlock, blank);
      block.parentNode.replaceChild(clonedBlank, block);       
   }
   
   // Function that checks whether the puzzle has been solved
   function checkBoard() {
      let solved = true;
      for (let i = 1; i <= 8; i++) {
         if (blockContainer.children[i-1].id !== "block" + i) {
            solved = false;
            break;
         }
      }
      
      if (solved) {
         clearInterval(timerID);
         window.alert("Solved!!");
         // If the puzzle has been solved, initiate the puzzleSolved event
         window.dispatchEvent(event);   
      }
   }
}


// Function to randomly order the integers from 1 to 8 while maintaining parity required for the puzzle solution
function scrambleIntegers(size) {
  let x = new Array(size);
  for (let i = 0;i < x.length;i++) {x[i] = i+1;}
  x.sort(randOrder);
 
  let nSum = 0;

  for (let i = 0; i < x.length;i++) {
     for (let j = i; j < x.length; j++) {if (x[j] < x[i]) nSum++;}
  }
   
  if (Math.floor(nSum/2) != nSum/2) { 
     // puzzle is not solveable - make one more swap of values
     let temp;
     let needSwap = true;
     for (let i = 0; (i < x.length) && needSwap; i++) {
        for (var j = i; j < x.length && needSwap; j++) {
           if (x[j] > x[i]) {temp=x[j];x[j]=x[i];x[i]=temp;needSwap=false;}
        }
     }
  }
  return x;
   
   function randOrder(){
      return 0.5 - Math.random();
   }   
}
