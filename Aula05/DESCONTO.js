let desconto = 0
let valor = prompt(`digito o cupom`.toLowerCase)
let valorDESCONTO = "d1"

switch (desconto) {
    case "d1":
        desconto=0.5
        break;

    default:
        alert("invalido")
        break;
}
let conta = valor-(valor * desconto)
alert(``)


























// alert("ESCOLHA SEU CUPOM\n5OFF\n10OFF\n15OFF\n20OFF\n25OFF")



// let Desconto = prompt("Coloque o Cupom Desejado")

// switch (Desconto.toUpperCase()) {
//     case "5OFF":
//         let valor = Number(prompt("Digite o valor do produto para ser descontado"))
//         let desconto = 5;

//         let valorf = valor - ((valor * desconto) / 100);

//         alert(`o valor com desconto é ${valorf}`)
//         break;

//     case "10OFF":
//        let valor1 = Number(prompt("Digite o valor do produto para ser descontado"))
//        let desconto1 = 10;

//        let valorf1 = valor1 - ((valor1 * desconto1) / 100);

//         alert(`o valor com desconto é ${valorf1}`)
//         break;
//     case "15OFF":
//         valor = Number(prompt("Digite o valor do produto para ser descontado"))
//         desconto = 15;

//         valorf = valor - ((valor * desconto) / 100);

//         alert(`o valor com desconto é ${valorf}`)
//         break;

//     case "20OFF":
//         valor = Number(prompt("Digite o valor do produto para ser descontado"))
//         desconto = 20;

//         valorf = valor - ((valor * desconto) / 100);

//         alert(`o valor com desconto é ${valorf}`)
//         break;

//     case "25OFF":
//         valor = Number(prompt("Digite o valor do produto para ser descontado"))
//         desconto = 25;

//         valorf = valor - ((valor * desconto) / 100);

//         alert(`o valor com desconto é ${valorf}`)
//         break;

//     default:
//         alert("Cupom invalido")
//         break;
// }
