// Đối tượng validator
function Validator(options){

    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    //Hàm thực hiện validate báo lỗi
    function validate(inputElement, rule){
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorIconExclamation = getParent(inputElement, options.formGroupSelector).querySelector(options.errorIcon);
        var errorIconMessage = getParent(inputElement, options.formGroupSelector).querySelector(options.errorFormMessage);

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0; i < rules.length; ++i){
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i] (
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i] (inputElement.value);
            }
            if(errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage;
            errorIconExclamation.classList.remove('none');
            errorIconExclamation.classList.add('block');
            errorIconMessage.classList.remove('none');
            errorIconMessage.classList.add('block');
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }
        else{
            errorElement.innerText = '';
            errorIconExclamation.classList.remove('block');
            errorIconExclamation.classList.add('none');
            errorIconMessage.classList.remove('block');
            errorIconMessage.classList.add('none');
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    //Hàm lấy Element của form cần validate
    var formElement = document.querySelector(options.form);

    if(formElement){

        // Xử lý nút submit của form
        formElement.onsubmit = function (e){
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rule và xử lý validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            if(isFormValid){
                // Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name = "' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')){
                                    values[input.name] = '';
                                    return values;
                                }

                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;

                            case 'file':
                                values[input.name] = input.files;
                                break;
                            
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với mặc định của form
                else{
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý
        options.rules.forEach(function(rule){

            // Lưu lại các Rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }
            else{
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function(inputElement){
                //Xử lý trường hợp blur ra khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                }

                inputElement.onchange = function(){
                    validate(inputElement, rule);
                }

                // Xử lý trường hợp người dùng nhập vào input
                inputElement.oninput = function(){
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    var errorIconExclamation = getParent(inputElement, options.formGroupSelector).querySelector(options.errorIcon);
                    var errorIconMessage = getParent(inputElement, options.formGroupSelector).querySelector(options.errorFormMessage);
                    errorElement.innerText = '';
                    errorIconExclamation.classList.remove('block');
                    errorIconExclamation.classList.add('none');
                    errorIconMessage.classList.remove('block');
                    errorIconMessage.classList.add('none');
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                    trigger();
                }
            });
        });
    }

    function trigger(){
        //var indicatorPassword = getParent(inputElement, options.formGroupSelector).querySelector(options.indicatorPassword);
        var indicatorPassword = document.querySelector(options.indicatorPassword);
        var inputPassword = document.querySelector(options.inputPassword);
        var indicatorWeakPassword = document.querySelector(options.indicatorWeakPassword);
        var indicatorMediumPassword = document.querySelector(options.indicatorMediumPassword);
        var indicatorStrongPassword = document.querySelector(options.indicatorStrongPassword);
        var indicatorTextPassword = document.querySelector(options.indicatorTextPassword);
        //let regExpWeak = /[a-z]/;
        //let regExpMedium = /\d+/;
        //let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        if(inputPassword.value != ""){
            indicatorPassword.style.display = "block";
            indicatorPassword.style.display = "flex";
            //if(inputPassword.value.length <= 3 && (inputPassword.value.match(regExpWeak) || inputPassword.value.match(regExpMedium) || inputPassword.value.match(regExpStrong)))no=1;
            //if(inputPassword.value.length >= 6 && ((inputPassword.value.match(regExpWeak) && inputPassword.value.match(regExpMedium)) || (inputPassword.value.match(regExpMedium) && inputPassword.value.match(regExpStrong)) || (inputPassword.value.match(regExpWeak) && inputPassword.value.match(regExpStrong))))no=2;
            //if(inputPassword.value.length >= 6 && inputPassword.value.match(regExpWeak) && inputPassword.value.match(regExpMedium) && inputPassword.value.match(regExpStrong))no=3;
            /*if(no == 1){
                indicatorWeakPassword.classList.add("weak__active");
                indicatorTextPassword.style.display = "block";
                indicatorTextPassword.textContent = "Your password is too weak";
                indicatorTextPassword.classList.add("text__weak");
            }

            if(no == 2){
                indicatorMediumPassword.classList.add("medium__active");
                indicatorTextPassword.textContent = "Your password is medium";
                indicatorTextPassword.classList.add("text__medium");
            }
            else{
                indicatorMediumPassword.classList.remove("medium__active");
                indicatorTextPassword.classList.remove("text__medium");
            }

            if(no == 3){
                indicatorMediumPassword.classList.add("medium__active");
                indicatorStrongPassword.classList.add("strong__active");
                indicatorTextPassword.textContent = "Your password is strong";
                indicatorTextPassword.classList.add("text__strong");
            }
            else{
                indicatorStrongPassword.classList.add("strong__active");
                indicatorTextPassword.classList.add("text__strong");
            }*/

            if(inputPassword.value.match(strongRegex) && inputPassword.value.length >= 8){
                indicatorStrongPassword.classList.add("strong__active");
                indicatorTextPassword.textContent = "Your password is strong";
                indicatorTextPassword.classList.add("text__strong");
            }
            else if(inputPassword.value.match(mediumRegex) && inputPassword.value.length >= 6){
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
    }
}

// Định nghĩa Rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì hết
Validator.isRequired = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            return value ? undefined : message || `Vui lòng nhập trường này`;
        }
    };
}

Validator.isEmail = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : message || `Trường này phải là email`;
        }
    };
}

Validator.minLength = function(selector, min, message){
    return{
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function (value){
            return value === getConfirmValue() ? undefined : message || `Giá trị nhập vào không chính xác`;
        }
    }
}

Validator.isCheckDay = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            return regex.test(value) ? undefined : message || `Trường này phải là dd/mm/yyyy`;
        }
    };
}

Validator.isCheckPhone = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^\d{10}$/;
            return regex.test(value) ? undefined : message || `Vui lòng nhập trường này`;
        }
    };
}

Validator.isTimes = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^(\d{1,2}):(\d{2})([ap]m)?$/;
            return regex.test(value) ? undefined : message || `Vui lòng nhập trường này`;
        }
    };
}