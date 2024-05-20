let email = [
        "email1 @gmail.com",
        "email2 @gmail.com",
        "email3 @gmail.com",
        "email4 @gmail.com",
]

// for (let index = 0; index <email.length; index++) {
//     console.log(`Email enviado para: ${email[index]}`);   
// }
// metodo que espera função de retorno. aplaca uma função para cada elemento do array

//valor do array
//index do array
//array completo

email.forEach((email)=>{
    console.log(`E-mail enviado para: ${email}`);
})
console.log(`________________________________`);

email.forEach((email, index,array )=>{
    console.log(`Você é o ${index} da lista`);
    console.log(`E-mail enviado para: ${email}`);
    console.log(`Elementos de  lista :${array}`);
    console.log(`________________________________`);
})