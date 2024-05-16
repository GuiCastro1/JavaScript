// Existem funções que recebem parametro retornam valor. E as que não recebem e não retornam valor. E as que não recebem parametro e não retorna valor

function FuncMedia (nota1, nota2, nota3, nota4){

let media

   media = (nota1+nota2+nota3+nota4) / 4

    return media
}

let nota1 = Number(prompt("Digite 1° nota"))
let nota2 = Number(prompt("Digite 2° nota"))
let nota3 = Number(prompt("Digite 3° nota"))
let nota4 = Number(prompt("Digite 4° nota"))



// console.log(`A media do aluno é : ${FuncMedia(10.5, 10.5, 10.4, 10.4)}`);