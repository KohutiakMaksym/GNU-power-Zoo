// Set global variable
var watchID;

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
        var prevLat = position.coords.latitude;
        var prevLong = position.coords.longitude;
    }
    
}
function startWatch() {
        if(watchID) {
            navigator.geolocation.clearWatch(watchID);
            watchID = false;
        } else {
            showPosition();
        }
        document.get
}

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
    window.scroll(0,findPos(document.querySelector('#scanner')));
}

function hideScanner() {
    document.querySelector('#scanner').classList.add('d-none');
}