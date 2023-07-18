'use strict';

const images = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqnC6xg7DbaQnuF6J6S460pSKrQXUFcfkBEt89VqS7A&s', description: '高校2年' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34uxtNhXY486ZmZqrtUs5lc4UQVpCqlej3hl0loG4&s', description: '大学4年' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomYocxICnBlUzrggx7aU1fBvGgUET2YCEFJFzpPzuIw&s', description: '高校2年集合' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Dm2_B8fK_bIE6IGXzi0hCxxWxDNkEjcImfYkNart&s', description: '大学3年' },
    { src: 'https://www.shikoku-np.co.jp/feature/baseball/2010/summer/local_tournament/game/photo/s20100719_2.jpg', description: '高校2年北村' }
];

//メイン画像の初期値を設定
let image = document.createElement('img');
image.setAttribute('src', images[0].src);
image.setAttribute('alt', images[0].description);

//説明の初期値を設定
let description = document.createElement('p');
description.textContent = image.alt;

//作成した要素を表示
let mainimage = document.getElementById('main_image');
mainimage.insertBefore(image, null);
mainimage.insertBefore(description, null);

//サムネイル画像を表示
let thumbnails = document.getElementById('thumbnails');
for (let i = 0; i < images.length; i++) {
    let thumbnailImage = document.createElement('img');
    thumbnailImage.setAttribute('src', images[i].src);
    thumbnailImage.setAttribute('alt', images[i].description);
    thumbnails.insertBefore(thumbnailImage, null);
}

//クリックした画像をメイン画像に設定する
thumbnails.addEventListener('click', function (e) {
    if (e.target.src) {
        //console.log(e.target);
        image.src = e.target.src;
        description.textContent = e.target.alt;
    }
}, false);

