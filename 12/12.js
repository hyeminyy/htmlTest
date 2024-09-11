// OPEN API 데이터 가져오기
const getData = (selDt, ul, repN) => {
  console.log('repN = ', repN);
  const testAPI = '82ca741a2844c5c180a208137bb92bd7';
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${testAPI}&targetDt=${selDt}`;
  if (repN !== 'T') {
    url += `&repNationCd=${repN}`;
  }

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log('API 응답 데이터:', data);  // 응답 데이터 구조 확인
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

      let items = dailyBoxOfficeList.map(item =>
        `<li class='mvli'>
            <span class='rank'>${item.rank}</span>
            <span class='movieNm'>${item.movieNm}</span>
            <span class='openDt'>${item.openDt}</span>
            <span class='rankInten'>
              ${item.rankInten > 0 ? 
                '<span class="spRed">▲</span>' : item.rankInten < 0 ?  
                '<span class="spBlue">▼</span>'  : '-'}
              ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
            </span>
         </li>`
      ).join('');
      
      ul.innerHTML = items;
    })
    .catch(err => console.error('API 호출 오류:', err));
};

// 어제 날짜 구하기 함수
const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  return `${year}-${month}-${day}`;
};

// DOM 생성 후
document.addEventListener('DOMContentLoaded', () => {
  // 요소 가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  const repNationCd = document.querySelector('#repNationCd');

  // 어제 날짜 구하기
  let yesterday = getYesterday();
  dt.max = yesterday;

  dt.value = yesterday;

  // 데이터 가져오기
  const updateMovies = () => {
    const selectedDate = dt.value.replace(/-/g, '');
    const selectedNation = document.querySelector('input[name="repN"]:checked')?.value || 'T';
    if (selectedDate) {
      getData(selectedDate, ul, selectedNation);
    }
  };

  // 날짜 또는 드롭다운 변경 시 데이터 업데이트
  dt.addEventListener('change', updateMovies);
  repNationCd.addEventListener('change', updateMovies);

  // 초기 데이터 로딩
  getData(yesterday.replace(/-/g, ''), ul, 'T');
});
