// Dado um array de números, let números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] crie um
// novo array apenas com os números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let pares = []

for (let i = 0; i < numeros.length; i++) {

    if(numeros[i] % 2 === 0 ){
        pares.push(numeros[i])
    }
}
console.log(pares)



let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let pares1 = [];
let uno = 0;

while (uno < numeros1.length) {
    if (numeros1[uno] % 2 === 0) {
        pares1.push(numeros1[uno]);
    }
    uno++; 
}



let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


let pares2 = numeros2.filter(numero => numero % 2 === 0);


console.log(pares2);


console.log(pares1);
