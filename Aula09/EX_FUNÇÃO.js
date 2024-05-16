function calculaImc(peso, altura) {
    let imc = peso / (altura * altura);

    alert(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 16.9) {
        alert("Você está muito abaixo do peso.");
    } else if (imc >= 17 && imc <= 18.4) {
        alert("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Você está acima do peso normal.");
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Você está no peso normal.");
    } else if (imc >= 30 && imc <= 34.9) {
        alert("Obesidade Grau 1.");
    } else if (imc >= 35 && imc <= 39.9) {
        alert("Obesidade Grau 2.");
    } else if (imc >= 40) {
        alert("Obesidade Grau 3.");
    }
}

while (true) {
    let peso = Number(prompt("Digite seu peso"));
    let altura = Number(prompt("Digite sua altura"));

    calculaImc(peso, altura);

    let continuar = prompt("Deseja calcular novamente? (sim/não)").toLowerCase();
    if (continuar!== "sim") {
        break;
    }
}
