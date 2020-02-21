let num = window.document.getElementById("txtn")
let saida = window.document.getElementById("flista")
let res = window.document.getElementById("res")
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        saida.appendChild(item)
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }  
    
    num.value = ' ' //agapa número digitado
    num.focus() // volta selecao para elemento

}

function finalizar(){
    if (valores.length == 0){
        window.alert ('[ERRO] Necessário digitar pelo menos um número entre 1 e 100.')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma =0
        let media = 0
        for (let pos in valores){
            soma  += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `O total de valores digitados foi ${tot}.<br>`
        res.innerHTML += `O menor número é ${menor}.<br>`
        res.innerHTML += `O maior numero é ${maior}.<br>`
        res.innerHTML += `Somando todos os valores temos ${soma}.<br>`
        res.innerHTML += `A média dos valores digitados é = ${media}.<br>`


        
        
    }
}