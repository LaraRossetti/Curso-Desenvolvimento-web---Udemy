//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)  //o segundo valor será undefined, gerando um resultado NaN
imprimirSoma(2, 13, 3, 4, 5, 6) //ignora os outros números
imprimirSoma() //os dois serão undefined

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2))  //passando apenas um valor, ele considera o 0
console.log(soma(2, 3))
console.log(soma())