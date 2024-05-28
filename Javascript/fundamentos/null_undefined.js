let valor //undefined é quando a variável nunca foi definida
console.log(valor)

valor = null //SEMPRE USAR NULL PARA ANULAR UMA VARIÁVEL AO INVÉS DE UNDEFINED
console.log(valor)
//console.log(valor.toString()) //erro - não é possível acessar nada quando o valor é nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //nunca atribuir diretamente undefined, e sim null
console.log(!!produto.preco) //falso porque o preço não existe
//delete produto.preco -> forma correta de deletar um atributo
console.log(produto)

produto.preco = null
console.log(produto)
console.log(!!produto.preco) //falso porque o preço não existe
