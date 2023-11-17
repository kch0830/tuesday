$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

const loginId = document.getElementById("LOGIN_ID");
const loginPw = document.getElementById("LOGIN_PW");
const loginBtn = document.getElementById("LOGIN_BTN");

const VALID_LOGIN_IDS = ["aiden2978", "yewonkim301", "kch0830", "jihyehan91"];
const LOGIN_PW = "1234";

function wrongAlert() {
  Swal.fire({
    icon: "error",
    title: "웁스!",
    text: `아이디와 비밀번호를 다시 확인해주세요!`,
  });
  $(".swal2-confirm").attr(
    "style",
    "background-color: #1ec996ab; border: none;"
  );
}

function noInputAlert() {
  Swal.fire("아이디와 비밀번호를\n입력해주세요!");
  $(".swal2-confirm").attr(
    "style",
    "background-color: #1ec996ab; border: none;"
  );
}

const performLogin = () => {
  if (loginId.value && loginPw.value) {
    console.log(`id: ${loginId.value}, pw: ${loginPw.value}`);
    if (VALID_LOGIN_IDS.includes(loginId.value)) {
      if (loginPw.value === LOGIN_PW) {
        localStorage.setItem("loggedinUser", loginId.value);
        loginId.value = "";
        loginPw.value = "";

        link = "index.html"; // 링크
        localStorage.setItem("loginSuccess", true);
        location.href = link;
      } else {
        loginPw.value = "";

        // alert("Invalid password. Please try again");
        wrongAlert();
      }
    } else {
      loginId.value = "";
      loginPw.value = "";
      // alert("Invalid username. Please try again");
      wrongAlert();
    }
  } else {
    // alert("Please enter your username and password");
    noInputAlert();
  }
};

// Enter key press
const enter1 = document.getElementById("LOGIN_ID");
enter1.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    performLogin();
  }
});

const enter2 = document.getElementById("LOGIN_PW");
enter2.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    performLogin();
  }
});
