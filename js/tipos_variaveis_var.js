var nameVar ='Guilherme';
 let nameLet = "Guilherme";
const nameConst = "Guilherme";

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);

var teste = "Exemplo aqui";//escopo global pois var não entende escopo de bloco, só aceita escopo de função ou global
(() =>{
    var teste = 'exemplo';
    console.log(`valor antes do if já é a var decalarada aqui dentro da function"${teste}"`);
    if(true){
        var teste="Exemplo";//var será içada para o escopo(hoisting) pois var não entende escopo de bloco
        console.log(`valor dentro do if "${teste}"`);
    }
console.log(`Valor após a execução do if "${teste}"`);
})();

