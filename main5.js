'use strict';
//イベントハンドラ
function handleChange() {
    const checkAll = document.getElementById('checkAll');
    const checkBoxs = document.getElementsByName('language');

    for (let i = 0; i < checkBoxs.length; i++) {
        checkBoxs[i].checked = checkAll.checked;
        //console.log(i);
    }
    //console.log(checkBoxs.length);
}
const ca = document.getElementById('checkAll');
ca.addEventListener('change', handleChange, false);