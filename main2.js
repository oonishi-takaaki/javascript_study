'use strict';

let setRedClassButton = document.getElementById('setRedClassButton');
setRedClassButton.addEventListener('click', function (e) {
    let showText = document.getElementById('showText');
    showText.setAttribute('class', 'red');
}, false);

let setBlueClassButton = document.getElementById('setBlueClassButton');
setBlueClassButton.addEventListener('click', function (e) {
    let showText = document.getElementById('showText');
    showText.setAttribute('class', 'blue');
}, false);

let removeClassButton = document.getElementById('removeClassButton');
removeClassButton.addEventListener('click', function (e) {
    let showText = document.getElementById('showText');
    showText.removeAttribute('class');
}, false);