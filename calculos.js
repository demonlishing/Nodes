

/*

EXEMPLO 1
function nome (p1, p2){
    return var
}

EXEMPLO 2
const var = function (p1, p2){
    return valor

}
 EXEMPLO 3
const var = (p1, p2) => p1+p2

EXEMPLO 4
nomefuncao (p1, p2)
var = nomefuncao(p1, p2)

crie uma função para cada operação matemática. 
Uma função para solicitar valores, e uma função
para escolher qual opração será executada.
Tudo isso dentro de um loop.



=====!!ATIVIDADE ABAIXO!!====
*/





let a = 10;
let b = 50
const calculo = "+";

function soma (a = 1 , b = 1){
    return a + b;
}

function subtracao (a = 1 , b = 1){
    return a - b;
}
function multiplicacao (a = 1, b = 1){
    return a * b;
}
function divisao (a = 1, b = 1){
    return a / b;
}

if (calculo === "+"){
    console.log("A soma desses valores são:" , soma(a, b))
}

if (calculo === "-"){
    console.log("A subtração desses valores são:" , subtracao(a, b))
}

if (calculo === "*"){
    console.log("A multiplicação desses valores são:" , multiplicacao(a, b))
}

if (calculo === "/"){
    console.log("A divisão desses valores são:" , divisao(a, b))
}
