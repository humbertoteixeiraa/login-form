console.log('');
console.log('OBJETOS');
//
//
console.log('');
console.log('CRIAÇÃO DE OBJETOS LITERAIS:');

var book = {
    author: "David Flanagan",
    title: "JavasCript: O guia definitivo"
};

console.log (book.author);
console.log (book.title);
//
//
console.log('');
console.log('OBJETOS CRIADOS COM NEW:');

var person = new Object();
//
//
console.log('');
console.log('OBJETOS CRIADOS COM "Object.create()":');

var student = Object.create({name: "Humberto", age: "32"})
console.log(student.name);
console.log(student.age);