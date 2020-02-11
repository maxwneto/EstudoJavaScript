function calcular() {
    var ent = window.document.getElementById('txtn')
    var num = Number(ent.value)
    var res = document.getElementById('res')
    res.innerHTML = ' Calculando:<br>'
    window.document.getElementById('res').style.border = "solid 0.5px"
    window.document.getElementById('res').style.borderRadius = "2px"
    window.document.getElementById('res').style.width = "180px"
    window.document.getElementById('res').style.background = "rgb(89, 89, 230)"
    window.document.getElementById('res').style.color = "white"


    for (var i =1 ; i <=10 ; i++){
        var mult = num * i
        res.innerHTML += `${num} * ${i} = ${mult}<br>`

    }
    
}