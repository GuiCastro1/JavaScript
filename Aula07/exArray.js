// let NomesDeClientes = [];
// let NOMES ="";
// let Comfimacao = 3;

// while(Comfimacao == 3){

// NOMES = prompt("digite o nome dos clientes")

// NomesDeClientes.push(NOMES)

// alert(`${NOMES}`)

// }

const hudh = () =>{
let NOMEDOSPARTICIPANTES = [];
let CONFIRMAUSUARIO = "sim";

while (CONFIRMAUSUARIO.toLowerCase() === "sim") {
    let novoNome = prompt("Digite o nome dos participantes");
    if (novoNome) { 
        NOMEDOSPARTICIPANTES.push(novoNome);
    }
    CONFIRMAUSUARIO = prompt("Deseja adicionar mais participantes? Digite 'sim' ou 'não'");
}

alert(`Participantes cadastrados:\n${NOMEDOSPARTICIPANTES.join('\n')}`);
}