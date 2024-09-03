document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn1');
    const computerMsg = document.querySelectorAll('#msg')[0].querySelector('img');
    const userMsg = document.querySelectorAll('#msg')[1].querySelector('img');
    const result = document.querySelector('.result h1');

    // 주사위 굴리기 함수
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // 버튼 클릭 이벤트 핸들러
    function handleButtonClick(event) {
        // 사용자가 선택한 숫자
        const userRoll = parseInt(event.target.innerText.charAt(0), 10);
        
        // 컴퓨터의 주사위 굴리기
        const computerRoll = rollDice();

        // 결과 화면에 표시
        userMsg.src = `../html기초/img/${userRoll}.png`;
        computerMsg.src = `../html기초/img/${computerRoll}.png`;

        // 승패 결정
        if (userRoll > computerRoll) {
            result.innerText = "User Wins!";
        } else if (userRoll < computerRoll) {
            result.innerText = "Computer Wins!";
        } else {
            result.innerText = "It's a Tie!";
        }
    }

    // 각 버튼에 클릭 이벤트 리스너 추가
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
