// 미리 생성한 data 

const profile1 = { src: 'https://item.kakaocdn.net/do/19dbd1d306b41e4cad85f8849843e1f4ac8e738cb631e72fdb9a96b36413984e', title: 'chkwak', content: '곽찬혁입니다.', user: 'kch0830' };
const profile2 = { src: 'https://codeit-images.s3.ap-northeast-2.amazonaws.com/images/631fe801a470e661c7810b5a/IMG_1357.jpg_k2RPEh', title: 'onee', content: '코린이입니다👩🏻‍💻', user: 'yewonkim301' };
const profile3 = { src: 'https://img.freepik.com/free-vector/hand-drawn-one-line-art-animal-illustration_23-2149261852.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais', title: '취미생활', content: '포스코×코딩온 10기 조건우입니다', user: 'aiden2978' };
const profile4 = { src: ' https://i.pinimg.com/564x/17/03/5f/17035fd5b32b7ba695afd02833588144.jpg', title: '한젱', content: '한젱', user: 'jihyehan91' };

const ele1 = { title: 'START', src1: 'https://coinpan.com/files/attach/images/198/256/479/271/261011e52e0c90668c72a2490a3b56a9.jpg', src2: 'https://post-phinf.pstatic.net/MjAxOTA5MTZfMTU0/MDAxNTY4NjA5MjYzNDQ4.MPq5Tl93auyeIJElUS9Y0SURvhRVHS7HA4DkGYhoJK8g.i9dQ3SYul6_NuRfHcUjcBb-xbZqZ9azCvl8sOOo34CQg.PNG/%EA%B0%91%EC%9E%90%EA%B8%B0_%EC%83%9D%EA%B0%81%EC%9D%B4_%EC%95%88_%EB%82%98%EB%8A%94%EB%8D%B0.....png?type=w1200', src3: 'https://img.seoul.co.kr/img/upload/2017/07/14/SSI_20170714170426_O2.jpg', src4: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/02/urban-20230228144115810458.jpg', content: '짤처럼 되지 말자', author: 'kch0830', num: '1', day: '2023-11-15', weather: '☀️' };
const ele2 = { title: '개발자 짤', src1: 'https://r2.jjalbot.com/2023/03/Id2s6yosck.png', src2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Jl8JS8hMLvfuQMhB8YvEmXdWQGsHu2aJ8w&usqp=CAU', src3: 'https://www.greenart.co.kr/upimage/new_editor/20212/20210201112021.jpg', src4: 'https://cdn.inflearn.com/public/files/blogs/4299d3ec-e6ee-4c2f-b058-33a52db8cf0b/IMG_2019.jpg', content: ' :)', author: 'yewonkim301', num: '2', day: '2023-11-15', weather: '☀️' };
const ele3 = { title: '슬램덩크', src1: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_2566c1d3c95545828d0cf42189181de3.jpg', src2: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_ecee00c3da80438c93d94c128342044d.jpg', src3: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_53952a0d3d964a7592bc9f615c1deabd.jpg', src4: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_5d9f97a815e54f46a92a08fbfc8acaeb.jpg', content: '숨죽이게 하고 환호하게 하며.. -이동진-', author: 'aiden2978', num: '3', day: '2023-11-15', weather: '☀️' };
const ele4 = { title: '개발에 감성 한 스푼', src1: 'https://i.pinimg.com/564x/d9/33/ca/d933caf2f54d3c31f4f8e7990dd7cd7a.jpg', src2: 'https://i.pinimg.com/564x/23/c7/b3/23c7b31d164534688b7a0900c0448991.jpg', src3: 'https://i.pinimg.com/564x/a9/c6/4c/a9c64cea9a95256c73729eb7dfd4b03a.jpg', src4: 'https://i.pinimg.com/564x/01/26/5c/01265c634e2cfef769dcba89fa96b9bc.jpg', content: '개발은 어려웡...', author: 'jihyehan91', num: '4', day: '2023-11-15', weather: '☀️' };

localStorage.setItem('profile1', JSON.stringify(profile1));
localStorage.setItem('profile2', JSON.stringify(profile2));
localStorage.setItem('profile3', JSON.stringify(profile3));
localStorage.setItem('profile4', JSON.stringify(profile4));

localStorage.setItem('article1', JSON.stringify(ele1));
localStorage.setItem('article2', JSON.stringify(ele2));
localStorage.setItem('article3', JSON.stringify(ele3));
localStorage.setItem('article4', JSON.stringify(ele4));