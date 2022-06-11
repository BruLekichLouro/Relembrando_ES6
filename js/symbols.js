const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('Symbol1 é igual a Symbol2: ', symbol1 ===symbol2);

//Previnir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const outroUser = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]:'outro nome',
    lastName: 'Cabrini da Silva'
};
console.log(outroUser);

//Symbols criam propriedades que não são enumerables
//for in mostra todas as propriedades que são enumerables, então não vai aparecer no caso do código de baixo
for (const key in outroUser){
    if(outroUser.hasOwnProperty(key)){
        console.log(`\n valor da chave ${key} : ${user[key]}`);
    }
}

//Tb não exibe no object keys nem no values
console.log('Propriedades :', Object.keys(user));
console.log('Propriedades :', Object.values(user));

//Exibir symbols de um objeto:
console.log('Symbols registrados no object user :', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto:
console.log('Todas as propriedades do objeto user:', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};

