const valores = [7.7, 8.9, 6.3, 9.2]
console.log(`Índice[0]: ${valores[0]} e índice[3]: ${valores[3]}.`)
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //array aceita vários tipos 
console.log(valores)

console.log(valores.pop()) //mostra qual o último elemento no array e deleta ele
console.log(valores)

delete valores[0] //deleta o elemento com esse índice
console.log(valores)

console.log(typeof valores) //array no javascript é um objeto

