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
// document.getElementById('imageInput').addEventListener('change', function () {
//   const file = this.files[0];

//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       console.log(e);
//       uploadedImage = e.target.result;

//       // 이미지 로컬 스토리지 저장
//       localStorage.setItem('uploadedImage', uploadedImage);

//       displayImage();
//     };
//     reader.readAsDataURL(file);
//   }
// });

// function displayImage(i) {
//   const previewContainer = document.getElementById(`imgItem${i}`);
//   console.log(previewContainer);
//   previewContainer.innerHTML = `<img src="${uploadedImage}" alt="Uploaded Image"  style="width: 100%; height: 100%; ">
//           <button onclick="deleteImage()"></button>`;
// }

// function deleteImage() {
//   const previewContainer = document.getElementById('imagePreviewContainer');
//   previewContainer.innerHTML = '';
//   uploadedImage = undefined;

//   // 로컬 스토리지에서 이미지 삭제
//   localStorage.removeItem('uploadedImage');
// }

// JavaScript
let i = 0;
document.getElementById('imageInput').addEventListener('change', function () {
  const files = this.files;

  // for (let i = 0; i < Math.min(4, files.length); i++) {
  const file = files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const uploadedImage = e.target.result;

    // 이미지가 있는 칸에 표시
    displayImage(uploadedImage, i);
    i++;
  };

  reader.readAsDataURL(file);
});

function displayImage(image, index) {
  const previewContainer = document.getElementById('imagePreviewContainer');
  console.log(index);
  const imgItem = document.getElementById(`imgItem${index}`);

  // 새로운 이미지를 표시할 div 생성
  // const newImgItem = document.createElement('div');
  // newImgItem.className = 'imgItem';
  // newImgItem.id = itemId;
  imgItem.innerHTML = `<img src="${image}" alt="Uploaded Image">
                          <button class="deleteButton" onclick="deleteImage(${index})">Delete</button>`;
  // previewContainer.replaceChild(newImgItem, imgItem);
}

function deleteImage(index) {
  // 삭제 버튼을 누를 때 해당 이미지만 삭제
  const imgItem = document.getElementById(`imgItem${index}`);
  imgItem.innerHTML = `<button class="deleteButton" onclick="deleteImage(${index})">Delete</button>`;
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
// 최후의 수단은 contenteditable??
