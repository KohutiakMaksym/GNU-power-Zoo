function onScanSuccess(qrCodeMessage) {
    console.log(qrCodeMessage);
    if (qrCodeMessage === 'Lion12345'){alert('Congrats, you\'ve unlocked the Lion!')}
    if (qrCodeMessage === 'Monkey12345'){alert('Congrats, you\'ve unlocked the Monkey!')}
    if (qrCodeMessage === 'Elephant12345'){alert('Congrats, you\'ve unlocked the Elephant!')}
    if (qrCodeMessage === 'Bear12345'){alert('Congrats, you\'ve unlocked the Bear!')}
    if (qrCodeMessage === 'Cock12345'){alert('Congrats, you\'ve unlocked the Cock!')}
}
function onScanError(errorMessage) {
    //alert('Error ocurred');
}
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 450 });
html5QrcodeScanner.render(onScanSuccess, onScanError);
