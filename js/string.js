const textSize = "verificar".length;
console.log(`Quantidade de letras: "${textSize}"`);

//retorna um array quebrando a string por um delimitador
const textoSeparado = 'Texto'.split('x');
console.log('\n array com as posiççoes separadas pelo delimitador:', textoSeparado);

//Busca um valor e substitui por outro
const textoSubstituido = 'texto'.replace('Text', 'olá');
console.log('\n substituí por este valor', textoSubstituido );

//retorna a fatia de um valor
const lastChar = 'texto'.slice(-1);
console.log('\n última letra de uma string: ', lastChar);

const allwithoutlastChar = 'texto'.slice(0, -1);
console.log('\n valor da string da primeira letra menos a última: ', allwithoutlastChar);

const secondToEnd = 'texto'.slice(0, -1);
console.log('\n valor da string da segunda letra até a última: ', secondToEnd);

//retorna N caracteres a partir de uma posição:
const twoCharsBeforeFirstPos = 'texto'.substr(0, 2);
console.log('\n as duas primeiras letras são:', twoCharsBeforeFirstPos);

