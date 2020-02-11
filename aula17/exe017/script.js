function contagem() {
    var contInicio = window.document.getElementById('txtinicio')
    var contFim = window.document.getElementById('txtfim')
    var contPasso = window.document.getElementById('txtpasso')
    var inicio = Number(contInicio.value)
    var fim = Number(contFim.value)
    var passo = Number(contPasso.value)
    var res = window.document.getElementById('res')
    res.innerHTML = 'Contando:<br>'

    if (contInicio.value.length == 0 || contFim.value.length == 0 || contPasso.value.length == 0) {
        window.alert('[Erro] Faltam dados!')
    } else {
        if (inicio > fim) {
            window.alert('[Erro] Inicio não pode ser maior que fim!')

        } else {
            if (passo <= 0) {
                passo = 1
                window.alert('Passo inválido. Será considerado o valor 1.')

            }
            for (var n = inicio; n <= fim; n += passo) {
                res.innerHTML += ` ${n} \u{1F449}`

            }
            res.innerHTML += `\u{1F3C1}`

        }
    }



}