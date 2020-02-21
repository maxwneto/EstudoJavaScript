
 let ent = window.document.getElementById("txtn")
 let saida = window.document.getElementById("flista")
 let res = window.document.getElementById("res")
 let valores = []
 
 function adicionar(num) {  

    if (ent.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        let conv = Number(ent.value)
        if (conv < 1 || conv > 100) {
            window.alert("[Erro] Número deve estar entre 1 e 100!")
        } else {
            let saida = window.document.getElementById("flista")
            saida.innerHTML = ''
            let item = window.document.createElement("option")
            item.innerHTML = `Valor ${conv} adicionado.`
            saida.appendChild(item)

        }

    }

}