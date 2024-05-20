//  Crie um loop `do-while` que solicite ao usuário que insira sua idade. Continue pedindo
// até que o usuário insira uma idade válida (ou seja, uma idade maior do que 0).

let idade;

do {
    alert("Por favor, insira sua idade:");
    idade = prompt("Digite sua idade:");

    if (idade <= 0) {
        alert("Idade inválida. Por favor, digite uma idade maior que 0.");
    }
} while (idade <= 0);

alert("Você digitou: " + idade);
