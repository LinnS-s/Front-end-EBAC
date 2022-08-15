// validador das respostas

// modo de uso 

// repondendo a parte 2
 //coloque a pergunta do arquivo da aula  na variavel "Resposta"

let resposta = 10 + 10 * 2 

function validador (resposta){
    console.log(resposta)
    console.log(typeof(resposta))
    //console.log(--resposta) mecanica para usar o incremento e o decremento
    return validador
} 

validador(resposta)
 


// repondendo a parte 2 

//presets

var branco = 'preto';
var branco = 'preto';
var preto = "cinza";
var cinza = "branco";
var carro = 'preto';
var valor = 30000;
var entrada = 3000;
var prestacao = 750;


let pergunta = cavalo = carro == "preto" ? "cinza": "marrom"; 

function validandoStrings(pergunta){
    if (pergunta) {
        console.log("o Resutado foi verdadeiro")
    } else {
        console.log(" o Resutado foi falso")
    }
}

function calculoDePrestaçao (valor){
    quantidadePrestacoes = valor - entrada / prestacao
    console.log("Você irá pagar 30 Prestações")
    console.log(quantidadePrestacoes)

}
calculoDePrestaçao(valor)
validandoStrings(pergunta)

function calcularLetras(branco,cinza,branco,preto){
    Total = branco.length + cinza.length + preto.length
    console.log("O resultado da soma das letras foi " + Total +"")
}
calcularLetras(branco,cinza,branco,preto)


// Resposta Parte 1
/*

10 + 15 = 25  (number)
“10” + 2 = 102 (string)  O java script só retornou string pelo fato de “+” na linguagem, ser usado para concatenar, resultando na concatenação da string 10 com o tipo numérico 2.
“10” * 2 = 20 (number)
“10” / 3 = 3.3333333333333335 (number)
“10” % 3 = 1 (number)
10 + true = 11 (number)
10 == ”10” =  true (booleano) O java script está comparando os valores não os tipos * comparando se 10 é igual a 10. No caso sim. 
10 === “10” = False (booleano)
10 < 11 = true (Booleano)
10 > 12 = false (booleano)
10 <= 10.1 =  true (booleano)
10 > 9.99 = true (Booleano)
10 != “dez” = true (Booleano)
10 + true = 11 (number)
“dez” + true =  deztrue  (string)  
10 + false = 10 (number)
10 * false = 0 (Number)
true + true = (2 Number) * 1 = true ||  0 = false
10++ = 11 (number) 
10-- = 9 (number)
1 & 1 = 1 (number)
1 & 0 = 0 (number)
0 & 0 = 0 (number)
1 & 0 = 0 (number)
0 / 1 = 0 (number)
5 + 5 == 10 = true (booleano)
“5” + ”5” == 10 = false (booleano)
“5” * 2 > 9 = true (booleano)
(10 + 10) * 2 = 40 (number)
*/

// Respostas parte 2

/* 
a) branco == “branco”(" o Resutado foi falso")
b) branco == cinza (" o Resutado foi falso")
c) carro === branco ("o Resutado foi verdadeiro")
d) var cavalo = carro == “preto” ? “cinza” : “marron”; ("o Resutado foi verdadeiro")
e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação. (Você irá pagar 29996 Prestações)
f) Somando as variáveis de cores é formada uma string de quantos caracteres? (O resultado da soma das letras foi 16)

*/
