console.log('INSTRUÇÕES CONDICIONAIS "IF...ELSE"');

var n = 4;

if (n == 1) {
    console.log('n = 1')
} 
else if (n == 2){
    console.log('n = 2')
} 
else if (n == 3){
    console.log('n = 3')
} 
else if (n == 4){
    console.log('n = 4')
} 
else if (n == 5){
    console.log('n = 5')
} 
else if (n > 5){
    console.log('n > 5')
}
//
console.log('');
console.log('INSTRUÇÃO CONDICIONAL "SWITCH"');

var mes = 'Maio'

switch (mes) {
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
        console.log('Verão!');
        break;

    case 'Abril':
    case 'Maio':
    case 'Junho':
        console.log('Outono!');
        break;

    case 'Julho':
    case 'Agosto':
    case 'Setembro':
        console.log('Inverno!');
        break;

    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
        console.log('Primavera!');

    default:
        console.log('Mês inválido!');

}
//
console.log('');
console.log('INSTRUÇÃO DE LAÇO "WHILE"');

var contador = 0;

while (contador < 10) {
    console.log('The value of the contador variable is:', contador)
    contador++;
}
//
console.log('');
console.log('INSTRUÇÃO DE LAÇO "DO...WHILE"');

var contador = 0;

 do {
    console.log('The value of the contador variable is:', contador)
    contador++;
 } while (contador < 10);
 //
console.log('');
console.log('INSTRUÇÃO DE LAÇO "FOR"');

var contador = 0;

for (contador = 0; contador < 10; contador++)
console.log('The value of the contador variable is:', contador);
 //
 console.log('');
 console.log('INSTRUÇÃO DE LAÇO "FOR...IN"');
 
 let fruta = {
    nome: "Banana",
    preco: 4.99,
    unidade: 1
 }

 for (let valor in fruta) {
    console.log(fruta[valor]);
 }
 