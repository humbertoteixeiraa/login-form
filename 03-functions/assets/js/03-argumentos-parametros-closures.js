console.log('--> ARGUMENTOS E PARÂMETROS DE FUNÇÃO <--');

console.log('01 - LISTA DE ARGUMENTOS DE COMPRIMENTO VARIÁVEL (OBJETO "arguments"):');

//Função
function soma (x, y) {
    console.log('Número de argumentos: ', arguments.length)
    return x + y
}

console.log('Resultado: ', soma(10,5));
/*
*/
console.log('02 - CLOSURES:');

var scope = 'Escopo Global';

//Função
function checkscope () {
    var scope = 'Escopo Local';
    function f() {
        return scope;
    }
    return f;
}

console.log('Resultado: ', checkscope());
console.log('Resultado: ', checkscope()());
/*
*/
console.log('');
console.log('-----------------------------------------------------------------------------');
console.log('');