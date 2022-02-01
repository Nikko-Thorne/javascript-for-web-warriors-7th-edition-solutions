"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Nikko Thorne
      Date:   01/30/2022

      Filename: project05-03.js
*/
//define variables 
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

//function to test value of n.nodeName is = to heading
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
    if(n.nodeName === heading) {
        let anchor = document.createElement("a");
        anchor.name = "doclink" + headingCount;
        n.insertBefore(anchor, n.firstElementChild);
        
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        listItem.appendChild(link);
        
        link.textContent = n.textContent;
        listItem.href = "#" + "doclink" + headingCount;
        
        toc.appendChild(listItem);
        
        headingCount++;
    }
}