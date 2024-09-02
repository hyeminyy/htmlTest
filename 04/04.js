//dom 생성된 후 이벤트 감지
// document.addEventListener("DOMContentLoaded", () => {
//     //button click event
//     const btn = document.getElementById('bt1');
//     btn.addEventListener('click', () => {
//         alert('Button clicked!');
//     });
// })


document.addEventListener("DOMContentLoaded", () => {
    //button click event
    const bt1 = document.querySelector('#bt1');
    const bt2 = document.getElementById('bt2');
    const bt3 = document.querySelector('#bt3');
    const msg = document.getElementById('msg');

    //버튼에 이벤트 달기
    bt1.addEventListener('click', () => {
        alert(bt1.innerHTML); //html 버튼의 content를 가져온다.
    });
    bt2.addEventListener('click', () => {
        alert('Button 2 click!!!');
    });
    bt3.addEventListener('click', () => {
        //msg.innerHTML = '<h2>random num create
        let n = (Math.floor(Math.random() * 6)) + 1;
        console.log(n);
        //msg.innerHTML = `<h2>${bt3.textContent}</h2>`; //textContent : id가 msg인 span element의 content를 가져옴
        msg.innerHTML = `<h2>${bt3.textContent } :<span>${n}</span></h2>`; //Math.random() : `
    });
})