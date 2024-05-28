//Armazenando uma função em uma variável
const imprimirSoma = function (a, b){      //função anônima -> sem nome
    console.log(a + b)
}
imprimirSoma(1, 2)


//Armazenando uma função arrow em uma variável 
const soma = (a, b) => {   //forma reduzida de escrever uma função: a seta substitui a palavra function
    return a + b
}
console.log(soma(1, 1))


//Retorno implícito
const subtracao = (a, b) => a - b  //forma mais reduzida ainda, geralmente para funções de apenas uma linha
console.log(subtracao(5, 1))

const imprimir = a => console.log(a)
imprimir('Show!')