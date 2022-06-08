let user = {
    name:"Bruna"
};

//alterando a propriedade de um objeto
console.log(user);
user.name = 'um nome';
user['name'] = 'outro nome';//consigo acessar com esta estrutura de array
console.log(user);

const prop = 'name';//parecido com o que fez em cima
user[prop] = 'outro nome2';
console.log(user);

//Criando uma propriedade:
user.lastName = 'Lekich Louro';

//deletando uma propriedade
delete user.name;

