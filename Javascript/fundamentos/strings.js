const escola = 'Cod3r'

console.log(escola.charAt(4))  //apresenta o caracter no índice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //tabela ASCII
console.log(escola.indexOf('3')) //índice de onde está o caracter '3'

console.log(escola.substring(1)) //mostra a string a partir do índice 1
console.log(escola.substring(0, 3)) //mostra a string a partir do índice 0, vai até o índice 3, sem mostrar ele

console.log('Escola '.concat(escola).concat('!')) //concatenação
console.log('Escola ' + escola + '!') //concatenação
console.log(escola.replace(3, 'e')) //substitui no índice 3

console.log('Ana, Maria, João'.split(',')) //converte a string em array, passando no split o que você deseja separar entre eles