'use strict';

function keyUp(e) {
    //console.log('keyUp');
    //console.log(inputText.value);
    console.log(inputText.value.length);
}

function updateNumber(i) {
    const counter = document.getElementById('characterCount')
    counter.textContent = 10 - i;
    if (counter.textContent < 0) {
        let characterCountWrap = document.getElementById('characterCountWrap');
        characterCountWrap.setAttribute('class', 'red');
    }

    if (counter.textContent >= 0) {
        let characterCountWrap = document.getElementById('characterCountWrap');
        characterCountWrap.setAttribute('class', '');
    }
}

function updateCharacterCount() {
    let str = inputText.value;
    str = str.replace(/\r?\n/g, '');
    let num = str.length;
    updateNumber(num);
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', updateCharacterCount, false);

