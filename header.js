//   로그인 상태가 맞는지 로컬 스토리지에서 확인하기
let isLogin = localStorage.getItem("loginSuccess");
//   유저 아이디 로컬 스토리지에서 가져오기
let userId = localStorage.getItem("ID가 들어있는 변수명");

$(document).ready(function () {
  //   로그인 했는지 확인하고 로그인 상태이면 함수 호출
  if (isLogin == "true") loggedIn();
  let darkMode = localStorage.getItem("darkMode");

  // darkMode가 저장되어 있다면 설정을 반영
  if (darkMode === "dark") {
    document.body.classList.add("dark-mode");

    let btn = document.querySelector("#color-mode");
    btn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
  }
});

// 페이지 로드 시 다크 모드 값을 확인하고 설정

// 다크 모드 토글 함수
function changeColor() {
  let body = document.body;
  body.classList.toggle("dark-mode");

  let btn = document.getElementById("color-mode");

  if (body.classList.contains("dark-mode")) {
    // dark-mode가 활성화된 경우 로컬 스토리지에 저장
    localStorage.setItem("darkMode", "dark");
    btn.innerHTML = `<i class="bi bi-moon-fill colorModeAni"></i>`;
  } else {
    // dark-mode가 비활성화된 경우 로컬 스토리지에서 제거
    localStorage.setItem("darkMode", null);
    btn.innerHTML = `<i class="bi bi-brightness-high colorModeAni"></i>`;
  }
}

function logOut() {
  localStorage.removeItem("loginSuccess");
  localStorage.setItem("loggedinUser", "");
  $(".headerContainer .headerRight").html(
    `<button onclick="changeColor()" id="color-mode">
    <i class="bi bi-brightness-high"></i></button>
    <button class="btn-header btn-logIn" onclick="location.href='login01.html'">로그인</button>`
  );
  $(".welcome").text("app.end에 오신 것을 환영합니다.");
}

function loggedIn() {
  // 로그인 상태에서는 로그인 버튼 대신 새글 작성 버튼 생성, 유저 아이디 버튼 추가
  const loggedinUser = localStorage.getItem("loggedinUser");
  // localStorage.setItem("userName", loggedinUser);
  $(".headerContainer .headerRight .btn-logIn").addClass("hidden");
  $(".headerContainer .headerRight").append(
    `<button class="btn-header btn-write" onclick="myAppend()">
        새 글 작성
      </button><div class="accountInfo" onclick="myBlog()">${loggedinUser}</div><button class="btn-header btn-logOut" onclick="logOut()";>
      로그아웃
    </button>`
  );
}

function myAppend() {
  localStorage.setItem("userName", localStorage.getItem("loggedinUser"));
  location.href = "write.html";
}

function myBlog() {
  localStorage.setItem("userName", localStorage.getItem("loggedinUser"));
  location.href = "articles.html";
}
