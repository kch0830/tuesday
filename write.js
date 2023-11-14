// 2.사진 첨부하기

// 로컬스토리지 저장
// let uploadedImage;
// window.onload = function () {
//   uploadedImage = localStorage.getItem('uploadedImage');
//   if (uploadedImage) {
//     displayImage();
//   }
// };

// input에서 파일 받아서 이미지 출력

let i = 0;

document.getElementById('imageInput').addEventListener('change', function () {
  const files = this.files;
  const file = files[0];

  const reader = new FileReader();

  reader.onload = function (e) {
    const uploadedImage = e.target.result;

    // 이미지가 있는 칸에 표시
    displayImage(uploadedImage, i);
    i++;
    console.log(i);
    // 첫번째 칸 이미지만 로컬스토리지에 저장
    // 용량이 초과된다고 경고문이 뜬다...

    // 수정이 필요함
    // const firstImg = document.getElementById('imgItem0');
    // if (firstImg에 업로드 이미지가 있다면) {
    //   localStorage.setItem('uploadedImage', uploadedImage);
    // }
  };

  reader.readAsDataURL(file);
});

function displayImage(image, index) {
  const imgItem = document.getElementById(`imgItem${index}`);

  // 새로운 이미지 엘리먼트 생성
  const imgElement = document.createElement('img');
  imgElement.src = image;
  imgElement.alt = 'Uploaded Image';

  // 삭제 버튼 엘리먼트 생성
  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton';
  deleteButton.addEventListener('click', function () {
    deleteImage(index);
  });

  // 이미지와 삭제 버튼을 imgItem에 추가
  imgItem.innerHTML = ''; // 이전 내용 비우기
  imgItem.appendChild(imgElement);
  imgItem.appendChild(deleteButton);
}

function deleteImage(index) {
  // 삭제 버튼을 누를 때 해당 이미지만 삭제
  const imgItem = document.getElementById(`imgItem${index}`);
  imgItem.innerHTML = '';
  i--;
  // 로컬 스토리지에서 이미지 삭제

  localStorage.removeItem('uploadedImage');
}

// 1.게시물 작성
/*
1. 제목 입력값 받기
2. 내용 입력값 받기
3. 발행하기 클릭하면 로컬 스토리지에 저장?
(+ 로컬 스토리지에 저장된 값을 목록 페이지에 연결이 되어야 한다...)
--임시 저장도 로컬 스토리지에 저장시켰다 불러오면 되나?
*/

const pubBtn = document.querySelector('.btnPublish');

pubBtn.addEventListener('click', function () {
  const title = document.querySelector('.title');
  const content = document.querySelector('#editor');

  let titleVal = title.value;
  let conVal = content.value;

  // console.log(titleVal);
  // console.log(conVal);

  localStorage.setItem('title', titleVal);
  localStorage.setItem('content', conVal);

  // 클릭하면 사진이 로컬스토리지에 저장되어야 함...
});

// 3.콘텐츠 에디터
let optionsButtons = document.querySelectorAll('.option-button');
let writingArea = document.getElementById('text-input');
let alignButtons = document.querySelectorAll('.align');
let spacingButtons = document.querySelectorAll('.spacing');
let formatButtons = document.querySelectorAll('.format');
let advancedOptionButton = document.querySelectorAll('.adv-option-button');

//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  //No highlights for link, unlink,lists, undo,redo since they are one time operations
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
};

//main logic
// bold, italic 안먹힘
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modifyText(button.id, false, null);
  });
});

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener('change', () => {
    modifyText(button.id, false, button.value);
  });
});

//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener('click', () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;

        //If currently clicked button is already active
        if (button.classList.contains('active')) {
          alreadyActive = true;
        }

        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add('active');
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle('active');
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove('active');
  });
};

window.onload = initializer();
