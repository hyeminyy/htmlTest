//.어제 날짜 구하기
const getYesterday = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  console.log(`${year}-${month}-${day}`);

  
};
document.addEventListener("DOMContentLoaded", () => {
  //어제 날짜 구하기
  getYesterday();
});