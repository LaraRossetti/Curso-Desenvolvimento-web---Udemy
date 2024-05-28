// destructuring é uma forma mais fácil de acessar um atributo dentro de um objeto ou um elemento dentro de um array

const pessoa = {
    nome: 'Ana',
    idade: '5',
    endereco: {
        logradouro: 'Rua ABC', 
        numero: 123
    }
}

const { nome, idade } = pessoa   //retiro os atributos nome e idade do objeto pessoa, através do {}
console.log(nome, idade)

const {nome: n, idade: i } = pessoa   //retiro os atributos do objeto e, chamo o nome de 'n' e a idade de 'i'
console.log(n, i)

const { sobrenome } = pessoa  //undefined pois o atributo sobrenome não foi definido
const {bemHumorada = true} = pessoa  //se o atributo bemHumorada não for definido, ele já recebe true
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep } } = pessoa  //retirar um atributo dentro de outro atributo dentro do objeto
console.log(logradouro, numero, cep)

//const { conta: { agencia, num } } = pessoa   //erro, pois nenhum desses atributos existem