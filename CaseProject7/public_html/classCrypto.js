/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
    
    function Crypto(name, proof, blockchain) {
  this.name = name;
  this.proof = proof;
  this.blockchain = blockchain;
  this.introduceSelf = function() {
    console.log(`Hello! I'm ${this.name}.` + 'My proof is ${this.proof}.' + 'My blockchain is ${this.blockchain}.');
  };
}
const bitcoin = new crypto('Bitcoin');
bitcoin.name;
bitcoin.introduceSelf();

const ethereum = new crypto('Ethereum');
ethereum.name;
ethereum.introduceSelf();