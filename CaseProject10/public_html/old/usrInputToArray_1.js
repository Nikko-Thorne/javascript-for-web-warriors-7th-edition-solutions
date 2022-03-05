/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function userInput() {
    selectElement = document.querySelector("#subject1");
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
    window.alert(output);
}

