// let NOMEDOSPARTICIPANTES = []
// let CONFIRMAUSUARIO = 3
// let AUX2 = 0

// NOMEDOSPARTICIPANTES= prompt("Digite o nome dos participantes")

// NOMEDOSPARTICIPANTES =[]

// alert(`${NOMEDOSPARTICIPANTES}`)

let NOMEDOSPARTICIPANTES = [];
let CONFIRMAUSUARIO = "sim";

while (CONFIRMAUSUARIO.toLowerCase() === "sim") {
    let novoNome = prompt("Digite o nome dos participantes");
    if (novoNome) { // Verifica se o usuário digitou algo antes de adicionar ao array
        NOMEDOSPARTICIPANTES.push(novoNome);
    }
    CONFIRMAUSUARIO = prompt("Deseja adicionar mais participantes? Digite 'sim' ou 'não'");
}

alert(`Participantes cadastrados:\n${NOMEDOSPARTICIPANTES.join('\n')}`);
