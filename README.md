# tuseday

### localStorage에 저장한 values

###### profileElement
{
    title: 블로그 제목

    content: 프로필 내용
    
    user: 사용자 (== userName일 때 show)

    src: 이미지 주소
}

###### articleElement
{
    title: 제목

    content: 내용

    author: 작성자 (== userName일 때 show)

    src1~4: 이미지 주소

    num: 일련번호 (Date.now()를 통해 고유한 번호 생성)

    day: 작성일자

    weather: 날씨
}

###### etc
{
    userName: 보고자 하는 블로그의 작성자

    loggedinUser: 현재 로그인한 사용자
    
    loginSuccess: 로그인 유무
    darkMode: 다크모드
}

### articles.html
mainPage에서 클릭한 사용자의 블로그를 보여주는 페이지입니다. mainPage에서 클릭한 블로그의 주인을 localStorage의 userName 키 값으로 보내고, 페이지를 로드할 때 해당 userName과 일치하는 프로필과 글 내용들을 모두 가져옵니다. 이 때 localStorage에 값들은 배열 형식으로 저장하기 때문에, JSON.stringify()와 JSON.parse() 메소드를 통해 자료형을 변환하여 사용하였습니다.


블로그의 글들은 bootstrap의 card 요소를 사용하였습니다. 게시글의 제목, 작성일, 날씨와 대표 사진 한 장의 src를 localStorage에서 받아와 표시하였습니다. 화면의 너비에 따라 mediaQuery를 이용하여 한 줄에 뜨는 게시글의 개수를 반응형으로 제어하였습니다.


글의 내용은 bootstrap의 modal 요소를 사용하여 표시하였습니다. 게시글의 제목, 내용, 작성일, 날씨, 그리고 사진 4장의 src를 localStorage에서 불러와 표시하였습니다. 화면의 너비에 따라 modal의 max-width가 달라지도록 하였으며, 또한 flex-wrap 속성을 이용하여 사진 네 장의 배치 방식을 제어하였습니다.