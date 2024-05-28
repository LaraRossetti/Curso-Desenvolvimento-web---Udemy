let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1              //prefixado -> prioridade maior do que posfixado
console.log(num1)

console.log(++num1 === num2--)   //++ é executado antes da comparação, por isso da verdadeiro
console.log(num1 === num2)