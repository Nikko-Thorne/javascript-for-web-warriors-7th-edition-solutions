"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-05

      Interface to replay a chess game stored in a JSON file
      Author: Nikko Thorne
      Date:   02/13/2022

      Filename: project08-05.js
*/


/*--------------------- Interface Code -------------------*/

// Interface Objects
let moveLog = document.getElementById("moveLog");         // ol element containing the list of the moves
let moveSpans = moveLog.getElementsByTagName("span");     // span element containing the individual moves
let nextButton = document.getElementById("nextButton");   // button to move forward through the game
let prevButton = document.getElementById("prevButton");   // button to move backward through the game
let getLogButton = document.getElementById("getLog");     // button to retrieve game log stored in a JSON file 
let blackBox = document.getElementById("blackBox");       // box containing captured black pieces
let whiteBox = document.getElementById("whiteBox");       // box containing captured white pieces
let titleBox = document.getElementById("title");          // h1 heading for game title
let descBox = document.getElementById("description");     // paragraph for game description

getLogButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   // and store the contents in the game object literal
   fr.onload=function(){ 
      // Load data from the JSON file into the game object
      let game = JSON.parse(fr.result);
      
      titleBox.textContent = game.title;
      descBox.textContent = game.description;
      
      writeMoveLog(game.moves);
      
      // Create a new chess set object
      let mySet = new chessSet(game);
      
      setupBoard(mySet);
      
      nextButton.onclick = function() {
         if (game.move < game.moves.length - 1) {
            showNextBoard(game);           
         }
      }
      
      prevButton.onclick = function() {
         if (game.move > -1) {
            showPrevBoard(game);           
         }
      }   
   }
   
};

function writeMoveLog(moves) {
   for (let i = 0; i < moves.length; i+=2) {
      let newLI = document.createElement("li");

      // add the white move for each round
      let whiteMove = document.createElement("span");
      whiteMove.textContent = moves[i];
      newLI.appendChild(whiteMove);

      // add the black move for each round
      let blackMove = document.createElement("span");
      blackMove.textContent = moves[i+1];   
      newLI.appendChild(blackMove); 

      // Append the two moves to the ordered list
      moveLog.appendChild(newLI);
   }   
}

function setupBoard(set) {
   // Remove any pieces from the current board
   let piecesOnBoard = document.querySelectorAll("table#chessboard tr td span");
   for (let i = 0; i < piecesOnBoard.length; i++) {
      let parentCell = piecesOnBoard[i].parentElement;
      parentCell.removeChild(parentCell.lastElementChild);
   }
   
   // Place chess pieces on the board.
   for (let i = 0; i < set.pieces.length; i++) {
      let pieceImage = document.createElement("span");
      pieceImage.innerHTML = set.pieces[i].image;
      pieceImage.className = set.pieces[i].color;
      let chessSquare = document.getElementById(set.pieces[i].square);
      chessSquare.appendChild(pieceImage);
   } 
}


/* Function to update the board when the next move is played */
function showNextBoard(game) {
   game.move++;
   
   // Highlight the move text in the move log
   moveSpans[game.move].className = "highlight";
   
   // Read the notation for the next move 
   let moveStr = game.moves[game.move];
   
   if (moveStr === "1-0") {
      window.alert("Black Resigns");
   } else if (moveStr === "0-1") {
      window.alert("White Resigns");
   } else if (moveStr === "1/2-1/2") {
      window.alert("Draw Accepted");
   } else if (moveStr === "0-0") {
      kingSideCastle();
   } else if (moveStr === "0-0-0") {
      queenSideCastle();
   } else if (moveStr.includes("=")) {
      pawnPromotion();
   } else if (moveStr.includes("x")) {
      capturePiece();
   } else if (moveStr.includes("-")) {
      movePiece();
   }
   
   // Move the piece image from the starting cell to the ending cell
   function moveCell(start, end) {    
      document.getElementById(end).appendChild(document.getElementById(start).firstElementChild);      
   }
   
   // Move the piece image into the cell and move the occupying piece back to the box
   function removeCell(cell) {
      // Moves a captured piece to the box
      if (game.move % 2 === 0) {    // white captured a black piece
         blackBox.appendChild(document.getElementById(cell).firstElementChild);
      } else {                      // black captured a white piece
         whiteBox.appendChild(document.getElementById(cell).firstElementChild);
      }
   }
   
   // Perform a kingside castle
   function kingSideCastle() {
      if (game.move % 2 === 0) {  // white kingside castle
         moveCell("e1", "g1");
         moveCell("h1", "f1");
      } else {                    // black kingside castle
         moveCell("e8", "g8");
         moveCell("h8", "f8");
      }
   }
   
   // Perform a queenside castle
   function queenSideCastle() {
      if (game.move % 2 === 1) {  // white queenside castle
         moveCell("e1", "c1");
         moveCell("a1", "d1");
      } else {                    // black queenside castle
         moveCell("e8", "c8");
         moveCell("a8", "d8");
      }
   }  
   
   // Promote a pawn that reaches the end rank
   function pawnPromotion() {
      let mIndex = moveStr.indexOf("-");
      let startCell = moveStr.substr(mIndex - 2,2);
      let endCell = moveStr.substr(mIndex + 1, 2);
      moveCell(startCell, endCell); 
      let newPiece = moveStr.charAt(moveStr.length - 1);
      let rankNum;
      switch (newPiece) {
         case "P" : rankNum = 9817; break;  // unicode for white pawn
         case "N" : rankNum = 9816; break;  // unicode for white knight
         case "B" : rankNum = 9815; break;  // unicode for white bishop
         case "R": rankNum = 9814; break;   // unicode for white rook
         case "Q" : rankNum = 9813; break;  // unicode for white queen
         case "K" : rankNum = 9812; break;  // unicode for white king
      }   
      if (game.move % 2 === 1) {   // move was made by black change unicode to black piece image
         rankNum+=6;
      }
      
      // Change image to promoted piece
      document.getElementById(endCell).firstElementChild.innerHTML = "&#" + rankNum + ";";
   }
   
   // Retrieve the address of starting cell and ending (occupied) cell
   function capturePiece() {
      let tIndex = moveStr.indexOf("x");
      let startCell = moveStr.substr(tIndex - 2,2);
      let endCell = moveStr.substr(tIndex + 1, 2);
      removeCell(endCell);  // remove piece from the cell
      moveCell(startCell, endCell)
   }   
   
   // Retrieve the adress of the starting cell and ending (unoccupied) cell
   function movePiece() {
      let mIndex = moveStr.indexOf("-");
      let startCell = moveStr.substr(mIndex - 2,2);
      let endCell = moveStr.substr(mIndex + 1, 2);
      moveCell(startCell, endCell)
   }
}


/* Function to update the board when the current move is undone */
function showPrevBoard(game) {
   // Remove highlighting from the move
   moveSpans[game.move].classList.remove("highlight");
   
   // Read the notation for of current move 
   let moveStr = game.moves[game.move];
   
   if (moveStr === "1-0") {
      // Do nothing in reverse
   } else if (moveStr === "0-1") {
      // Do nothing in reverse
   } else if (moveStr === "1/2-1/2") {
      // Do nothing in reverse
   } else if (moveStr === "0-0") {
      kingSideCastle();
   } else if (moveStr === "0-0-0") {
      queenSideCastle();
   } else if (moveStr.includes("=")) {
      pawnDemotion();
   } else if (moveStr.includes("x")) {
      addPiece();
   } else if (moveStr.includes("-")) {
      movePiece();
   }
   
   // Reduce the move number by 1
   game.move--;
   
   // Move the piece back from its ending cell to its starting cell
   function moveCell(start, end) {    
      document.getElementById(end).appendChild(document.getElementById(start).firstElementChild);      
   }
   
   // Move a captured piece from its box back to the board
   function addCell(cell) {
      // Moves a captured piece to the box
      if (game.move % 2 === 0) {    // move the black piece back to the board
         document.getElementById(cell).appendChild(blackBox.lastElementChild);
      } else {                      // move the white piece back to the board
         document.getElementById(cell).appendChild(whiteBox.lastElementChild);
      }
   }
   
   // Perform a kingside caste in reverse
   function kingSideCastle() {
      if (game.move % 2 === 0) {  // white kingside castle
         moveCell("g1", "e1");
         moveCell("f1", "h1");
      } else {                    // black kingside castle
         moveCell("g8", "e8");
         moveCell("f8", "h8");
      }
   }
   
   // Perform a queenside castle in reverse
   function queenSideCastle() {
      if (game.move % 2 === 1) {  // white queenside castle
         moveCell("c1", "e1");
         moveCell("d1", "a1");
      } else {                    // black queenside castle
         moveCell("c8", "e8");
         moveCell("d8", "a8");
      }
   }  
   
   // Demote a pawn that had reached the end rank
   function pawnDemotion() {
      let mIndex = moveStr.indexOf("-");
      let startCell = moveStr.substr(mIndex + 1,2);
      let endCell = moveStr.substr(mIndex - 2, 2);
      moveCell(startCell, endCell); 
      let newPiece = moveStr.charAt(moveStr.length - 1);
      let rankNum;   
      if (game.move % 2 === 1) {   // move was made by black change unicode to black piece image
         rankNum = 9823;
      } else {
         rankNum = 9817;
      }
      
      // Change image to promoted piece
      document.getElementById(endCell).firstElementChild.innerHTML = "&#" + rankNum + ";";
      
   }
   
   // Find the addresses of the starting and ending cell during a capture
   function addPiece() {
      let tIndex = moveStr.indexOf("x");
      let startCell = moveStr.substr(tIndex + 1,2);
      let endCell = moveStr.substr(tIndex -2, 2);
      moveCell(startCell, endCell);
      addCell(startCell);
   }   
   
   // Find the addresses of the starting and ending cell during a move
   function movePiece() {
      let mIndex = moveStr.indexOf("-");
      let startCell = moveStr.substr(mIndex + 1,2);
      let endCell = moveStr.substr(mIndex -2, 2);
      moveCell(startCell, endCell);
   }   
}


