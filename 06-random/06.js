document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.msg1 > img'); // Select all matching images
    const msg = document.getElementById('msg');
    const bts = document.querySelectorAll('button');

    for (let bt of bts) {
        bt.addEventListener('click', () => {

            let comN = Math.floor(Math.random() * 6) + 1;
            imgs[0].setAttribute('src', `../html기초/img/${comN}.png`);
            imgs[0].setAttribute('alt', `${comN}.png`);

            let userN = parseInt(bt.textContent.charAt(0));
            imgs[1].setAttribute('src', `../html기초/img/${userN}.png`);
            imgs[1].setAttribute('alt', `${userN}.png`);


            if (comN === userN) {
                msg.textContent = '같음'; 
            } else {
                msg.textContent = '틀림';
            }
        });
    }
});

//let userN = parseInt(bt.textContent.charAt(0));
//숫자 가져오는 것이 charAt(0) -------------------- <button class="btn1" id="bt1">1 선택</button>
//<button class="btn1" id="bt1">선택 1</button> -------- slise (-1);
