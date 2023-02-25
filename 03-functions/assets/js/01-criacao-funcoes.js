console.log('--> CRIANDO FUNÇÕES <--');

console.log('01 - Criação de uma FUNÇÃO "comum":');

function dobro (num) {
    return num * 2;
}

console.log('Resultado: ', dobro(25));

console.log('');
//
//
console.log('02 - Criação de uma FUNÇÃO recursiva:');

function fatorial (num) {
    if (num < 1) return 1;
    console.log(num);
    return num * fatorial (num-1);
}

console.log('Resultado: ', fatorial(3));

console.log('');
//
//
console.log('03 - Criação de uma FUNÇÃO atribuída a uma variável:');

var triple = function(x) { return x * 3; }

console.log('Resultado: ', triple(3));

console.log('');
//
//
console.log('04 - Criação de uma FUNÇÃO e chamando-a imediatamente:');

var cubo = (function(x) { return x ** 3; } (3))

console.log('Resultado: ', cubo);

console.log('');
//
//
console.log('05 - Criação de FUNÇÕES aninhadas:');

function hypotenuse (a, b) {
    function square(x) {
        return x * x;
    }

    return Math.sqrt(square(a) + square(b));
}

console.log('Resultado: ', hypotenuse(2, 3));

console.log('');