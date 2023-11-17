//   로그인 상태가 맞는지 로컬 스토리지에서 확인하기
const isLogin = localStorage.getItem("loginSuccess");
//   유저 아이디 로컬 스토리지에서 가져오기
const userId = localStorage.getItem("ID가 들어있는 변수명");

const listBtn = document.querySelector(".btn-list");
const headerBtn = document.querySelector(".headerRight");

listBtn.addEventListener("click", () => {
  headerBtn.classList.toggle("active");
});

$(document).ready(function () {
  //   로그인 했는지 확인하고 로그인 상태이면 함수 호출
  if (isLogin == "true") loggedIn();
  const darkMode = localStorage.getItem("darkMode");

  // darkMode가 저장되어 있다면 설정을 반영
  if (darkMode === "dark") {
    document.body.classList.add("dark-mode");
    $(".modal-content").attr("style", "background-color: #19191d;");
    $(".showBlogs .slider-nav .slick-dots li button").attr(
      "style",
      "background-color: white"
    );
    const btn = document.querySelector("#color-mode");
    btn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
  }
});

// 다크 모드 토글 함수
function changeColor() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const btn = document.getElementById("color-mode");

  if (body.classList.contains("dark-mode")) {
    // dark-mode가 활성화된 경우 로컬 스토리지에 저장
    localStorage.setItem("darkMode", "dark");
    btn.innerHTML = `<i class="bi bi-moon-fill colorModeAni"></i>`;
    $(".modal-content").attr("style", "background-color: #19191d;");
    $(".headerContainer .headerRight.active").attr(
      "style",
      "background-color: #191919;"
    );
    $(".headerContainer .headerRight.active .accountInfo").attr(
      "style",
      "color: white;"
    );
    $(".showBlogs .slider-nav .slick-dots li button").attr(
      "style",
      "background-color: white"
    );
  } else {
    // dark-mode가 비활성화된 경우 로컬 스토리지에서 제거
    localStorage.setItem("darkMode", null);
    btn.innerHTML = `<i class="bi bi-brightness-high colorModeAni"></i>`;
    $(".modal-content").attr("style", "background-color: white;");
    $(".headerContainer .headerRight.active").attr(
      "style",
      "background-color: white;"
    );
    $(".headerContainer .headerRight.active .accountInfo").attr(
      "style",
      "color: black;"
    );
    $(".showBlogs .slider-nav .slick-dots li button").attr(
      "style",
      "background-color: rgba(1, 1, 1, 0.2);"
    );
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
}

function loggedIn() {
  // 로그인 상태에서는 로그인 버튼 대신 새글 작성 버튼 생성, 유저 아이디 버튼 추가
  const loggedinUser = localStorage.getItem("loggedinUser");
  // localStorage.setItem("userName", loggedinUser);
  $(".headerContainer .headerRight .btn-logIn").addClass("hidden");
  $(".headerContainer .headerRight").append(
    `<button class="btn-header btn-write" onclick="myAppend()">
        새 글 작성
      </button><div class="accountInfo" onclick="myBlog()">${loggedinUser}</div><button class="btn-header btn-logOut" onclick="location.href='index.html'; logOut()";>
      로그아웃
    </button>`
  );
}

function myAppend() {
  localStorage.setItem("userName", localStorage.getItem("loggedinUser"));
  location.href = "diary.html";
}

function myBlog() {
  localStorage.setItem("userName", localStorage.getItem("loggedinUser"));
  location.href = "articles.html";
}
