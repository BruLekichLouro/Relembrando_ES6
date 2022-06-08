const name= "Bruna";

//não podemos alterar o valor
//name ="Bruno";

const user = {
    name:"Bruna"
};

//mas se for um objeto podemos mudar suas propriedades
user.name="Outro nome";
//Não podemos fazer o objeto apontar para outro lugar
//user ={
  //  name: 'Bruna'
//};

const pessoas = ['Guilherme', 'Pedro', 'William'];
console.log(pessoas);

//podemos adicionar novos itens:
pessoas.push('João');
console.log(pessoas);

//podemos remover itens
pessoas.shift();
console.log(pessoas);

//podemos alterar diretamente:
pessoas[1] = 'James';
console.log(pessoas);
