const profile1 = {src: 'https://cdn-icons-png.flaticon.com/512/4086/4086679.png', title: '블로그1', content: '내용1', user: 'author1'};
const profile2 = {src: 'https://cdn-icons-png.flaticon.com/512/4086/4086699.png', title: '블로그2', content: '내용2', user: 'author2'};

const ele1 = { title: 'title1', src: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f450d4e63211ef94ed6fd29409ac1a7d-1650457056397/pink%20color-min.jpg', content: 'content1', author: 'author1', num: '1' };
const ele2 = { title: 'title2', src: 'https://fiverr-res.cloudinary.com/image/upload/w_575/f_auto,q_auto/v1/attachments/generic_asset/asset/7fb71b95b574f15ff5a509f9567615b5-1650456228004/green%20color-min.jpg', content: 'content2', author: 'author2', num: '2' };
const ele3 = { title: 'title3', src: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6a774eae58995bc8e1d5326d30d2cb73-1650458203560/gold%20color-min.jpg', content: 'content3', author: 'author1', num: '3' };
const ele4 = { title: 'title4', src: 'https://fiverr-res.cloudinary.com/image/upload/w_575/f_auto,q_auto/v1/attachments/generic_asset/asset/f91f3de913a867d0742c7ce6107aeffb-1650456531704/blue%20color-min.jpg', content: 'content4', author: 'author2', num: '4' };

localStorage.setItem('profile1', JSON.stringify(profile1));
localStorage.setItem('profile2', JSON.stringify(profile2));

localStorage.setItem('key1', JSON.stringify(ele1));
localStorage.setItem('key2', JSON.stringify(ele2));
localStorage.setItem('key3', JSON.stringify(ele3));
localStorage.setItem('key4', JSON.stringify(ele4));