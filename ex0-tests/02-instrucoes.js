console.log('INSTRUÇÕES CONDICIONAIS "IF e ELSE"');

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

var count = 0;

while (count <= 10) {
    console.log('The value of the count variable is:', count)
    count++;
}