console.log('--> CHAMANDO FUNÇÕES <--');

console.log('01 - Chamada de FUNÇÃO:');

//Função
function fatorial (num) {
    if (num <= 1) return 1;
    return num * fatorial (num-1);
}

//Expressão de invocação
var somaFatorial = fatorial(3) + fatorial(3);

console.log('Resultado: ', somaFatorial);

console.log('');
/*
*/
console.log('02 - Chamada de MÉTODO:');

//OBJETO LITERAL
var calculator = {
    num1: 10,
    num2: 20,
    add: function() {
        this.result = this.num1 + this.num2;
    }
};

calculator.add(); //Chamada para o MÉTODO  calculae 10 + 20

console.log('Resultado: ', calculator.result);

console.log('')
/*
*/
console.log('02 - Chamada de CONSTRUTORA:');

var novoObjeto = new Object({a:1, b:2}); //Inserindo proprieades já na criação
novoObjeto.c = 3; //Inserindo propriedades depois

console.log('Resultado: ', novoObjeto);

console.log('')
/*
*/
console.log('03 - Chamada indireta:');



console.log('Resultado: ', );
/*
*/
console.log('');
console.log('-----------------------------------------------------------------------------');
console.log('');


function soma (x, y) {
    console.log('Número de argumentos: ', arguments.length)
    return x + y
}


console.log('Resultado: ', soma(10,5));