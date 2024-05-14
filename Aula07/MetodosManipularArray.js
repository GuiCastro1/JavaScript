// pop() remove o último elemento do array

// push() insere um elemento no final do array

let alunos = ["gustavo", "bia", "fabiano"]
console.log("____________");
console.log(alunos);
console.log("____________");

let nome = alunos.pop()


console.log(alunos);
console.log(nome);

console.log("____________");

alunos.push("guilherme")

console.log(alunos);
console.log(nome);

//shift() remove o elemento no início do array
//unshift() insere um elemento no início do array
console.log("____________");

let nome01 = alunos.shift()
alunos.unshift(`DAVI`)

console.log(alunos);