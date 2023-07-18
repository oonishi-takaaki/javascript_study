'use strict';

const add = document.getElementById("add");
const reset = document.getElementById('reset');
let i = 0;

function updateNumber(i) {
    const counter = document.getElementById('counter')
    counter.textContent = i;
}

function countup() {
    i++;
    // const counter = document.getElementById('counter')
    // counter.textContent = i;
    updateNumber(i);
}

function resetNumber() {
    i = 0;
    // const counter = document.getElementById('counter')
    // counter.textContent = i;
    updateNumber(i);
}

add.addEventListener('click', countup, false);
reset.addEventListener('click', resetNumber, false);

