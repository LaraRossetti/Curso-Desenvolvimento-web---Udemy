console.log('a =', a)
var a = 2               //a variável sofreu o hoisting -> quando move a variável para o topo
console.log('a =', a)

console.log('b =', b)
let b = 2               //com o let, o hoisting não funciona
console.log('b =', b)