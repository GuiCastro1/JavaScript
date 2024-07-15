// Função para incrementar o contador e atualizar a tela
function incrementarContador() {
    let contadorElemento = document.getElementById('contadorExibicao');
    let contadorAtual = parseInt(contadorElemento.textContent.split(': ')[1]);
    contadorAtual++;
    contadorElemento.textContent = 'contador de click: ' + contadorAtual;
}
// function incrementarContador() {
//     let contadorElemento = document.getElementById('contadorExibicao');
//     let contadorAtual = parseInt(contadorElemento.textContent.split(': ')[1]);
//     if (contadorAtual % 50 === 0) {
//         contadorAtual *= 50; // Multiplica por 50 se for múltiplo de 50
//     }
//     contadorAtual++;
//     contadorElemento.textContent = 'contador de click: ' + contadorAtual;
// }
