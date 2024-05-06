// 5 Faça um programa conferir sua idade. Se a idade for menor do que 18 anos, exiba
// uma mensagem informando que o usuário é menor de idade. Se a idade for igual ou maior
// do que 18 anos e menor do que 60 anos, exiba uma mensagem informando que o usuário
// é adulto. Se a idade for igual ou maior do que 60 anos, exiba uma mensagem informando
// que o usuário é idoso. 


 let idadeUSUARIO = Number(prompt("Digite sua idade"))

 if(idadeUSUARIO < 18){
        alert("tu é di menor")
 } else if(idadeUSUARIO >= 18 && idadeUSUARIO <= 60){
    alert("tu é adulto");
} else if(idadeUSUARIO > 60){
    alert("tu é velho")
 }