'use strict';
const sayHelloButton = document.getElementById('sayHelloButton');
// sayHelloButton.addEventListener('click', function (e) {
//     console.log('Hello');
//     console.log(e);
// }, false);

function sayHelloEventHandler() {
    console.log('hello');
    //console.log();
}

sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');

function removeEventHandler(e) {
    console.log('remove');
    sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
}

removeEventHandlerButton.addEventListener('click', removeEventHandler, false);