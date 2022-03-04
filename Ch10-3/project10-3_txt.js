"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Nikko Thorne
    Date:   03/03/2022

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   

    let bikeFind = new google.maps.DirectionsService();
    let bikeDraw = new google.maps.DirectionsRenderer();
  
    
     let boulder =  new google.maps.LatLng(40.01753, -105.26496);
    let myMap = new google.maps.Map(bikeMap, {
        zoom: 12,
        center: boulder
        });
    
    
   startingPoint.addEventListener("change", drawRoute);
   endingPoint.addEventListener("change", drawRoute);
    


function drawRoute() {
    if(startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {
        let bikeRoute = {
            origin: startingPoint.value,
            destination: endingPoint.value,
            travelMode: "BICYCLING"
        }
        
        bikeFind.route(bikeRoute, function(response, status) {
            if(status == "OK") {
                bikeDraw.setDirections(response);
                bikeDraw.setMap(myMap);
                bikeDraw.setPanel(bikeDirections);
            } else {
               bikeDirections.textContent = "Directions Unavailable:" + status;
            }
        });
    }
}
}