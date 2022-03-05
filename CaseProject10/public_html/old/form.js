/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let qCoin = location.search.slice(1);

qCoin = qCoin.replace(/\+/g, " ");
qCoin = decodeURIComponent(qCoin);
console.log(qCoin);

let coinArr = qCoin.split(/=/);
 let coinPair = items.split(/&/);   
for(let items of coinArr) {

let choice = coinArr[0];
console.log(choice);
let choice2 = coinArr[1];
console.log(choice2);
let choice3 = coinArr[2];
console.log(choice3);

let coinLabel = document.createElement("coinLabel");
coinLabel.textContent = choice;

document.getElementById("test").textContent = choice;
document.getElementById("test1").textContent = choice2;
document.getElementById("test2").textContent = choice3;
}