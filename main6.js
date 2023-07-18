'use strict';


document.addEventListener('DOMContentLoaded', function () {
    alert('DOMCountentLoaded!');
}, false);

window.onload = function () {
    const nowLoading = document.getElementById('nowLoading');
    nowLoading.style.display = 'none'
}