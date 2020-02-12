function tabuada(){
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO]. Por favor, digite um número')
        
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++){
            let item = window.document.createElement("option")
            item.text = `${n} * ${i} = ${n * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }

    }
    

}