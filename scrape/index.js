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

document.querySelector('#scanQR').addEventListener('click', () => {
    launchScanner();
    window.scroll(0,findPos(document.querySelector('#scanner')));
});

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curtop];
    }
}

function launchScanner() {
    document.querySelector('#scanner').classList.remove('d-none');
}

function hideScanner() {
    document.querySelector('#scanner').classList.add('d-none');
}