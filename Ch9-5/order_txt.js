"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-05

      Project to add orders to shopping cart web storage
      Author: Nikko Thorne
      Date:   02/26/2022  

      Filename: orders.js
*/

// Page Objects
let submitButton = document.getElementById("submitButton");
let product = document.getElementById("product");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let size = document.getElementById("size");
let color = document.getElementById("color");

submitButton.onclick = function() {
   let itemTotal;
   // Increase the total items in the shopping cart by 1
   if (sessionStorage.getItem("itemsInCart")) {
      itemTotal = parseInt(sessionStorage.getItem("itemsInCart")) + 1;
   } else {
      itemTotal = 1;
   }
   
   // Store the number of items in the shopping cart
   sessionStorage.setItem("itemsInCart", itemTotal);
   
   // Create a text string describing the product added to the cart
   let itemText = product.value + " & ";
   itemText += price.value + " & ";
   itemText += quantity.value + " & ";
   itemText += size.value + " & ";
   itemText += color.value;

   // Create a new shopping cart storage item with the key name "cartItem" plus the item number
   sessionStorage.setItem("cartItem" + itemTotal, itemText);
   
};