function onScanSuccess(qrCodeMessage) {
    console.log(qrCodeMessage);
    if (qrCodeMessage === 'Lion'){
        alert('Congrats, you\'ve unlocked the Lion!');
        document.querySelector('#lion').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Camel'){
        alert('Congrats, you\'ve unlocked the Camel!');
        document.querySelector('#camel').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Monkey'){
        alert('Congrats, you\'ve unlocked the Monkey!');
        document.querySelector('#monkey').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Turkey'){
        alert('Congrats, you\'ve unlocked the Turkey!');
        document.querySelector('#turkey').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Zebra'){
        alert('Congrats, you\'ve unlocked the Zebra!');
        document.querySelector('#zebra').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Bison'){
        alert('Congrats, you\'ve unlocked the Bison!');
        document.querySelector('#bison').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Elephant'){
        alert('Congrats, you\'ve unlocked the Elephant!');
        document.querySelector('#elephant').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Otter'){
        alert('Congrats, you\'ve unlocked the Otter!');
        document.querySelector('#otter').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Corocodile'){
        alert('Congrats, you\'ve unlocked the Crocodile!');
        document.querySelector('#crocodile').classList.remove('inactive');
    }
    if (qrCodeMessage === 'Seal'){
        alert('Congrats, you\'ve unlocked the Seal!');
        document.querySelector('#seal').classList.remove('inactive');
    }
}
function onScanError(errorMessage) {
    //alert('Error ocurred');
}
let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 450 });
html5QrcodeScanner.render(onScanSuccess, onScanError);
