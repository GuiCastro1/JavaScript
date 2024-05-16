//se tiver retur e obriogatoria retornar um valor idependente do tipo que ele é (string, int, float, bolean)

function mensagem() {
console.log("hello, World !!!");
}

mensagem()

function mensagem1() {
let men  = "HEllO, WORLD !!!"
return men
}

let t = mensagem1()
console.log(t.toLowerCase());