let jogos =["Minecraft","Clash Royale","Free Fire","Fortinate","PBG"]

jogos.forEach((jogos)=>{
console.log(`${jogos}`);

})
console.log(`________________________________`);
jogos.forEach((jogos,index)=>{
console.log(`${jogos}`);
console.log(`${index}`);

})
console.log(`________________________________`);


jogos.forEach((valor, index, array)=>{
console.log(`indece ${index}       valor: ${valor}       items${array}`);

})


// Passo 1: Criar o array com os nomes dos jogos
let jogos1 = ["Jogo 1", "Jogo 2", "Jogo 3", "Jogo 4", "Jogo 5"];

// Passo 2: Utilizar o método forEach para percorrer o array
jogos1.forEach(function(valor, indice, array) {
    // Passo 3: Mostrar os valores na tela
    console.log("Índice:", indice, "Valor:", valor, "items", array);
});
