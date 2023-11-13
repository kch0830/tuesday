function nightSwitch() {
    $('*').toggleClass('bg-dark text-light');
}

function hiddenBtn() {
    const userName = localStorage.getItem('userName');
    const loggedinUser = localStorage.getItem('loggedinUser');
    if (userName != loggedinUser) {
        $('#write').addClass('disabled');
    }
}

function gotoMain() {
    location.href = 'mainPage.html';
}

function profileLoad() {
    const userName = localStorage.getItem('userName');
    const profile = $('#profile');

    const values = [];
    for (const key in localStorage) {
        values.push(localStorage.getItem(key));
    }

    // 반복문을 통해 values 배열 내 각 value에 접근
    for (const value of values) {
        try {
            const profileElement = JSON.parse(value);
            // 해당 작성자의 내용만 뜨도록 설정
            if (profileElement && profileElement.user == userName) {
                const profileCard = document.createElement('div');
                profileCard.classList.add('row');
                profileCard.innerHTML = `<div class="col-4 position-relative">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <img src="${profileElement.src}"
                        alt="profile" style="height: 27vw;">
                </div>
            </div>
            <div class="col-8 p-3">
                <h5><strong>${profileElement.user}의 블로그</strong></h5>
                <br>
                <h5><b>${profileElement.title}</b></h5>
                <p>${profileElement.content}</p>
            </div>`;
                profile.append(profileCard);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

function cardLoad() {
    const userName = localStorage.getItem('userName');
    const container = $('#container');

    const values = [];
    for (const key in localStorage) {
        values.push(localStorage.getItem(key));
    }

    // 반복문을 통해 values 배열 내 각 value에 접근
    for (const value of values) {
        try {
            const articleElement = JSON.parse(value);
            // 해당 작성자의 내용만 뜨도록 설정
            if (articleElement && articleElement.author == userName) {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `<img src="${articleElement.src}" class="card-img-top thumbnail" alt="1">
    <div class="card-body">
        <h5 class="card-title">${articleElement.title}</h5>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modal${articleElement.num}">Read More</button>
        </div>
    </div>`;

                // value 값에 맞는 내용을 볼 수 있는 modal 추가
                const modal = document.createElement('div');
                modal.setAttribute('class', 'modal fade');
                modal.setAttribute('id', `modal${articleElement.num}`);
                modal.setAttribute('tabindex', '-1');
                modal.setAttribute('aria-labelledby', `exampleModallabel${articleElement.num}`);
                modal.setAttribute('aria-hidden', 'true');
                modal.innerHTML = `<div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel${articleElement.num}">${articleElement.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${articleElement.src}" alt="${articleElement.title}" width="50%" class="d-block mb-2 m-auto" style="aspect-ratio: 4/3;">
                    ${articleElement.content}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary closing" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>`;
                container.append(card);
                container.append(modal);
            }
        } catch (error) {
            console.log(error);
        }
    }
}