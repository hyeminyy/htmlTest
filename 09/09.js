document.addEventListener('DOMContentLoaded', () => {
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');
  const  bt1 = document.querySelector('#bt1');
  const bt2 = document.querySelector('#bt2');


  //회문
  bt1.addEventListener('click', (e) => {
    e.preventDefault();
      let s1 = txt1.value.replaceAll(' ','');
      let s2 = '';
    //반복문 이용
      // for(let i = s1.length -1; i >= 0; i--){
      //   s2 += s1[i];
      // }
      //split
      s2 = s1.split('').reverse().join('');
      //s2 = s1.split('').reverse().join('');
      //split 가 배열이여서 reverse()를 사용할 수 있다.

      console.log('회문 : ', s1);
      console.log('회문 : ', s2);

      if(s1 === s2){
        txt2.value = '회문입니다.';
      }else{
        txt2.value = '회문이 아닙니다.';
      }
  });

  //숫자합계
  bt2.addEventListener('click', (e) => {
    e.preventDefault();
   // let n = txt1.value.split('').map(Number).filter(n => !isNaN(n));
    ///let sum = n.reduce((a,b) => a + b, 0);

    //console.log(n);

    //txt2.value = `${sum}`;

    let total = 0;
    let cnt =0;
    for(let c of txt1.value){
      if(c != ' ' && !isNaN(c)){
        total += parseInt(c);
        cnt++;
    }
  }
  if(total === 0){
    txt2.value = '숫자가 존재하지 안습니다.';
  }

  txt2.value = total;
  });
});