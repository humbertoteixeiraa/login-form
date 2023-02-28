console.log('--> PROPRIEDADES DE FUNÇÃO, MÉTODOS E CONSTRUTORA <--');

console.log('01 - PROPRIEADADE "length":');

//Função
function check (args) {
    var actual = args.length;
    var expected = args.callee.length;

    if (actual !== expected)
        throw Error ("Expected " + expected + " args; got " + actual);

}

function f (x, y, z) {
    check(arguments) ;
    return x+y+z;
}

console.log('Resultado: ', f(3, 4, 7));



console.log('TESTE: ', f.toString);
/*
*/





console.log('');
console.log('-----------------------------------------------------------------------------');
console.log('');