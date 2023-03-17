console.log('--> OBJECT WINDOW <--');

console.log('01 - METHODS setTimeout() and setIterval():');

function theAlert1() {
    alert('Testing setTimeout() ...')
}

function theAlert2() {
    alert('Testing setIterval() ...')
}

/*
window.setTimeout(theAlert1, 5000);
window.setInterval(theAlert2, 3000);
*/


console.log('');

//
//
console.log('02 - OBJECT navigator:');

console.log(' - Result: ', window.navigator.appName);
console.log(' - Result: ', window.navigator.appVersion);
console.log(' - Result: ', window.navigator.userAgent);
console.log(' - Result: ', window.navigator.platform);
console.log(' - Result: ', window.navigator.onLine);
console.log(' - Result: ', window.navigator.geolocation);
console.log(' - Result: ', window.navigator.javaEnabled);
console.log(' - Result: ', window.navigator.cookieEnabled);

console.log('');
//
//
console.log('03 - OBJECT screen:');

console.log(' - Result: ', window.screen.width);
console.log(' - Result: ', window.screen.height);
console.log(' - Result: ', window.screen.availWidth);
console.log(' - Result: ', window.screen.availHeight);
console.log(' - Result: ', window.screen.colorDepth);

console.log('');
//
//
console.log('03 - Dialog Boxes:');

/*console.log(' - Result: ', window.prompt('Whats is your name ?'))*/
/*window.alert('Testing ...')*/

console.log('');
//
//
console.log('04 - Windows and frames:');

//window.open('https://linktree-humberto.netlify.app/index.html');

function popup() {
    window.open('https://linktree-humberto.netlify.app/index.html', 'LinkTree', 'width=400, height=750, status=yes, resizable=yes');

}

//window.setTimeout(popup, 3000);

console.log('');
//
//

('------------------------------------------------------------');
console.log('');




