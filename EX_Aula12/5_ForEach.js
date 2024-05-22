// 5 - Dado o array students = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 25 },
//     { name: 'Mark', age: 22 }
//     ],
//     Utilize o método map para criar um novo array contendo apenas os nomes
//     dos alunos

let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
]

students.forEach(nome => {


    console.log(`nomes ${nome.name}`);
})

