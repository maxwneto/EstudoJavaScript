let num = [4 , 9, 5,0]
num[4] = 1 //adiciona elemento na posicao 4
num.push(3) //adiciona elemento na ultima posicao
num.sort() //ordena elementos do vetor/array
console.log(`Posicao 3:  ${num[3]}`)//imprimir posicao 3 do vetor
console.log('-------------------')

//imprimir todas as posicoes do vetor utilizando for normal
for (let c = 0; c < num.length;c++){
    console.log(`Posição ${c} = ${num[c]}`)
}

console.log('-------------------')
//imprimir todas as posicoes do vetor utilizando for otimizado
for(let pos in num){
    console.log(`Posição ${pos} = ${num[pos]}`)
}
console.log('-------------------')
//pesquisar posicao de determinado valor
console.log(`O valor 5 está na posição ${num.indexOf(5)}`) //valor existente
console.log(`O valor 7 está na posição ${num.indexOf(7)}`) //quando o valor não existe é retornado -1
