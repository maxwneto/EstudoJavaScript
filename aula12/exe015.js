var agora = new Date() //cria variável com hora local.
var hora = agora.getHours()// Pega hora da data.
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia.')    
}else if (hora < 18) {
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
