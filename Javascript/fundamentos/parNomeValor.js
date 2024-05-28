// par nome/valor

const saudacao = 'Bom dia'  //contexto léxico 1

function exec(){
    const saudacao = 'Boa tarde'   //contexto léxico 2
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor
const pessoa = {
    nome: 'João',
    idade: '21',
    peso: 60,
    endereco: {
        logradouro: 'Avenida Afonso Pena',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(pessoa)