function calcular() {
    var ent = window.document.getElementById('txtn')
    var res = document.getElementById('res')
    res.innerHTML = ' Calculando:<br>'


    if (ent.value.length == 0) {
        window.alert('[ERRO] Favor digitar algum número!')
    } else {
        var num = Number(ent.value)
        if (num == 0) {
            window.alert('[ERRO]. Número deve ser diferente de Zero.')
        } else {
            window.document.getElementById('res').style.border = "solid 0.5px"
            window.document.getElementById('res').style.borderRadius = "2px"
            window.document.getElementById('res').style.width = "180px"
            window.document.getElementById('res').style.background = "rgb(89, 89, 230)"
            window.document.getElementById('res').style.color = "white"
            for (var i = 1; i <= 10; i++) {
                var mult = num * i
                res.innerHTML += `${num} * ${i} = ${mult}<br>`

            }
        }

    }



}