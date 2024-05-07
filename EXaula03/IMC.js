// Atividades relacionais: crie um programa que solicite ao usuário que digite a sua
// altura em metros e o seu peso em quilogramas. Em seguida, o programa deve calcular o
// índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso / altura*2 e
// verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O programa deve
// imprimir na tela se o IMC está dentro do intervalo saudável ou não. 


// alert("Descubra seu IMC")
// // while true {
// let Peso = parseFloat(prompt("Digite Seu peso"))
// let Altura = parseFloat(prompt("Digite Sua altura"))

// let IMC = Peso / (Altura * Altura)

// if (IMC >= 18.5 && IMC <= 24.9){
// alert("Seu IMC esta ótimo")
// }else if(IMC < 18.5 || IMC > 24.9){
// alert("Seu IMC não esta bom")
// }

// // }
while (true) {
 alert("Descubra seu IMC")

    let Peso = parseFloat(prompt("Digite Seu peso"));
    let Altura = parseFloat(prompt("Digite Sua altura"));

   

    let IMC = Peso / (Altura * Altura);

    if (IMC >= 18.5 && IMC <= 24.9) {
        alert("Seu IMC está ótimo");
    } else if (IMC < 18.5 || IMC > 24.9) {
        alert("Seu IMC não está bom");
    }

    
    let continuar = prompt("Deseja calcular novamente? (sim/não)");
    if (continuar.toLowerCase()!== "sim") {
        break;
    }
}
