//   로그인 상태가 맞는지 로컬 스토리지에서 확인하기
const isLogin2 = localStorage.getItem("loginSuccess");

$(document).ready(function () {
  //   로그인 했는지 확인하고 로그인 상태이면 함수 호출
  if (isLogin2 == "true") welcomeLoggedin();

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
});

function welcomeLoggedin() {
  const loggedinUser = localStorage.getItem("loggedinUser");
  $("main .welcome").text(`${loggedinUser}님 환영합니다.`);
}

function onBlog(user) {
  localStorage.setItem("userName", `${user}`);
  location.href = "articles.html";
}

const user1_src = JSON.parse(localStorage.getItem('article1')).src1;
const user2_src = JSON.parse(localStorage.getItem('article2')).src1;
const user3_src = JSON.parse(localStorage.getItem('article3')).src1;
const user4_src = JSON.parse(localStorage.getItem('article4')).src1;

