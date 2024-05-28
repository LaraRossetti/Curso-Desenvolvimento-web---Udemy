function rand({min = 0, max = 1000}){   //definição de um valor padrão -> destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 40
}
console.log(rand(obj))
console.log(rand({min: 955}))  //pegou o valor padrão do máximo
console.log(rand({}))  //passa o objeto vazio, vai pegar os valores padrões de mínimo e máximo