// 미리 생성한 data 

const profile1 = { src: 'https://item.kakaocdn.net/do/19dbd1d306b41e4cad85f8849843e1f4ac8e738cb631e72fdb9a96b36413984e', title: 'chkwak', content: '곽찬혁입니다.', user: 'kch0830' };
const profile2 = { src: 'https://codeit-images.s3.ap-northeast-2.amazonaws.com/images/631fe801a470e661c7810b5a/IMG_1357.jpg_k2RPEh', title: 'onee', content: '코린이입니다👩🏻‍💻', user: 'yewonkim301' };
const profile3 = { src: 'https://img.freepik.com/free-vector/hand-drawn-one-line-art-animal-illustration_23-2149261852.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais', title: '취미생활', content: '포스코×코딩온 10기 조건우입니다', user: 'aiden2978' };
const profile4 = { src: ' https://i.pinimg.com/564x/17/03/5f/17035fd5b32b7ba695afd02833588144.jpg', title: '블로그4', content: '내용4', user: 'jihyehan91' };

const ele1 = { title: 'START', src1: 'https://coinpan.com/files/attach/images/198/256/479/271/261011e52e0c90668c72a2490a3b56a9.jpg', src2: 'https://post-phinf.pstatic.net/MjAxOTA5MTZfMTU0/MDAxNTY4NjA5MjYzNDQ4.MPq5Tl93auyeIJElUS9Y0SURvhRVHS7HA4DkGYhoJK8g.i9dQ3SYul6_NuRfHcUjcBb-xbZqZ9azCvl8sOOo34CQg.PNG/%EA%B0%91%EC%9E%90%EA%B8%B0_%EC%83%9D%EA%B0%81%EC%9D%B4_%EC%95%88_%EB%82%98%EB%8A%94%EB%8D%B0.....png?type=w1200', src3: 'https://postfiles.pstatic.net/20150717_25/sagoa9012_1437111452578bAaI2_JPEG/FB_IMG_1437140089128.jpg?type=w2', src4: 'https://postfiles.pstatic.net/20150717_215/sagoa9012_1437111452881T14rC_JPEG/1405864931629_20140525_111402_-1521236737.jpg?type=w2', content: '짤처럼 되지 말자', author: 'kch0830', num: '1', day: '2023-11-15', weather: '☀️' };
const ele2 = { title: '개발자 짤', src1: 'https://r2.jjalbot.com/2023/03/Id2s6yosck.png', src2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Jl8JS8hMLvfuQMhB8YvEmXdWQGsHu2aJ8w&usqp=CAU', src3: 'https://www.greenart.co.kr/upimage/new_editor/20212/20210201112021.jpg', src4: 'https://cdn.inflearn.com/public/files/blogs/4299d3ec-e6ee-4c2f-b058-33a52db8cf0b/IMG_2019.jpg', content: ' :)', author: 'yewonkim301', num: '2', day: '2023-11-15', weather: '☀️' };
const ele3 = { title: '슬램덩크', src1: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_2566c1d3c95545828d0cf42189181de3.jpg', src2: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_ecee00c3da80438c93d94c128342044d.jpg', src3: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_53952a0d3d964a7592bc9f615c1deabd.jpg', src4: 'http://kobis.or.kr/common/mast/movie/2022/12/thumb_x640/thn_5d9f97a815e54f46a92a08fbfc8acaeb.jpg', content: '숨죽이게 하고 환호하게 하며.. -이동진-', author: 'aiden2978', num: '3', day: '2023-11-15', weather: '☀️' };
const ele4 = { title: 'title4', src1: 'https://fiverr-res.cloudinary.com/image/upload/w_575/f_auto,q_auto/v1/attachments/generic_asset/asset/f91f3de913a867d0742c7ce6107aeffb-1650456531704/blue%20color-min.jpg', src2: 'https://fiverr-res.cloudinary.com/image/upload/w_575/f_auto,q_auto/v1/attachments/generic_asset/asset/f91f3de913a867d0742c7ce6107aeffb-1650456531704/blue%20color-min.jpg', src3: 'https://fiverr-res.cloudinary.com/image/upload/w_575/f_auto,q_auto/v1/attachments/generic_asset/asset/f91f3de913a867d0742c7ce6107aeffb-1650456531704/blue%20color-min.jpg', src4: 'https://fiverr-res.cloudinary.com/image/upload/w_575/f_auto,q_auto/v1/attachments/generic_asset/asset/f91f3de913a867d0742c7ce6107aeffb-1650456531704/blue%20color-min.jpg', content: 'content4', author: 'jihyehan91', num: '4', day: '2023-11-15', weather: '☀️' };

localStorage.setItem('profile1', JSON.stringify(profile1));
localStorage.setItem('profile2', JSON.stringify(profile2));
localStorage.setItem('profile3', JSON.stringify(profile3));
localStorage.setItem('profile4', JSON.stringify(profile4));


localStorage.setItem('key1', JSON.stringify(ele1));
localStorage.setItem('key2', JSON.stringify(ele2));
localStorage.setItem('key3', JSON.stringify(ele3));
localStorage.setItem('key4', JSON.stringify(ele4));