//VAR é uma variável de escopo global.
var nome = "Humberto";

console.log(window.nome);


//LET é uma variável de escopo específico e que não pode ser redefinida.
let name = "Humberto";

console.log(window.name);


//CONST é uma variável de valor constante que não pode ter seu valor alterado.
const idade = 10;
idade = 11;

console.log(idade);