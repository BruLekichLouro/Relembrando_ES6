/*
function fin(){
   function logo(value){
       console.log(value);
   }
  logo('Hoisting de função'); 
}
fin();
*/
//Com o hoisting é possível chamar a função antes de declarar:
function fin(){
    logo('Hoisting de função'); 

   function logo(value){
       console.log(value);
   }
  
}
fin();

