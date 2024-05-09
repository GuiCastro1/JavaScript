let jogosRealizados = 0; 
let tentativasRestantes = 5; 

while(true){
    alert("JOGO DE ADIVINHAÇÃO");
    alert("Você tem 5 Tentativas ")
    alert("BOA SORTE !!!")
    
    let ADIVINHAÇÃO = Number(prompt("Adivinhe o número"));
    
    let numero = 7;
    
    if(ADIVINHAÇÃO == numero){
        alert("Você acertou!!!");
    }else{
        alert("Você errou");
        tentativasRestantes--; 
        if (tentativasRestantes > 0) {
            alert("Você tem " + tentativasRestantes + " tentativas restantes.");
        } else {
            alert("Você esgotou suas tentativas. Tente novamente mais tarde.");
            break; 
        }
    }
    
    jogosRealizados++; 
    
    let continuar = prompt("Deseja jogar novamente? (sim/não)");
    if (continuar.toLowerCase()!== "sim" || jogosRealizados >= 5) {
        break;
    }
}


