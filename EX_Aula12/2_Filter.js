// 2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar
// um novo array contendo apenas os números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


let pares = numeros.filter(numero => numero % 2 === 0);


console.log(pares);


let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


let pares2 = numeros2.filter((numero )=>{
    return numero % 2 === 0
});


console.log(pares2);
