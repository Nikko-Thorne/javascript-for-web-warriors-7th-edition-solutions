/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let qCoin = location.search.slice(1);

qCoin = qCoin.replace("/\+g, ' '");
qCoin = decodeURIComponent(qCoin);
console.log(qCoin);

//add event listener
document.getElementById("submitButton").onclick = function() {
    let click = document.querySelectorAll("input[input type='radio']");
    localStorage.setItem("form1", click);
    console.log(localStorage);
    
};