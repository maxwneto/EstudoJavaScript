function verificar() {
    var data = new Date()
    var anoCorrente = data.getFullYear()
    var anoNascimento = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > anoCorrente) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsexo')
        var idade = anoCorrente - Number(anoNascimento.value)
        var genero = ''
        //criar variavel para receber elemento img no DOM
        var img = window.document.createElement('img')
        //parametriza variavel/elemento
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 6) {
                img.setAttribute('src', '1b.png')
            } else if (idade < 16) {
                img.setAttribute('src', '2b.png')
            } else if (idade < 30) {
                img.setAttribute('src', '3b.png')

            } else if (idade < 50) {
                img.setAttribute('src', '4b.png')

            } else {
                img.setAttribute('src', '5b.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 6) {
                img.setAttribute('src', '1a.png')
            } else if (idade < 16) {
                img.setAttribute('src', '2a.png')
            } else if (idade < 30) {
                img.setAttribute('src', '3a.png')

            } else if (idade < 50) {
                img.setAttribute('src', '4a.png')

            } else {
                img.setAttribute('src', '5a.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //inserir  variavel/elemento no DOM
        res.appendChild(img)
    }

}