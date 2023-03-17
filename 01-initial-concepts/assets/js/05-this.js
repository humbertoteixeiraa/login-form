console.log('');
console.log(' --> "THIS" <-- ');
//
//

/*
CONCEITO: A palavra-chave "this" é usada para se referir a um objeto a que a função (onde this é usado) está vinculada. Esta palavra-chave não se refere apenas ao objeto, mas também contém o valor do objeto. Assim como o pronome, isso pode ser pensado como um atalho (ou um substituto razoavelmente não-ambíguo) para se referir ao objeto no contexto (o “objeto antecedente”).
*/

console.log('');

console.log(this);
/*
No escopo global, quando o código está sendo executado no navegador, todas as variáveis globais e funções são definidas no objeto window. Portanto, quando se usa "this" em uma função global, ele se refere a (e tem o valor de) o objeto window global
*/

console.log('');

var nome = 'João;'

let pessoa = {
    nome: 'Humberto',
    idade: '32',
    falar: function() {
        console.log('Olá, tudo bem?');
    },
    dizerNome: function() {
        console.log('O meu nome é ' + nome);
        //Sem o "this", pega a variável "nome"  com escopo global.

        console.log('O meu nome é ' + this.nome);
        //Com o "this", pega a variável "nome"  com escopo local.
    }
}


pessoa.dizerNome();