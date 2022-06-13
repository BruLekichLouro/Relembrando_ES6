(() => { 
this.name = 'Arrow function';

const getNameArrowFun = () => this.name;

function getName() {
    return this.name;//qdo não é arrow function, o this sempre se refere ao contexto em que foi executado
}
 const user3 = {
     nome: 'Nome do objeto em execução',
     getNameArrowFun, //por mais que chame o this dentro do objeto, ele sempre vai referenciar o primeiro
     getName
 }
 //Se a função for executada dentro do contexto do objeto, o this vai refenciar o objeto
 console.log(user3.getNameArrowFun());//qdo executo ele recebe o valor da linha 2
 console.log(user3.getName());//qdo executo recebe o valor da linha 9, this.name
}) ();