'use strict';
console.log('Hallo World');
console.log('Hello! I\'m Takaaki Onishi');
console.log('\\ \t AAA \n BBB');

let color = 'Red';
console.log(color);

color = 'Green';
console.log(color);

const PI = 3.14;
console.log(PI);

console.log(typeof PI);

let x = 3;
let y = 2;

let ans = Math.pow(x, y);
console.log(ans);

let weight = 86.7;
let hight = 1.78;

let BMI = weight / Math.pow(hight, 2);
console.log(BMI);

if (BMI >= 25) {
    console.log('肥満')
} else if (BMI >= 18.5) {
    console.log('普通')
} else {
    console.log('痩せ')
}

let omikuji = Math.floor(Math.random() * 5 + 1);

switch (omikuji) {
    case 1:
        console.log('大吉');
        break;
    case 2:
        console.log('中吉');
        break;
    case 3:
        console.log('小吉');
        break;
    case 4:
        console.log('吉');
        break;
    case 5:
        console.log('凶');
        break;
    default:
        console.log('想定外の数値です');
}

let age = Math.floor(Math.random() * 30 + 1);;
let beverage = (age >= 20) ? 'ビール' : 'コーラ';
console.log(beverage);
console.log(age);

function rectangle(hight, width) {
    return hight * width;
}

console.log(rectangle(3, 5));

const getRectangle = function (hight, width) {
    return hight * width;
}

console.log(getRectangle(5, 10));

const getRectangle2
    = new Function('hight', 'width', 'return hight * width');

console.log(getRectangle2(10, 10));

const getRectangle3 = (hight, width) => {
    return hight * width
}
console.log(getRectangle2(20, 10));

function getKaikei(tanka, kosuu) {
    return tanka * kosuu;
}

console.log(getKaikei(100, 20));