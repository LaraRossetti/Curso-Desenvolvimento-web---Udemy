console.log(Math.ceil(6.1))  //arredonda para cima

const objeto1 = {}
objeto1.nome = 'Bola'  //cria dinamicamente o atributo
console.log(objeto1.nome)

function Obj(nome){
    this.nome = nome   //usando o this, cria atributos ou funções que serão expostas para fora quando a função Obj for executada
    this.exec = function(){           //acessa funções através da notação ponto
        console.log('Executando...')
    }
}

const objeto2 = new Obj('Cadeira')
const objeto3 = new Obj('Mesa')
console.log(objeto2.nome)   //acessa atributos através da notação ponto
console.log(objeto3.nome)
objeto3.exec()