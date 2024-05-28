function rand([min = 0, max = 1000]){  //estabelece valores padrões no array
    if(min > max) [min, max] = [max, min]   //primeira parte do igual usa o destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)     //floor -> arredonda para baixo
}

console.log(rand([50, 40]))  //o máximo é passado antes do mínimo
console.log(rand([992]))    //passa só o primeiro valor
console.log(rand([, 10]))     //só o segundo valor
console.log(rand([]))      //não é passado nenhum valor, pega os valores padrões
//console.log(rand())      ERRO, tenta destruturar termo undefined
