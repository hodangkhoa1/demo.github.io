
function Validator(formSelector, options){

    // Gán giá trị mặc định cho tham số
    if(!options){
        options = {};
    }

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
    var max = 4;
    var current = 1;

    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }

            element = element.parentElement;
        }
    }

    var formRules = {};

    // Định nghĩa Rules
    // Nguyên tắc của các rules:
    // 1. Khi có lỗi => Trả ra message lỗi
    // 2. Khi hợp lệ => Không trả ra cái gì hết
    var validatorRules = {
        required: function(value){
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : 'Vui lòng nhập ít nhất ${min} kí tự';
            }
        },
        max: function(max){
            return function(value){
                return value.length <= max ? undefined : 'Vui lòng nhập tối đa ${max} kí tự';
            }
        },
    }

    // Lấy ra form Element trong DOM theo `formSelector`
    var formElement = document.querySelector(formSelector);
    var submitElement = document.querySelector(".submit");

    // Chỉ xử lý khi có Element trong DOM
    if(formElement){
        // Lấy ra thẻ có attribute là name và rules
        var inputs = formElement.querySelectorAll('[name][rules]');
        for(var input of inputs){
            var rules = input.getAttribute('rules').split('|');

            for(var rule of rules){

                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue){
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);
                }
                else{
                    formRules[input.name] = [ruleFunc];
                }
            }

            // Lắng nghe sự kiện để validate
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        // Hàm thực hiện validate
        function handleValidate(event){
            var rules = formRules[event.target.name];
            var errorMessage;

            rules.some(function(rule){
                errorMessage = rule(event.target.value);
                return errorMessage;
            });

            // Nếu có lỗi thì hiển thị lỗi
            if(errorMessage){
                var formGroup = getParent(event.target, '.form-group');
                if(formGroup){
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage;
        }


        // Hàm bỏ lỗi
        function handleClearError(event){
            var formGroup = getParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage){
                    formMessage.innerText = '';

                    firstNextBtn.addEventListener("click", function(){
                        slidePage.style.marginLeft = "-25%";
                        bullet[current - 1].classList.add("active");
                        progressText[current - 1].classList.add("active");
                        progressCheck[current - 1].classList.add("active");
                        current += 0;
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
                }
            }
        }
    }


    // Xử lý hành vi của nút
    formElement.onsubmit = function(event){
        event.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for(var input of inputs){
            if(!handleValidate({ target: input }))
            {
                isValid = false;
            }
        }

        // Khi không có lỗi thì submit
        if(isValid){
            submitBtn.addEventListener("click", function(){
                swal("Đặt lịch thành công", "Cảm ơn quý khách đã tin tưởng phòng khám", "success");
                const conFirm = document.querySelector(".confirm");
                conFirm.addEventListener("click", function(){
                    setTimeout(function(){
                        window.location = "index.html";
                    }, 10);
                });
            });

            if(typeof options.onSubmit === 'function'){
                options.onSubmit();
            }
            else{
                formElement.submit();
            }
        }
    }
    prevBtnSec.addEventListener("click", function(){
        slidePage.style.marginLeft = "0%";
        bullet[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        current -= 1;
    });
}