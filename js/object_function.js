const user2 = {
    name:'Dodo',
    lastName: 'Louro'
};

//Recupera as chaves do objeto:
console.log('Propriedades do objeto user:', Object.keys(user2));

//Recupera os valores das chaves dos objetos:
console.log('\n Valores das propriedades do objeto user: ', Object.values(user2));

//retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\n Lista de propriedades e valores: ', Object.entries(user2));

//Mergear ou concatenar propriedades de objetos
Object.assign(user2, {fullName: 'Bruna Lekich Louro'});//adiciona o fullName no user2

console.log('\n Adiciona a propriedade fullName no object user2', user2);//pensando em imutabilidade, não é recomendado
//a ideia não é alterar o array principal, a ideia é que a gente gere um novo, como abaixo:
console.log('\n Retorna um novo objeto margeando dois ou mais objetos', Object.assign({}, user2, {age:26}));
console.log(user2);//não alteramos a referencia do usuário, apenas criamos uma nova a partir dele

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
console.log('\n Variável newObj antes das alterações ', newObj);
Object.freeze(newObj);//congela tudo, não é possível criar, alterar ou remover
newObj.foo ='changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n Variável newObj após as alterações ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto (criar e deletar não)
const person = {name: 'Bruna'};
console.log('\n Variável person antes das alterações: ', person);
Object.seal(person);

person.name = 'Mudou aqui';
delete person.name;
person.age = 26;

console.log('\n Variável person após alterações: ', person);