let aluno = [
    {
        Nome: "Lucas",
        Idade: 18,
        RA: 785475987547859,
        Matriculado: true
    },
    {
        Nome: "Guillerme",
        Idade: 185,
        RA: 7857547859,
        Matriculado: true
    },
    {
        Nome: "Lucas",
        Idade: 1877,
        RA: 78547859,
        Matriculado: false
    }
] 

let nomeAlunos = aluno.map((nome)=>{
    return nome.Nome
})
let RAAlunos = aluno.map((RA)=>{
    return RA.RA
})
let idade = aluno.map((ID)=>{
    return ID.Idade
})
let MAT = aluno.map((LL)=>{
    return LL.Matriculado
})
console.log(nomeAlunos);
console.log("___________________________________");
console.log(RAAlunos);
console.log("___________________________________");
console.log(idade);
console.log("___________________________________");
console.log(MAT);

let nomesMAIOR = nomeAlunos.map((nomes)=>{
    return nomes.toLocaleUpperCase()
})
console.log(nomesMAIOR);