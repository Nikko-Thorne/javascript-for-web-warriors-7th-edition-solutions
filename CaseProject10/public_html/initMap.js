/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("myMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow();
  const elevator = new google.maps.ElevationService();
  const locationButton = document.createElement("button");

  locationButton.textContent = "click to show your location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            alt: position.coords.altitude
           
          };
        
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);

        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
     
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: gps failed."
      : "Error: Your browser failed."
  );
  infoWindow.open(map);
}

let button = document.getElementById("yourLoc");
let latT = document.getElementById("latitude");
let longT = document.getElementById("longitude");
let altT = document.getElementById("altitude");


button.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let altC = position.coords.altitude;

    latT.innerText = lat.toFixed(2);
    longT.innerText = long.toFixed(2);
    altT.innerText = altC.toFixed(2);
  });
});