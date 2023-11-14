//   로그인 상태가 맞는지 로컬 스토리지에서 확인하기
let isLogin = localStorage.getItem("loginSuccess");
//   유저 아이디 로컬 스토리지에서 가져오기
let userId = localStorage.getItem("userName");

$(document).ready(function () {
  // .slider-nav flex 하기 위해 div로 감싸기
  $(".slider-nav>button, .slider-nav>div").addClass("nav-box");
  $(".nav-box").wrapAll($('<div class="nav-container"></div>'));

  // .slider-nav 안에 button 내용 지우고 화살표 그림 추가
  $(".showBlogs .slider-nav .slick-dots li button").text("");
  $("main .showBlogs .slider-nav .nav-container .slick-prev").html(
    `<i class="bi bi-caret-left-fill"></i>`
  );
  $("main .showBlogs .slider-nav .nav-container .slick-next").html(
    `<i class="bi bi-caret-right-fill"></i>`
  );
  // localStorage.setItem("loginSuccess", true);
  // localStorage.setItem("userName", "one");
  localStorage.removeItem("loginSuccess");
  localStorage.removeItem("userName");

  //   로그인 했는지 확인하고 로그인 상태이면 함수 호출
  if (isLogin == "true") loggedIn();
});

//   light, dark mode
// function changeColor() {
//   let body = document.body;
//   body.classList.toggle("dark-mode");

//   let btn = document.getElementById("color-mode");

//   if (btn.innerHTML == `<i class="bi bi-moon-fill"></i>`) {
//     btn.innerHTML = `<i class="bi bi-brightness-high"></i>`;
//   } else {
//     btn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
//   }
// }

// 페이지 로드 시 다크 모드 값을 확인하고 설정
window.onload = function () {
  let darkMode = localStorage.getItem("darkMode");

  // darkMode가 저장되어 있다면 설정을 반영
  if (darkMode === "dark") {
    document.body.classList.add("dark-mode");

    let btn = document.getElementById("color-mode");
    btn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
  }
};

// 다크 모드 토글 함수
function changeColor() {
  let body = document.body;
  body.classList.toggle("dark-mode");

  let btn = document.getElementById("color-mode");

  if (body.classList.contains("dark-mode")) {
    // dark-mode가 활성화된 경우 로컬 스토리지에 저장
    localStorage.setItem("darkMode", "dark");
    btn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
  } else {
    // dark-mode가 비활성화된 경우 로컬 스토리지에서 제거
    localStorage.setItem("darkMode", null);
    btn.innerHTML = `<i class="bi bi-brightness-high"></i>`;
  }
}

function loggedIn() {
  // 로그인 상태에서는 로그인 버튼 대신 새글 작성 버튼 생성, 유저 아이디 버튼 추가
  $(".headerContainer .headerRight .btn-logIn").addClass("hidden");
  $(".headerContainer .headerRight").append(
    `<button class="btn-header btn-write" onclick="location.href='새글작성.html'">
      새 글 작성
    </button><div class="accountInfo" onclick="location.href = '글목록.html'";>${userId}님</div>`
  );
  $("main .welcome").text(`${userId}님 환영합니다.`);
}

function onBlog(user) {
  location.href = "글목록.html";
  localStorage.setItem("userName", "${user}");
}
