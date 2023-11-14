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
  const author = localStorage.getItem('loggedinUser');
  const src = 'https://cdn.crowdpic.net/list-thumb/thumb_l_5D3A1045CAB6DC7FBB3F1112BAF466D4.jpeg';
  const num = Date.now();

  const articleElement = {'title': title.value, 'content': content.value, 'author': author, 'src': src, 'num': num};
  localStorage.setItem(`key${num}`, JSON.stringify(articleElement));


  // let titleVal = title.value;
  // let conVal = content.value;

  // // console.log(titleVal);
  // // console.log(conVal);

  // localStorage.setItem('title', titleVal);
  // localStorage.setItem('content', conVal);

  // 클릭하면 사진이 로컬스토리지에 저장되어야 함...
});

// 3.콘텐츠 에디터
