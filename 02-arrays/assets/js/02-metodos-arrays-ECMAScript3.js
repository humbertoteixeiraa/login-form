console.log('--> MÉTODOS DE ARRAY <--');
console.log('01 - join()');

var array1 = ['a', 'b', 1, 2];

console.log('Antes: ', array1);
console.log('Depois: ', array1.join());


console.log('');


console.log('02 - reverse()');

var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Antes: ', array2);
console.log('Depois: ', array2.reverse());

console.log('');


console.log('03 - sort()');

var array3 = ['banana', 'cajú', 'melão', 'tamarindo', 'abacate', 'limão', 'maçã', 'uva', 'pitomba', 'siriguela'];

console.log('Antes: ', array3);
console.log('Depois: ', array3.sort());

console.log('');



console.log('04 - concat()');

var array4 = ['a', 'b', 'c', 'd', 'e'];

console.log('Antes: ', array4);
console.log('Depois: ', array4.concat(1, 2, 3, 4, 5));

console.log('');



console.log('05 - slice()');

var array5 = ['avião', 'barco', 'carro', 'dirigível', 'elevador'];

console.log('Antes: ', array5);
console.log('Depois: ', array5.slice(0, 3));

console.log('');



console.log('06 - splice()');
console.log('A) Exclusão');
var array6 = [100, 200, 300, 400, 500, 600, 700, 800, 900];

console.log('Antes (array completo): ', array6);
console.log('Depois (array c/ slice()): ', array6.splice(3));
console.log('Depois (restante do array inicial): ', array6);

console.log('');
console.log('B) Inserção');
var array7 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log('Antes (array completo): ', array7);
console.log('Depois (array c/ splice()): ', array7.splice(1, 2, 'vinte', 'trinta'));
console.log('Depois (nova forma do array inicial): ', array7);

console.log('');



console.log('07 - push() e pop()');

var array8 = [11, 22, 33, 44, 55];

console.log('Antes: ', array8);
console.log('Depois do push(): ', array5.push(66, 77)); console.log('     ↪️ novo tamanho do array');
console.log('Depois do pop(): ', array5.pop(66, 77)); console.log('     ↪️ ↪️elemento retirado do array');

console.log('');


console.log('08 - unshift() e shift()');

var array9 = ['a', 'b', 'c', 'd', 'e'];

console.log('Antes: ', array9);
console.log('Comprimento depois do unshift(): ', array9.unshift(1, 2, 3));
console.log('Elementos depois do unshift(): ', array9);
console.log('Elemento retirado com shift(): ', array9.shift(1));
console.log('Elementos depois do shift(): ', array9);

console.log('');


console.log('09 - toString() e toLocaleString()');

var array9 = [111, 222, 333, 444, 555];

console.log('Antes: ', array9);
console.log('Depois do toString: ', array9.toString());
console.log('Depois do toLocaleString: ', array9.toLocaleString());

console.log('');