//Checkpoint de Recuperação - Bruno Furquim

const consertos = {
    aparelho: "",
    itensConsertados: [],
    valor: [],
    pronto: null,
    arrObjetos: [],
    statusAparelho: function(aparelho, itensConsertados, valor, pronto){
        this.aparelho = aparelho;
        this.itensConsertados = itensConsertados;
        this.pronto = pronto;
        this.valor = valor;

        let dados = {aparelho: aparelho, itensConsertados: itensConsertados, valor: valor, pronto: pronto};
        this.arrObjetos.push(dados);
    },
}

//1 - Crie um array de objetos consertos que tenha como atributos: (string), itens consertados (array de strings), valores (array de números) e (booleano). Deve ter ao menos 15 itens dentro de consertos salve o arquivo como consertos.js e exporte este módulo. Módelo de exemplo do array de consertos:

//Criando o bojeto:

consertos.statusAparelho("IPhone 7", ["tela", "bateria"], [100, 100], true);
consertos.statusAparelho("IPhone 8", ["carregador", "bateria"], [30, 300], true);
consertos.statusAparelho("IPhone X", ["tela", "carregador"], [100, 30], false);
consertos.statusAparelho("IPhone 11", ["tela", "carregador"], [100, 30], false);
consertos.statusAparelho("IPhone X", ["formatação", "cabo usb"], [80, 35], false);
consertos.statusAparelho("IPhone 12", ["pelicula", "memória"], [15, 100], true);
consertos.statusAparelho("Samsung A10", ["formatação", "carregador"], [80, 30], false);
consertos.statusAparelho("Samsung Note", ["tela", "camera frontal"], [100, 200], true);
consertos.statusAparelho("Samsung Galaxy", ["tela", "camera traseira"], [100, 250], true);
consertos.statusAparelho("MI 9", ["plug micro usb", "camera traseira"], [150, 250], true);
consertos.statusAparelho("MI 10", ["plug teclado", "lcd"], [50, 80], false);
consertos.statusAparelho("MI 10", ["capa", "pelicula"], [20, 15], true);
consertos.statusAparelho("MI Note", ["capa", "pelicula"], [20, 15], true);
consertos.statusAparelho("MI Note", ["display", "tela touch"], [150, 100], false);
consertos.statusAparelho("IPhone 13 Pro Max", ["capa", "pelicula"], [20, 15], true);
consertos.statusAparelho("IPhone 13", ["capa", "pelicula"], [20, 15], true);




module.exports = consertos;





//console.log(consertos);
//console.log(consertos.arrObjetos);

/* //APARELHOS QUE ESTÃO NA LOJA
let aparelho1 = "IPhone 7";
let aparelho2 = "IPhone 8";
let aparelho3 = "IPhone X";
let aparelho4 = "Iphone 11";
let aparelho5 = "Iphone 12";
let aparelho6 = "Samsung A10"; 
let aparelho7 = "Samsung Note";
let aparelho8 = "Samsung Galaxy"
let aparelho9 = "MI 9"
let aparelho10 = "MI 10"
let aparelho11 = "Mi Note"
let aparelho13 = "IPhone 13 Pró Max"
let aparelho14 = "IPhone 13"

;

/*VALORES DOS ACESSÓRIOS
let tela = 100;
let bateria = 100;
let teclado = 50;
let lcd = 80;
let carregador = 30;
let placa_lógica = 300;
let capa= 20;
let pelicula = 15;
let cabo_usb = 35;
let plug_micro_usb = 150;
let camera_frontal = 200;
let camera_traseira = 250;
let memória = 100;
let formatação = 80;
let display = 150;
let tela_touch = 100;
*/

/*
//VERIFICAR LISTA DE PREÇOS GERAIS
let itensConcertados = [
    {item: "tela", preço: 100},
    {item: "bateria", preço: 100},
    {item: "teclado", preço: 50},
    {item: "lcd", preço: 80},
    {item: "carregador", preço: 30},
    {item: "placa lógica", preço: 300},
    {item: "capa", preço: 20},
    {item: "pelicula", preço: 15},
    {item: "cabo usb", preço: 35},
    {item: "plug micro usb", preço: 150},
    {item: "camera frontal", preço: 200},
    {item: "camera traseira", preço: 250},
    {item: "memória", preço: 100},
    {item: "formatação", preço: 80},
    {item: "display", preço: 150},
    {item: "tela_touch", preço: 100},
]*/


