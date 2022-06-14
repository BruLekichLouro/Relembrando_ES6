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
const mens = persons.filter(person => person.gender === gender.Man); //filter é condicional
console.log('\n Nova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JS'; //permite que retorne um novo array de cursos e até adicione propriedade
    return person; 
});
console.log('\n Pessoas com a adição do course:', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => { //age é a variável que vou retornar
    age += person.age; // soma a idade de cada pessoa na variável e retorna um number
    return age; //retorna um number
}, 0); //valor inicial da minha propriedade, age = 0;
//Acima a gente vê que o primeiro parametro que recebe é uma função e segundo é o valor da propriedade age
console.log('\n Soma das idades das pessoas', totalAge);

//Existem outras funções que retornam arrays, podemos encadear a execução delas
//Juntando operções:
const totalEvenAges = persons
                            .filter(person => person.age % 2 ===0) //filtrando
                            .reduce((age, person) => {  //transformando em numero
                                age+=person.age;
                                return age;
                            }, 0);

    console.log('\n Soma das idades das idades das pessoas com idade par:', totalEvenAges);

