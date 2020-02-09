function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var agora = data.getHours()
    msg.innerHTML = `Agora são ${agora} horas.`

    if (agora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#cdeeff';
    } else if (agora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#c79440'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#001322'
    }

}

