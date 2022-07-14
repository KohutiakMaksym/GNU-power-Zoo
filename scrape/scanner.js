function onScanSuccess(qrCodeMessage) {
    console.log(qrCodeMessage);
}
function onScanError(errorMessage) {
    //handle scan error
}
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);