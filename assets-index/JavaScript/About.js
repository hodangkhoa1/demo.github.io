const imageZoom = document.querySelector('.wrapper-card__main-img');
const iconHover = document.querySelector('.wrapper-card__main-img-hover');
const modalImage = document.querySelector('.wrapper-modal');
const closeImage = document.querySelector('.wrapper-modal__close');

imageZoom.addEventListener('click', function(){
    iconHover.classList.add('active');
    modalImage.classList.add('show');
});

closeImage.addEventListener('click', function(){
    iconHover.classList.remove('active');
    modalImage.classList.remove('show');
});

const imageZoom2 = document.querySelector('.wrapper-card__main-img2');
const iconHover2 = document.querySelector('.wrapper-card__main-img-hover2');
const modalImage2 = document.querySelector('.wrapper-modal2');
const closeImage2 = document.querySelector('.wrapper-modal__close2');

imageZoom2.addEventListener('click', function(){
    iconHover2.classList.add('active');
    modalImage2.classList.add('show');
});

closeImage2.addEventListener('click', function(){
    iconHover2.classList.remove('active');
    modalImage2.classList.remove('show');
});

const closeShareModal = document.querySelector('.share-modal__close');
const shareButton = document.querySelector('.wrapper-card__content-share-wrap-link');
const shareModal = document.querySelector('.share-modal');

shareButton.addEventListener('click', function(){
    shareModal.classList.add('share-modal-open');
})

closeShareModal.addEventListener('click', function(){
    shareModal.classList.remove('share-modal-open');
})