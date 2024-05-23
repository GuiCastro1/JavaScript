// let contador = document.getElementsByClassName("issoÉumcontador");


// function clique(){
//     let Clique = 0
// for(Clique % 50 === 0 ){

// }
// }

// Seleciona o botão pelo seu ID
const botaoClicavel = document.getElementById('botaoClicavel');

// Inicializa o contador
let contador = 0;

// Função para incrementar o contador e atualizar a tela
function incrementarContador() {
    contador++;
    // Atualiza o texto na página com o novo valor do contador
    document.getElementById('exibicaoContador').textContent = 'Contador: ' + contador;
}

// Adiciona um ouvinte de evento de clique ao botão
botaoClicavel.addEventListener('click', incrementarContador);
