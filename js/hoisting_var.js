/*function fn(){
    console.log(text);
    var text= "Exemplo";
    console.log(text);
}
*/
/*Sem o hoisting vc tomaria um 'Reference error,
 por usar uma var que ainda não foi declarada.
 Com o hoisting, ele iça a var para cima e no
 máx vc vai ter um 'undefined':*/
 function fn(){
     var text;//**IÇAMENTO**
     console.log(text);
     text = "Exemplo";
     console.log(text);
 }
 fn();