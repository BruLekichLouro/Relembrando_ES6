//Array é um objeto que permite criarmos várias estruturas de dados, objeto, outros arrays, etc aí dentro
const users = ["Pedro", "João", "Bruna"];

const gender = {
    Man: Symbol('M'),
    Woman: Symbol('W')
}

const persons = [

    {
        name: "Guilherme",
        age: 28,
        gender: gender.Man
    },
    {
        name: 'João',
        age: 43,
        gender: gender.Man
    },
    {
        name: 'Jennifer',
        age: 20,
        gender: gender.Woman
    }  
];
//Retornar a quantidade de itens de um array:
console.log('Itens:', persons.length);

//Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array:
persons.forEach((person, index, arr) =>{
    console.log(`Nome: ${person.name} Index: ${index}`, arr);
}); //para cada item executa uma função

//Filtrar array
//Funções filter, map e reduce não alteram a referência dos objetos, retornam um novo a partir do original
const mens = persons.filter(person => person.gender === gender.Man);
console.log('\n Nova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JS';
    return person;
});
console.log('\n Pessoas com a adição do course:', personsWithCourse);

