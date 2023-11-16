# 프로젝트명

---

웹 페이지 만들기(블로그 웹 페이지 만들기)

# 프로젝트 설명(어플리케이션이 무엇을 하는지, 왜 그 기술을 사용하는지, 마주했던 문제 및 추후에 추가하고 싶은 기능)

---

벨로그를 참고하여 만든 블로그 사이트입니다.

포스코x코딩온 웹 풀스택 10기
프로젝트 기간 : 2023.11.10. ~ 2023.11.19.
사용 언어 : HTML, CSS, JAVASCRIPT

# 배포 주소

---

// netlify 주소

# 목차(선택)

---

# 프로젝트 사용방법

---

# 프로젝트 소개

---

- app.end는 하루를 기록하는 컨셉의 블로그입니다.

- appe.end는 다음과 같은 기능을 지원하고 있습니다.
  1. 하루를 나타내는 사진 네 장을 첨부하고 그 날의 날씨와 기분 및 있었던 일을 기록할 수 있습니다.
  2. 메인페이지에서 보여지는 이미지를 통해 다른 사람의 블로그를 구경할 수 있습니다.

# 팀원 및 참고자료

---

- 팀명 : tuesday
- 팀원 :

  곽찬혁(https://github.com/kch0830) : 로그인 페이지 구현 및 css
  김예원(https://github.com/yewonkim301) : 메인 페이지 및 헤더와 푸터 구현 및 css
  조건우(https://github.com/aiden2978) : 글 목록 페이지 구현 및 css
  한지혜(https://github.com/jihyehan91) : 새 글 작성하는 페이지 구현 및 css

# STACKS

---

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

# 화면 구성

---

// 화면 이미지 첨부

# 주요 기능

---

- 새 글 작성 기능

  - 사진 4장을 첨부 및 날씨와 하루에 대한 기록을 작성할 수 있다.

- 다크모드와 라이트 모드 기능
  - 유저마다 다크모드와 라이트 모드를 설정할 수 있으며, 설정 후 모드를 유지할 수 있다.

localStorage - profileElement
{
title: 블로그 제목
content: 프로필 내용
user: 사용자 (== userName일 때 show)
src: 이미지 주소
}

localStorage - articleElement
{
title: 제목
content: 내용
author: 작성자 (== userName일 때 show)
src1~4: 이미지 주소
num: 일련번호
day: 작성일자
weather: 날씨
}

localStorage
{
userName: 보고자 하는 블로그의 작성자
loggedinUser: 현재 로그인한 사용자
loginSuccess: 로그인 유무
darkMode: 다크모드
}
