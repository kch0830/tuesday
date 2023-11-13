//   로그인 상태가 맞는지 로컬 스토리지에서 확인하기
let isLogin = localStorage.getItem("loginSuccess");
//   유저 아이디 로컬 스토리지에서 가져오기
let userId = localStorage.getItem("ID가 들어있는 변수명");

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
    localStorage.setItem("loginSuccess", true);
    // localStorage.removeItem("loginSuccess");

    //   로그인 했는지 확인하고 로그인 상태이면 함수 호출
    if (isLogin == "true") loggedIn();
});

//   light, dark mode
function changeColor() {
    let body = document.body;
    body.classList.toggle("dark-mode");

    let btn = document.getElementById("color-mode");

    if (btn.innerHTML == `<i class="bi bi-moon-fill"></i>`) {
        btn.innerHTML = `<i class="bi bi-brightness-high"></i>`;
    } else {
        btn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }
}

function loggedIn() {
    // 로그인 상태에서는 로그인 버튼 대신 새글 작성 버튼 생성, 유저 아이디 버튼 추가
    const loggedinUser = localStorage.getItem('loggedinUser');
    localStorage.setItem('userName', loggedinUser);
    $(".headerContainer .headerRight .btn-logIn").addClass("hidden");
    $(".headerContainer .headerRight").append(
      `<button class="btn-header btn-write" onclick="location.href='새글작성.html'">
        새 글 작성
      </button><div class="accountInfo" onclick="location.href = 'articles.html'";>${userId}</div>`
    );
  }

function onBlog(user) {
    location.href = 'articles.html';
    localStorage.setItem("userName", `author${user}`);
}
