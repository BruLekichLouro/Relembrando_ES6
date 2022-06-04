//function soma(a,b){

   // return a +b;
//}
//Currying: para cada parametro vou criar uma nova função:
function soma(a){
    return function(b){
        return a + b;
    }
}
const soma2 = soma(2);
console.log(soma2(2));
console.log(soma2(4));
console.log(soma2(5));