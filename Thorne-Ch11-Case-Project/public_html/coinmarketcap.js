/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
"use strict";


import { apiKey } from "./cmpKey.js"

let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5&convert=USD";
  
fetch(url + qString)
        .then(resp => {return resp.json();})
        .then(data => {
          console.log(data.data);
          displayNames(data);
      });
      
function displayNames(data) {
    const crypto = data.data[0];
    const cryptoDiv = document.getElementById("flex1");
    
    const cryptoName = crypto.name;
    const heading = document.createElement("h2");
    heading.innerHTML = cryptoName;
    cryptoDiv.appendChild(heading);
    
        const getSymbol = Object.keys(crypto)
    .filter(function (symbol) {
      return symbol.indexOf("symbol") === 0;
    })
    .reduce(function (symbols, symbol) {
      if (crypto[symbol] !== null) {
        symbols[symbol] = crypto[symbol];
      }
      return symbols;
    }, {});
      
        for (let key in getSymbol) {
    let value = getSymbol[key];
    let listItem = document.getElementById("fle1");
    listItem.innerHTML = value;
    getSymbol.appendChild(listItem);
}
}