// 1° letra em maiuscula por convenção

class Celular {
    constructor(marca, modelo, ano) {

        // Em JavaScript, a palavra-chave this refere-se ao contexto no qual um trecho de código está sendo executado

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }
    desbloquearCelular(){
        
        return "Celular desbloqueado"
        // console.log("Celular desbloqueado");
    }
    
    ligação(){
        return"Ligação desbloqueada"
    }
}

class CelularGamer extends Celular{
    constructor(marca, modelo, ano, ram, cooler){
        super(marca, modelo, ano)
        this.ram = ram
        this.cooler = cooler
    }
    ligarGameBooster(){
        console.log("Otimmiza o jogo");
    }
}
let Gui = new CelularGamer ("RedMagic", "9-Pro", 20200,32, false)

class NovoCel extends CelularGamer{
    constructor(){
        
    }
}








// desbloquearCelular1(){
        
        
    //     console.log("Celular desbloqueado");
    // }

// new para referenciar Class 
// let Kimberly = new Celular ("Samsung","A32", 2022)
// console.log(typeof Kimberly);
// console.log(Kimberly);
// console.log(Kimberly.desbloquearCelular());
// console.log(Kimberly.ligação());
// Kimberly.desbloquearCelular1()
// console.log(Kimberly.marca);
// console.log(Kimberly.modelo);
// console.log(Kimberly.ano);

// let Mari = new Celular("Apple", "Iphone-11",2019)

// console.log("____________________________________________________________");
// console.log(Mari);
// console.log(Mari.marca);
// console.log(Mari.modelo);
// console.log(Mari.ano);

// let Davi = new Celular("Samsung", "M-13",2022)

// console.log("____________________________________________________________");
// console.log(Davi);
// console.log(Davi.marca);
// console.log(Davi.modelo);
// console.log(Davi.ano);


// let Thiago = new Celular("Motorola", "EDGE-40",2023)

// console.log("____________________________________________________________");
// console.log(Thiago);
// console.log(Thiago.marca);
// console.log(Thiago.modelo);
// console.log(Thiago.ano);




