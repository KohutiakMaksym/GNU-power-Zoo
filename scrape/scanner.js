function onScanSuccess(qrCodeMessage) {
    console.log(qrCodeMessage);
}
function onScanError(errorMessage) {
    //alert('Error ocurred');
}
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);

