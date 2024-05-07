// • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o
// resultado da soma desses números na tela. 
while(true){

let numero1 = Number(prompt("Digite um número intero para ser somado"))
let numero2 = Number(prompt("Digite outro número intero para ser somado"))
let soma = numero1+numero2
alert(`A soma é ${soma}`)


let continuar = prompt("Deseja calcular novamente? (sim/não)");
if (continuar.toLowerCase()!== "sim") {
    break;
}
}