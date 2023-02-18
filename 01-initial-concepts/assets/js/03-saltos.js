//
console.log('');
console.log('INSTRUÇÕES "TRY/CATH"');

try {
    var a = 10
    var b = 3;

    if (a != 0) {
        console.log('The result of the division is:', a/b);
    }
} catch (error) {
    console.log('Errooooooou!');
} finally {
    console.log('Fim do teste');
}