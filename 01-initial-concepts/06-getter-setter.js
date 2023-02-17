console.log('');
console.log(' --> MÉTODOS "GETTER" E "SETTER" <-- ');
//
//
console.log('');

var animal = {
    tipo: 'cachorro',
    patas: '2',
    peso: '20kg',
    idade: '4 anos',

    get getDados() {
        return this.tipo + ', ' + this.patas  + ', ' + this.peso + ', ' + this.idade;
    },

    set setIdade(valor) {
        this.idade = valor
    }
}

console.log(animal.getDados);

animal.setIdade = '44';

console.log(animal.getDados);