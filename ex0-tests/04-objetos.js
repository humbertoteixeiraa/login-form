console.log('');
console.log(' --> OBJETOS <-- ');
//
//
console.log('');
console.log('01) CRIAÇÃO DE OBJETOS LITERAIS:');

var book = {
    author: "David Flanagan",
    title: "JavasCript: O guia definitivo"
};

console.log (book.author);
console.log (book.title);

console.log('');
console.log('02) OBJETOS CRIADOS COM "new":');

var person = new Object();
//
//
console.log('');
console.log('03) OBJETOS CRIADOS COM "Object.create()":');

var student = Object.create({name: "Humberto", age: "32"})
//
//
console.log('');
console.log('04) CONSULTANDO PROPRIEDADES DE UM OBJETO:');

var student = Object.create({name: 'Humberto', dateOfBirth: '27/12/1990', weight: '94'})
console.log(student);
console.log(student.name);
console.log(student.dateOfBirth);
console.log(student.weight);
//
//
console.log('');
console.log('05) CONFIGURANDO PROPRIEDADES DE UM OBJETO:');

//ALTERANDO O OBJETO "student", criado acima.
student.name = "João";
student.dateOfBirth = "10 mil anos atrás 🎵";
student.weight = "96 KG";

//EXIBINDO AS NOVAS PROPRIEDADES DO OBJETO "student".
console.log(student.name);
console.log(student.dateOfBirth);
console.log(student.weight);
//
//
console.log('');
console.log('06) EXCLUINDO PROPRIEDADES DE UM OBJETO:');

//CRIANDO UM OBJETO
var ground = {
    area: '10 de frente por 47 de fundo',
    adress: 'Povoado Guarani, Itapipoca-CE',
    owner: 'Humberto Teixeira'
};

//EXIBINDO AS PROPRIEDADES
console.log('Antes de deletar:', ground)

//EXCLUINDO AS PROPRIEDADES
delete ground.owner;

//EXIBINDOS AS PROPRIEDADES APÓS A EXCLUSÃO
console.log('Depois de deletar:', ground);
//
//
console.log('');
console.log('07) TESTANDO PROPRIEDADES DE UM OBJETO:');

//CRIANDO O OBJETO
var colors = {
    a: 'black', 
    b: 'yellow', 
    c: 'red'
}

console.log('Testando propriedades com o operador "in"')
console.log("a" in colors)

console.log('Testando propriedades com o método "hasOwnProperty()"')
console.log(colors.hasOwnProperty("a"))

console.log('Testando propriedades com o método "hasOwnProperty()"')
console.log(colors.propertyIsEnumerable("a"))
//
//
console.log('');
console.log('08) ENUMERANDO PROPRIEDADES DE UM OBJETO:');

//CRIANDO O OBJETO
var o = {x:1, y:2, z:3};

console.log(o.propertyIsEnumerable('toString'));

for(p in o)
    console.log(p);