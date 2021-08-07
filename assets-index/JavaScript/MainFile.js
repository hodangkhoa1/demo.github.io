// Page Loader
window.addEventListener("load", function(){
    const pageLoader = document.querySelector(".page-loader");
    const appContainer = document.querySelector(".app");

    setTimeout(function(){
        pageLoader.classList.add("hidden");
        appContainer.classList.remove("display-hidden");
    }, 4000);
});

// User Profile
const toggleMenu = document.querySelector('.user-action__menu');
function menuToggle(){
    toggleMenu.classList.toggle('active');
}

// Chuyển đổi giao diện tối
let darkMode = localStorage.getItem("darkMode");
var changeThemeButton = document.querySelector('input[name = dark-theme]');
var textChange = document.querySelector('#change-text');

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
}

const enableDarkMode = () => {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
    textChange.innerHTML = 'Giao diện sáng';

    // Cập nhật dữ liệu dark mode lên local stroage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
    textChange.innerHTML = 'Giao diện tối';

    // Cập nhật dữ liệu dark mode lên local stroage
    localStorage.setItem("darkMode", null);
};

/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    enableDarkMode();
}*/

if(darkMode === "enabled" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    enableDarkMode();
}

changeThemeButton.addEventListener('change', function(){
    if(this.checked && darkMode !== "enabled"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
})

/*Log out*/
var logOut = document.querySelector('#log-out');
var userAction = document.querySelector('#user-action');
var navBarControl = document.querySelector('#navBar-control');
var popupBox = document.querySelector('#popup-box');
var btnCancel = document.querySelector('#btn-cancel');
var btnSignOut = document.querySelector('#btn-signOut');

logOut.addEventListener('click', function(){
    popupBox.style.display = 'block';
    toggleMenu.classList.remove('active');
});

btnCancel.addEventListener('click', function(){
    popupBox.style.display = 'none';
});

btnSignOut.addEventListener('click', function(){
    popupBox.style.display = 'none';
    userAction.style.display = 'none';
    navBarControl.style.display = 'flex';
});

var disableLink = document.querySelector('#disable-link');
disableLink.addEventListener('click', function(e){
    e.preventDefault();
});

const wrapperNotification = document.querySelector(".wrapper-notification"),
    toast = document.querySelector(".toast"),
    wifiIcon = document.querySelector(".icon"),
    title = document.querySelector(".details-heading"),
    subTitle = document.querySelector(".details-content"),
    closeWifiNotification = document.querySelector(".close-icon");

window.onload = () => {
    // once window loaded
    function ajax(){
        let xhr = new XMLHttpRequest(); //creating new xml object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // sending get request to this URL
        xhr.onload = () => {
            // once ajax loaded
            // If ajax status is equal to 200 or less than 300 that mean user is getting data/response from that provided URL
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "You're online now";
                subTitle.innerText = "Hurray! Internet is connected.";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

                closeWifiNotification.onclick = () => {
                    wrapperNotification.classList.add("hide");
                }

                setTimeout(() => {
                    wrapperNotification.classList.add("hide");
                }, 8000);
            }
            else{
                //User isn't online or many getting something other error
                offline();
            }
        }
        xhr.onerror = () => {
            //If the passed URL is incorrect or returning 404 or other error
            offline();
        }
        xhr.send();
    }

    function offline(){
        //creating offline function
        wrapperNotification.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Opps! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
    }

    setInterval(() => {
        ajax();
    }, 100);
}
