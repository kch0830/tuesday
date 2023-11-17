// 업로드 클릭 시 이미지 로드
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
let days = date.getDate();

// '년-월-일' 형식으로 표시합니다.
if (days < 10) {
  days = '0' + days;
}
const formattedDate = `${year}-${month}-${days}`;

// 날씨 드롭다운
const weatherDropToggle = document.querySelector('.weatherDropToggle');
const dropList = document.querySelector('.dropList');

document.addEventListener('click', function (event) {
  const target = event.target;

  if (target === weatherDropToggle || target.closest('.dropIcons')) {
    dropList.classList.toggle('show');

    if (target !== weatherDropToggle) {
      const value = target.textContent;
      weatherDropToggle.textContent = value;
      weatherDropToggle.classList.add('selected');
      dropList.classList.remove('show');
    }
  } else {
    dropList.classList.remove('show');
  }
});

// DOM 요소에 할당합니다.
day.textContent = formattedDate;

// 발행하기 버튼 누르면 로컬 스토리지에 저장
const publish = document.querySelector('.publish');
publish.addEventListener('click', function () {
  const title = document.querySelector('.title');
  const Img = document.querySelectorAll('img');
  const content = document.querySelector('textarea');
  const weather = document.querySelector('ul');
  console.log(Img);

  const titleValue = title.value;
  const firstImgValue = Img[0].src;
  const secondImgValue = Img[1].src;
  const thirdImgValue = Img[2].src;
  const fourthImgValue = Img[3].src;
  const contentValue = content.value;
  const weatherValue = weatherDropToggle.textContent;

  //localStorage의 userName객체에서 loggedinUser를 가져와서 author라는 변수에 할당
  const author = localStorage.getItem('loggedinUser');

  const thisArticle = {
    title: titleValue,
    content: contentValue,
    author: author,
    src1: firstImgValue,
    src2: secondImgValue,
    src3: thirdImgValue,
    src4: fourthImgValue,
    num: Date.now(),
    day: formattedDate,
    // weather: weatherValue,
  };

  // articleArray.push(thisArticle);
  //console.log(articleArray);
  let test = JSON.stringify(thisArticle);
  localStorage.setItem(`article${Date.now()}`, test);
  location.href = 'articles.html';
});
