//sequência de Fibonacci

let termos = prompt("Digite um número para calcular quantos termos da sequência de Fibonacci:");

if (termos) {
    termos = parseInt(termos); 
    if (!isNaN(termos)) {
        let Armazenamento = [0, 1]; 

        for (let i = 2; i < termos; i++) { 
            let resultado = Armazenamento[i - 1] + Armazenamento[i - 2];
            Armazenamento.push(resultado);
        }

        alert(`A sequência de Fibonacci até o ${termos}º termo é:\n${Armazenamento.join(", ")}`);
    } else {
        alert("Entrada inválida.");
    }
} else {
    alert("Por favor, digite um número.");
}
