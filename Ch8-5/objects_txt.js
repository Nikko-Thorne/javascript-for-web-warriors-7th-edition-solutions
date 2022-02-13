"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-05

      Chess Objects used for Chess Games
      Author: 
      Date:   

      Filename: project08-05.js
*/

// Constructor Function for Chess Piece
function piece(color, rank) {
   this.color = color;    // the color of the piece (white or black)
   this.rank = rank;      // the piece rank (Pawn, Knight, Bishop, Rook, Queen, King)
  this.square = null;    // the square the piece occupies
  this.image = null;     // stores the HTML code representing the image of the piece
}

// Constructor Function for a Chess Set
function chessSet(game) {
   this.pieces = []; // empty array of chess pieces used in the game 

           
   for (let i = 0; i < 8; i++) {         // loop through the chess board rows
      for (let j = 0; j < 8; j++) {      // loop through the chess board columns
         if (game.board[i][j].length === 2) {
            let color = (game.board[i][j].charAt(0) === "B") ? "Black" : "White";
            let rank = "";
            switch (game.board[i][j].charAt(1)) {
               case "P" : rank = "Pawn"; break;
               case "N" : rank = "Knight"; break;
               case "B" : rank = "Bishop"; break;
               case "R": rank = "Rook"; break;
               case "Q" : rank = "Queen"; break;
               case "K" : rank = "King"; break;
            }
            
            // Define a new chess piece
            let chessPiece = new piece(color, rank);
            chessPiece.square = String.fromCharCode(j + 97) + (8 - i);
            let image = "";
            switch (game.board[i][j]) {
               case "BP" : image = "&#9823;"; break;
               case "BN" : image = "&#9822;"; break;
               case "BB" : image = "&#9821;"; break;
               case "BR" : image = "&#9820;"; break;
               case "BQ" : image = "&#9819;"; break;
               case "BK" : image = "&#9818;"; break;
               case "WP" : image = "&#9817;"; break;
               case "WN" : image = "&#9816;"; break;
               case "WB" : image = "&#9815;"; break;
               case "WR" : image = "&#9814;"; break;
               case "WQ" : image = "&#9813;"; break;
               case "WK" : image = "&#9812;"; break;                  
            }
            chessPiece.image = image;
            this.pieces.push(chessPiece);
         }
      }
   }
   
}
