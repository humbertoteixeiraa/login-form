// --> CRIANDO ARRAYS <--
//01 - Criação de um ARRAY LITERAL
var data = ['Humberto', 32, '94 kg']
console.log(data);

console.log('');


//02 - Criação de um ARRAY com a função construtora 'new'
var data = new Array(3, 2, 1, 'testing', 1, 2, 3);
console.log(data);

console.log('');


// --> LEITURA E GRAVAÇÃO DE ELEMENTOS EM UM ARRAY <--
var letters = ['a', 'b', 'c', 'd', 'f']; //Gravação

console.log(letters[4]); //Leitura

letters[0] = 'aaaaaaaa'; //Gravação

console.log(letters); //Leitura

console.log('');


// --> LEITURA DO TAMANHO DE UM ARRAY <--
console.log(letters.length);

console.log('');


// --> ADICIONANDO ELEMENTOS EM UM ARRAY <--
//1ª forma:
test = [];
test[0] = 'zero';
test[2] = 'dois';
test[3] = 'três';

console.log(test);

console.log('');

//2ª forma: com o "método push()", o qual sempre insere um valor no final do ARRAY
test2 = [];
test2.push(0, 1);
test2.push('dois', 'três');

console.log(test2);

console.log('');


//3ª forma: com o "método unshift()", o qual sempre insere um valor no início do ARRAY
test2.unshift('- dois', '- um');

console.log(test2);

console.log('');


// --> EXCLUINDO ELEMENTOS DE UM ARRAY <--
console.log(test2);
delete test2[1]
delete test2[2]
delete test2[3]
console.log(test2);

console.log('');


// --> ITERAÇÃO EM ARRAYS <--
var number = 10;
var valuesArray = []; //ARRAY vazio

for (var i = 1; i <= 10; i++) {
    valuesArray.push(number);
    number++;
}

console.log(valuesArray);

console.log('');