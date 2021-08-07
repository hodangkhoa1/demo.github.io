const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".previous-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".previous-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".previous-3");
const submitBtn = document.querySelector(".submit");
const formElemnt = document.querySelector(".form__Registration")
const progressText = document.querySelectorAll(".container__progress-bar-name");
const progressCheck = document.querySelectorAll(".container__progress-bar-check");
const bullet = document.querySelectorAll(".container__progress-bar-bullet");
let max = 4;
let current = 1;

formElemnt.addEventListener("click", function(e){
    e.preventDefault();
})

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

submitBtn.addEventListener("click", function(){
    swal("Đặt lịch thành công", "Cảm ơn quý khách đã tin tưởng phòng khám", "success");
    const conFirm = document.querySelector(".confirm");
    conFirm.addEventListener("click", function(){
        setTimeout(function(){
            window.location = "index.html";
        }, 10);
    });
});

prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
});