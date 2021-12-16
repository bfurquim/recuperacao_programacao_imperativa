// 2 - Importe o arquivo de consertos E faça as seguintes manipulações: Liste e exiba somente os aparelhos com pronto marcado como true Liste e exiba somene os aparecelhos com pronto marcado como false

const consertos = require('./consertos.js');


const exibirAparelhos = (array) => {
    let arrTrue = [];
    let arrFalse = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].pronto === true) {
            arrTrue.push(array[i]);

        }
        else {
            arrFalse.push(array[i]);
        }
    }
    return arrTrue, arrFalse;
}


console.log(exibirAparelhos(consertos.arrObjetos));



// Passo 3 - Liste os aparelhos exibindo o modelo do aparelho juntamente dos itens consertados e aplique uma soma nos valor dos consertos e exibir no console somente os aparelhos que estão pronto marcado como true. Exemplo:


const somaValor = (array) => {
    let arrTrue = [];
    let soma = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i].pronto === true) {
            soma = array[i].valor.reduce(function(acumulador, num) 
            {return acumulador + num;});

            array[i].valor = soma;

            arrTrue.push(array[i]);

        }
    }
    return arrTrue
}


console.log(somaValor(consertos.arrObjetos));