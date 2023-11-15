// 버튼 클릭 시 이미지 로드

document.addEventListener('DOMContentLoaded', function () {
  const inputImgs = document.querySelectorAll('.img');

  inputImgs.forEach((inputImg) => {
    inputImg.addEventListener('input', inputHandler);
  });

  function inputHandler(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    const pictureBoard = e.target.closest('.pictureBoard');
    const img = pictureBoard.querySelector('img');

    // 이미지 업로드
    reader.readAsDataURL(file);

    reader.onload = function () {
      img.setAttribute('src', this.result);

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
let days = date.getDay();

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