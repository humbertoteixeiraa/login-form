console.log('OPERADOR IGUALDADE');
console.log(1 == '1');

console.log('');
console.log('OPERADOR IGUALDADE RESTRITA');
console.log(1 === '1');

console.log('');
console.log('COMPARAÇÃO');
console.log(1 >= '1');

console.log('');
console.log('OPERADOR "IN"');
var number = [0, 5, 7, 9]
console.log(4 in number);

console.log('');
console.log('OPERADOR "INSTANCEOF"');
var number = [0, 5, 7, 9]
console.log(number instanceof Array);
console.log(number instanceof String);

console.log('');
console.log('OPERADOR "&&"');
var a = 0;
var b = 0;
console.log(a == 0 && b == 0);
console.log(a == 0 && b == 1);

console.log('');
console.log('OPERADOR "||"');
var a = 0;
var b = 0;
console.log(a == 0 || b == 1);
console.log(a == 1 || b == 1);

console.log('');
console.log('OPERADOR "!"');
var a = 0;
var b = 0;
console.log(!a == 0 || b == 1);
console.log(!(a == 1 || b == 1));

console.log('');
console.log('OPERADOR/FUNÇÃO "eval()"');
var a = 1+100;
console.log(eval(a));
console.log(eval(a=201));

console.log('');
console.log('OPERADOR "?:"');
console.log(3>2 ? 1+2 : 2-1);

console.log('');
console.log('OPERADOR "TYPEOF"');
var a = 1;
var b = true;
var c = null;
var d = "Teste de string";
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

console.log('');
console.log('OPERADOR "DELETE"');
var a = ['z', 'x', 'w', 'k'];
console.log(a);
console.log(' -> Usando a propriedade DELETE:');
delete a[0];
console.log(a);