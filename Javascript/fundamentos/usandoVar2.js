var numero = 1 //fugir de variável global

{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)