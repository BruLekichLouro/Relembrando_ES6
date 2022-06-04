(()=>{
    let teste = 'valor função';
    console.log(`valor dentro da função "${teste}"`);

    if(true){
        let teste = 'valor if';
        console.log(`valor dentro do if é o declarado aqui "${teste}"`);
    }
    console.log(`valor após execução do if "${teste}"`);
})();