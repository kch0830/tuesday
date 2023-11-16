// 버튼 클릭 시 이미지 로드

document.addEventListener('DOMContentLoaded', function () {
  const inputImgs = document.querySelectorAll('.img');

  inputImgs.forEach((inputImg) => {
    inputImg.addEventListener('input', inputHandler);
  });

  function inputHandler(e) {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    const pictureBoard = e.target.closest('.pictureBoard');
    const img = pictureBoard.querySelector('img');

    // 이미지 업로드
    reader.readAsDataURL(file);

    reader.onload = function () {
      img.setAttribute('src', this.result);
      console.log(this); // this는 FileReader, resutl는 FileReader의 result로 이미지 url

      // 삭제 버튼 생성
      const btn = document.createElement('button');
      pictureBoard.appendChild(btn);

      // 이미지 삭제하기
      btn.addEventListener('click', function () {
        img.removeAttribute('src');
        pictureBoard.removeChild(btn);
      });
    };
  }
});

// 날짜 찍기
const date = new Date();
const day = document.querySelector('.day');

let year = date.getFullYear();
let month = date.getMonth() + 1;
let days = date.getDate();
// '년-월-일' 형식으로 표시합니다.
if (days < 10) {
  days = '0' + days;
}
const formattedDate = `${year}-${month}-${days}`;
// DOM 요소에 할당합니다.
day.textContent = formattedDate;

// 발행하기 버튼 누르면 로컬 스토리지에 저장
const publish = document.querySelector('.publish');
publish.addEventListener('click', function () {
  const title = document.querySelector('.title');
  const firstImg = document.querySelector('img');
  const content = document.querySelector('textarea');

  const titleValue = title.value;
  const firstImgValue = firstImg.src;
  const contentValue = content.value;

  //localStorage의 userName객체에서 loggedinUser를 가져와서 author라는 변수에 할당
  //localStorage.setItem('userName', JSON.stringify({ loggedinUser: 'JohnDoe' }));
  //임의로 변수를 할당하는 방법
  const author = JSON.parse(localStorage.getItem('userName')).loggedinUser;

  //articleElement
  const article = localStorage.getItem('articleElement');

  let articleArray;
  if (article == null) {
    articleArray = [];
  } else {
    const addArticleArray = JSON.parse(article);
    articleArray = addArticleArray;
  }

  let number;
  const lastArticle = articleArray[articleArray.length - 1];
  if (lastArticle == undefined) {
    number = 0;
  } else {
    number = articleArray[articleArray.length - 1].num + 1;
  }

  console.log(number);
  const thisArticle = {
    title: titleValue,
    content: contentValue,
    author: author,
    src: firstImgValue,
    num: number,
  };

  articleArray.push(thisArticle);
  //console.log(articleArray);
  let test = JSON.stringify(articleArray);
  localStorage.setItem('articleElement', test);
});

// 날씨 드롭다운
const weatherTxt = document.querySelector('.weatherTxt');
const dropIcons = document.querySelectorAll('.dropIcons');

const handleWeather = (item) => {
  weatherTxt.parentNode.classList.remove('active');
  weatherTxt.innerHTML = item.textContent;
};

dropIcons.forEach((icon) => {
  icon.addEventListener('click', () => handleWeather(icon));
});

weatherTxt.addEventListener('click', () => {
  if (weatherTxt.parentNode.classList.contains('active')) {
    weatherTxt.parentNode.classList.remove('active');
  } else {
    weatherTxt.parentNode.classList.add('active');
  }
});

const weather = document.querySelector('.weather');
weather.addEventListener('blur', () => {
  const parent = weatherTxt.parentNode;
  parent.classList.remove('active');
});
// 임시 저장하기
const save = document.querySelector('.save');
publish.addEventListener('click', function () {
  const title = document.querySelector('.title');
  const firstImg = document.querySelector('img');
  const content = document.querySelector('textarea');

  const titleValue = title.value;
  const firstImgValue = firstImg.src;
  const contentValue = content.value;

  //localStorage의 userName객체에서 loggedinUser를 가져와서 author라는 변수에 할당
  //임의로 변수를 할당하는 방법
  const author = JSON.parse(localStorage.getItem('userName')).loggedinUser;

  //articleElement
  const article = localStorage.getItem('articleElement');

  let articleArray;
  if (article == null) {
    articleArray = [];
  } else {
    const addArticleArray = JSON.parse(article);
    articleArray = addArticleArray;
  }

  let number;
  const lastArticle = articleArray[articleArray.length - 1];
  if (lastArticle == undefined) {
    number = 0;
  } else {
    number = articleArray[articleArray.length - 1].num + 1;
  }

  console.log(number);
  const thisArticle = {
    title: titleValue,
    content: contentValue,
    author: author,
    src: firstImgValue,
    num: number,
  };

  articleArray.push(thisArticle);
  //console.log(articleArray);
  let test = JSON.stringify(articleArray);
  localStorage.setItem('articleElement', test);
});

// 임시저장 클릭 > 로컬로 데이터 저장
// 저장한 데이터를 불러올 버튼이 필요...
// 불러올 버튼 임시저장 버튼 옆에 숫자로 표시 > 로컬 누적 저장이 되면 숫자가 증가
// 저장할 데이터의 유저를 따져야하는가...?

// 로컬 스토리지에는 문자열만 저장
// 로컬 스토리지에 객체나 배열을 저장하기 위해서는 객체를 문자열로 변환해서 저장
//JSON.stringfy() 함수 사용하여 객체와 배열을 JSON 문자열로 변환
