let a = 3

global.b = 123    //global é o window

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)  //undefined pois é let, não está no contexto global
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)   //module.exports é a mesma coisa que this no node
console.log(module.exports === this)   //no node, a variável é exportada para fora do módulo, assim como é feito no this
console.log(module.exports)  //objeto com todos valores de this
// mesmo que fazer -> module.exports = { e: 456, f: false, g: 'teste' }

abc = 3   //insere a variável no escopo global diretamente no node, não fazer isso
console.log(global.abc)

