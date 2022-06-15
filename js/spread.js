//Spread...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pes'];
//consegue iterar cada item do array ou objeto e passar o parametro
//var musica = ['cabeca', ...partes, 'e', 'pes']; = var musica = ['cabeca','ombro', 'joelhos', 'e', 'pes'];
//usado quando queremos concatenar arrays, sempre criamos um novo a partir dos que já existe(imutabilidade)


function fuN (x, y, z){ }
var args = [0, 1, 2]; //argumentos como array e x =0, y =1 e z=2
fuN(...args);