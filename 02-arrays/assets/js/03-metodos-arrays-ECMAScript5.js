console.log('--> MÉTODOS DE ARRAY <--');

console.log('01 - forEach()');

var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Antes: ', array1);

//Função
function verificaPares(elemento){
    if (elemento % 2 == 0) 
    console.log(elemento)
}

console.log('Depois: mostrando os números pares com a função verificaPares() dentro do método forEach()');
console.log(array1.forEach(verificaPares));


console.log('');


console.log('02 - map()');

var array2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log('Antes: ', array2);

//Função
function verificaImpares(elemento){
    if (elemento % 2 != 0)
    return elemento
}

console.log('Depois: mostrando os números ímpares com a função verificaImpares() dentro do método map()');
console.log(array2.map(verificaImpares));

console.log('');


console.log('03 - filter()');

var array3 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log('Antes: ', array3);

//Função
function verificaImpares(elemento){
    if (elemento % 2 != 0)
    return elemento
}

console.log('Depois: mostrando os números ímpares com a função verificaImpares() dentro do método filter()');
console.log(array3.filter(verificaImpares));

console.log('');


console.log('04 - every()');

var array4 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log('Antes: ', array4);

//Função
function verificaImpares(elemento){
    if (elemento % 2 != 0)
    return elemento
}
function menorQueVinte(elemento){
    if (elemento < 20)
    return elemento
}

console.log('Depois: mostrando o resultado com a função verificaImpares() dentro do método every()');
console.log(array4.every(verificaImpares));
console.log('Depois: mostrando o resultado com a função menorQueVinte() dentro do método every()');
console.log(array4.every(menorQueVinte));

console.log('');


console.log('05 - some()');

var array5 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log('Antes: ', array5);

//Função
function verificaImpares(elemento){
    if (elemento % 2 != 0)
    return elemento
}
function menorQueVinte(elemento){
    if (elemento < 20)
    return elemento
}

console.log('Depois: mostrando o resultado com a função verificaImpares() dentro do método some()');
console.log(array5.some(verificaImpares));
console.log('Depois: mostrando o resultado com a função menorQueVinte() dentro do método some()');
console.log(array5.some(menorQueVinte));

console.log('');

console.log('06 - indexOf() e lastIndexOf()');

var array6 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 18, 18, 19];

console.log('Antes: ', array6);

console.log('Depois: mostrando a primeira posição do elemento com o método indexOf()');
console.log(array6.indexOf(18));
console.log('Depois: mostrando a última posição do elemento com o método lastIndexOf()');
console.log(array6.lastIndexOf(18));

console.log('');


