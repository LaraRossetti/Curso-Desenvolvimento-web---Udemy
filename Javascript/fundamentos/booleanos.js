let isAtivo = false
console.log(isAtivo)


isAtivo = true
console.log(isAtivo)


isAtivo = 1
console.log(!isAtivo) //transformar um número em booleano -> ! false -> !! true

console.log('os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //retorna falso quando a segunda parte é falsa

console.log('para finalizar:')
console.log(!!('' || null || 0 || ' ')) //retorna verdadeiro porque pelo menos uma das alternativas é verdadeira
console.log('' || 0 || null || 'oi' || 123) //retorna a primeira alternativa verdadeira

let nome = 'João'
console.log(nome || 'Desconhecido')
