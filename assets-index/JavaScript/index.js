// Xử lý cơ sở dữ liệu
/*var newsApi = 'http://localhost:3000/News';

function start(){
    getNews(renderNews);
}

start();*/

// Function lấy dữ liệu
/*function getNews(callback){
    fetch(newsApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

function renderNews(news){
    var nameNews = document.querySelector('#autoWidth');//autoWidth
    var htmls = news.map(function(newItem){
        return `
        <li class="item-a">
            <div class="box-news">
                <div class="slide-news__image">
                    <img src="${newItem.imageNews}" class="slide-news__image-img">
                </div>

                <div class="detail-box-new">
                    <div class="detail-new__header">
                        <a href="" class="detail-new__header-link">
                            <h3 class="detail-new__header-heading">${newItem.headingNew}</h3>
                        </a>
                    </div>

                    <div class="detail-new__content">
                        <h3 class="detail-new__content-title">${newItem.titleNew}</h3>
                    </div>

                    <div class="detail-new__date">
                        <p class="detail-new__date-time">${newItem.timeNew}</p>
                    </div>
                </div>
            </div>
        </li>
        `;
    });

    nameNews.innerHTML = htmls.join('');
}*/

// Header Button Click
const headerButtonsClick = document.querySelectorAll('.header__intro-btn-click');
const headerButtonClick1 = document.querySelector('#headerButtonClick1');
const headerButtonClick2 = document.querySelector('#headerButtonClick2');
headerButtonsClick.forEach((button) => {
    headerButtonClick1.onclick = function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(function(){
            ripple.remove();
            setTimeout(function(){
                window.location = "home.html";
            }, 100);
        }, 600); // 1s = 1000ms
    }

    headerButtonClick2.onclick = function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(function(){
            ripple.remove();
            setTimeout(function(){
                window.location = "login.html";
            }, 100);
        }, 600); // 1s = 1000ms
    }
});

// Scroll to Top
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.scroll-up-page').css({
                "display":"block", "pointer-events":"auto"
            });
        }
        else{
            $('.scroll-up-page').css({
                "display":"none", "pointer-events":"none"
            });
        }
    });

    $('.scroll-up-page').click(function(){
        $('html').animate({scrollTop:0}, 0);
    });
});

// Chuyển đổi giao diện tối
/*var changeThemeButton = document.querySelector('input[name = dark-theme]');
var textChange = document.querySelector('#change-text');

changeThemeButton.addEventListener('change', function(){
    if(this.checked){
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        textChange.innerHTML = 'Giao diện sáng';
    }
    else{
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        textChange.innerHTML = 'Giao diện tối';
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
}*/

/*const toggleSwitch = document.querySelector('#dark-interface');
const currentTheme = localStorage.getItem('theme');
const textChange = document.querySelector('.user-action__menu-item-link');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        textChange.innerHTML = 'Giao diện sáng';
    }
}
function switchTheme(e) {
    if (e.target.click) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        textChange.innerHTML = 'Giao diện sáng';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('click', switchTheme);*/