// Set global letiable
let watchID;

function showPosition() {
    if(navigator.geolocation) {
        watchID = navigator.geolocation.watchPosition(successCallback);
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
function successCallback(position) {
    // Check position has been changed or not before doing anything
    if(prevLat != position.coords.latitude || prevLong != position.coords.longitude) {
        
        // Set previous location
        let prevLat = position.coords.latitude;
        let prevLong = position.coords.longitude;
        
        // Get current position
        let positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
        document.getElementById("result").innerHTML = positionInfo;
        
    }
    
}
function startWatch() {
    let result = document.getElementById("result");
    
        if(watchID) {
            navigator.geolocation.clearWatch(watchID);
            watchID = false;
        } else {
            showPosition();
        }
        document.get
}

// Initialise the whole system (above)
// window.onload = startWatch;