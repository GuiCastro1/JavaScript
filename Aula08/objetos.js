//RA, Nome, Idade, Grade: Tecnologia, Administração, Comunicação
let aluno = {
    RA:20240102,
    Nome: "Ketleen",
    Idade:18,
    Grade:{
        Cursos:"Comunicação",
        CH:200,
        Matriculado:true,
    }

}
//Exercicio de criação de objetos

console.log(aluno);
console.log(aluno.RA);

let carroMercedes= {
        nome:"AMG",
        ano:"2006",
        modelo:"G63",
        chassi:100,
        motor:{
            tipo:"Eletrico",
            potencia:600,
        },
    Diponivel:true,
}
let carroBMW = {
    nome:"BMW",
    ano:"1933",
    modelo:"BMW303",
    chassi:200,
    motor:{
        tipo:"combustão",
        potencia:800,
    },
    Diponivel:false,
}
let carroIBM = {
    nome:"IBM",
    ano:"2024",
    modelo:"IBM202",
    chassi:300,
    motor:{
        tipo:"Flex",
        potencia:1000,
    },
    Diponivel:true,
}
console.log(carroMercedes);
console.log(`modelo:${carroMercedes.modelo}`);
console.log(`ano:${carroMercedes.ano}`);
console.log("____________");
console.log(carroBMW);
console.log(`modelo:${carroBMW.modelo}`);
console.log(`ano:${carroBMW.ano}`);
console.log("____________");
console.log(carroIBM);
console.log(`modelo:${carroIBM.modelo}`);
console.log(`ano:${carroIBM.ano}`);

//Atribuição via desistruturacão

let {RA, Nome, idade } = aluno
console.log(aluno.Nome,RA);
console.log(Nome.toUpperCase());