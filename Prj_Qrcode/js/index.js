document.querySelector('.gerar-qrcode').addEventListener('click', function (){
    var url = document.querySelector('.qr-url').value

    document.querySelector('#qrcode').innerHTML = ''

    var qrcode = new QRCode(document.querySelector('#qrcode'), {
        text: `${url}`,
        colorDark: `black`,
        colorLight: `white`,
        correctLevel: QRCode.CorrectLevel.H
    })
})
