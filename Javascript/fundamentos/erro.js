function tratarErroELancar(erro){   
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {                     //lança um tratamento de erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } 
}


function imprimirNomeGritado(obj){
    try{                                              //código potencialmente perigosos, que podem dar erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){                                     //catch se acontecer o erro
        tratarErroELancar(e)
    } finally{                         //o finally é sempre executado independente se tem erro ou não
        console.log('final')
    }
}

const obj = {
    nome: 'Roberto'
}
imprimirNomeGritado(obj)