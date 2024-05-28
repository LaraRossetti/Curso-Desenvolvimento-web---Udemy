var numero = 1

{
    let numero = 2    //o let fica visível apenas dentro do bloco, diferente do var
    console.log('dentro =', numero)
}

console.log('fora =', numero)

/*
let: escopo global, escopo de função e escopo de bloco
var: escopo global e escopo de função
*/