/*===== Login show and hidden =====*/
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const loginIn = document.getElementById('login-in');
const loginUp = document.getElementById('login-up');
const forgotPassword = document.getElementById('forgot-password');
const forgotPasswordForm = document.getElementById('form-forgot-password');
const forgotPasswordButton = document.getElementById('forgot-password-button');

signUp.addEventListener('click', function(){
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    loginIn.classList.add('none');
    loginUp.classList.add('block');
});

signIn.addEventListener('click', function(){
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');

    loginIn.classList.add('block');
    loginUp.classList.add('none');
});

forgotPassword.addEventListener('click', function(){
    loginIn.classList.remove('block');
    loginUp.classList.remove('block');
    forgotPasswordForm.classList.remove('none');

    loginIn.classList.add('none');
    loginUp.classList.add('none');
    forgotPasswordForm.classList.add('block');
});

forgotPasswordButton.addEventListener('click', function(e){
    e.preventDefault();

    loginIn.classList.remove('none');
    loginUp.classList.remove('block');
    forgotPasswordForm.classList.remove('block');

    loginIn.classList.add('block');
    loginUp.classList.add('none');
    forgotPasswordForm.classList.add('none');
})

const inputPassword = document.querySelector('.login__input-password');
const showHidePassword = document.querySelector('.login__box-icon-hide-pass');
const passwordInput = document.querySelector('.login__input-password-correct');
const showPasswordSignUp = document.querySelector('.login__box-icon-show-pass');
const inputPasswordAgain = document.querySelector('.login__input-password-again');
const showPasswordAgain = document.querySelector('.login__box-icon-check-pass-again');
    showHidePassword.onclick = function(){
        if(inputPassword.type === 'password'){
            inputPassword.type = 'text';
            showHidePassword.classList.add("hidepass");
        }
        else{
            inputPassword.type = 'password';
            showHidePassword.classList.remove("hidepass");
        }
    };

    showPasswordSignUp.onclick = function(){
        if(passwordInput.type === 'password'){
            passwordInput.type = 'text';
            showPasswordSignUp.classList.add("hidepass");
        }
        else{
            passwordInput.type = 'password';
            showPasswordSignUp.classList.remove("hidepass");
        }
    }

    showPasswordAgain.onclick = function(){
        if(inputPasswordAgain.type === 'password'){
            inputPasswordAgain.type = 'text';
            showPasswordAgain.classList.add("hidepass");
        }
        else{
            inputPasswordAgain.type = 'password';
            showPasswordAgain.classList.remove("hidepass");
        }
    }

/*var indicatorPassword = document.querySelector('.login__box-indicator');
var inputPasswordCheck = document.querySelector('.login__input-password');
var indicatorWeakPassword = document.querySelector('.login__box-weak');
var indicatorMediumPassword = document.querySelector('.login__box-medium');
var indicatorStrongPassword = document.querySelector('.login__box-strong');
var indicatorTextPassword = document.querySelector('.login__box-indicator-text');
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");


function trigger(){
    if(inputPasswordCheck.value != ""){
        indicatorPassword.style.display = "block";
        indicatorPassword.style.display = "flex";
        if(inputPasswordCheck.value.match(strongRegex) && inputPasswordCheck.value.length >= 8){
            indicatorStrongPassword.classList.add("strong__active");
            indicatorTextPassword.textContent = "Your password is strong";
            indicatorTextPassword.classList.add("text__strong");
        }
        else if(inputPasswordCheck.value.match(mediumRegex) && inputPasswordCheck.value.length >= 6){
            indicatorMediumPassword.classList.add("medium__active");
            indicatorTextPassword.textContent = "Your password is medium";
            indicatorTextPassword.classList.add("text__medium");
        }
        else{
            indicatorWeakPassword.classList.add("weak__active");
            indicatorTextPassword.style.display = "block";
            indicatorTextPassword.textContent = "Your password is too weak";
            indicatorTextPassword.classList.add("text__weak");
        }
    }
    else{
        indicatorPassword.style.display = "none";
        indicatorTextPassword.style.display = "none";
    }
}*/