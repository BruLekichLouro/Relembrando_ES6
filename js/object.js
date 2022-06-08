let usuario = {
    name:"Daniela"
};

//alterando a propriedade de um objeto
console.log(usuario);
usuario.name = 'um nome';
usuario['name'] = 'outro nome';//consigo acessar com esta estrutura de array
console.log(usuario);

const prop = 'name';//parecido com o que fez em cima
usuario[prop] = 'outro nome2';
console.log(usuario);
usuario[name] = 'outro nome3';
console.log(usuario);

//Criando uma propriedade:
usuario.lastName = 'Lekich Louro';
console.log(usuario);

//deletando uma propriedade
delete usuario.name;
console.log(usuario);
