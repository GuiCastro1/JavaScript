let nomes = ["gui", "ermeson", "thiago", "chaves", "bruno", "ninguem"]

for (let i = 0; i < nomes.length ; i++ )console.log(`Olá você ${nomes[i]} foi aprovado`)

// se uma variavel estiver fora de um escopo. a que esta dentro e = 0. pois ela vai se sobre escrever a que esta fora.

    
let nome = ["gui", "ermeson", "thiago", "chaves", "bruno", "ninguem"];
let i = 0;

while(i < nome.length){
    console.log(`Olá você ${nome[i]} foi aprovado`);
    i++;
}
