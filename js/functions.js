//arrays e functions são objetos que permitem ser chamados
function fun(){
    return 'Code here';
}

//arrow function tem o return implícito, se é só uma expressao, não precisa abrir bloco
const arrowFun = () => 'Code here too';
const arrowFun2 = () => {
    //mais de uma expressão
    return 'Escreva o código aqui'
}
//Funções tb são obejtos
fun.prop = 'Posso criar propriedades';

console.log(fun());
console.log(arrowFun());
console.log(fun.prop);

//Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fun);

//Receber e retornar funções:
//controlFnExec é uma função que recebe como parametro outra função (fnParam) e recebe
//outra função que é o allowed
//const controlFnExec => fnParam => allowed =>{ //recebe o primeiro parametro, 
    //memoriza e recebe outro na hora de executar
  //  if(allowed) {
    //    fnParam();
    //}
//}
const handleFnExecution = controlFnExec(fn);//retorna esta outra funçao

handleFnExecution(true);//executará a função fn se estiver allowed (habilitada)
handleFnExecution(); //Não executará a função fn

//controlFnExec como função normal
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}

