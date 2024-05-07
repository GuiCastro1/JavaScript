// 6 Faça um programa que teste a idade do usuário. Se a idade digitada for maior ou
// igual a 18, exiba a mensagem "Você pode dirigir". Caso contrário, exiba a mensagem "Você
// ainda não pode dirigir". 

while(true){
let IDADEusuario = Number(prompt("digite sua idade para saber se esta apito á dirigir"))

if (IDADEusuario >= 18) {
    alert("tu pode dirigir")
} else if (IDADEusuario <= 18) {
    alert("não pode dirigir")
}

let continuar = prompt("Deseja calcular novamente? (sim/não)");
if (continuar.toLowerCase()!== "sim") {
    break;
}
}