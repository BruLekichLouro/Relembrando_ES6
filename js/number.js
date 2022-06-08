const myNumber = 124032;

//transformar número para string:
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

//retorna número com um número de casas decimais:
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', typeof fixedTwoDecimals);

//transforma uma string em float
console.log('\n string parseada para float:', typeof parseInt('13.20'));

//typeof retorna o tipo da variável
//só existe o type number, não diferencia float de int
