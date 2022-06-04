/*const user = {
    name: 'Bruna',
    lastName: 'Lekich Louro'

};
function getUserWithFullName(user) {
    return {
        ...user, //spread operator: para cada nova propriedade que eu receber, vou colocar dentro do objeto
        fullName:`${user.name} ${user.lastName}` //string literal = user.name+ " "+user.lastName **USAR CRASE
    }
}
const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);//aqui ele retorna um novo objeto, com mesmo atributos + o fullName */

const students = [ // este jeito evita alterações indesejadas (side effects) nos atributos.
    {
        name: "Grace",
        nota:7 
    },
    {
        name: "Joana",
        nota:4
    },
    {
        name: "João",
        nota:10 
    }
];
function getApprovedStudents(studentsLists){
    return studentsLists.filter(student => student.nota >=7);
}
console.log("Alunos aprovados:");
console.log(getApprovedStudents(students));
console.log('\n Lista de alunos:');
console.log(students);

