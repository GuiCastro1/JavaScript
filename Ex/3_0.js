// Crie um objeto que represente uma pessoa com as propriedades nome, idade e
// cidade, e apresente as informações dessa pessoa em uma string.

let objeto = {
    nome: "Guilherme",
    idade: 18,
    cidade: "Jaguaré"
};

let convertendo = JSON.stringify(objeto);

console.log(convertendo);