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
