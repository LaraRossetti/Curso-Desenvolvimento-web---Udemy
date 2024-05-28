const nome = 'João'
const concatenacao = 'Olá ' + nome + '!'

const template = ` 
    Olá 
    ${nome}!`  //aceita a quebra de linha

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //função para transformar em maiúsculo 
console.log(`Ei... ${up('cuidado')}!`)