// 1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar
// um novo array contendo o dobro de cada elemento.

let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


let dobro = numeros1.map((numero => numero * 2 ))


console.log(dobro);


let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let dobro2 = numeros2.map((numero) => {
    return numero * 2;
});

console.log(dobro2);
