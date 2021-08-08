// function Validator(options){
//     var formElement = document.querySelector(options.form);
   

//     var selectorRules = {};

//     function Validate(inputElement,rule){
        
//         var errorElement = inputElement.parentElement.querySelector(options.errorElement);                   
//         // var errorMessage = rule.test(inputElement.value);
//         var errorMessage;
//         var rules = selectorRules[rule.selector];

//         for(var i = 0; i < rules.length; i++){
//             errorMessage = rules[i](inputElement.value)
//             if(errorMessage) break;
//         }

//         if(errorMessage){

//             errorElement.innerText = errorMessage;
//             inputElement.parentElement.classList.add('invalid')
//         }else{
//             errorElement.innerText = '';
//             inputElement.parentElement.classList.remove('invalid')                       
//         }
//         inputElement.oninput = function(){
//             var errorElement = inputElement.parentElement.querySelector(options.errorElement);    
//             errorElement.innerText = '';
//             inputElement.parentElement.classList.remove('invalid');
//         }
//     }
//     if(formElement){
//         // Form submit
//         formElement.onsubmit = function(e){
//             e.preventDefault();
//             options.rules.forEach( function(rule){
    
//                 var inputElement = formElement.querySelector(rule.selector);
                
//                 Validate(inputElement, rule)
               
    
//             })
//         }

//          options.rules.forEach( function(rule){
//             var inputElement = formElement.querySelector(rule.selector);
//             // console.log(inputElement);


//             // Validate với nhiều Rules
//             if(Array.isArray(selectorRules[rule.selector] )){
//                 selectorRules[rule.selector].push(rule.test);
//             }else{
//                 selectorRules[rule.selector] = [rule.test];
//             }


//             if(inputElement){

//                 inputElement.onblur = function(){
//                     Validate(inputElement, rule);
//                     console.log(rule.selector);
//                 }
                
//             }
//     })
//     console.log(selectorRules);
//     }
// }

// Validator.isRequired  = function(selector, message){

//     return {
//         selector: selector,
//         test: function(value){
//             return value.trim() ? undefined : message || 'Bạn cần nhập trường này'
//         }
//     }
// }

// Validator.isEmail  = function(selector){

//      return {
//         selector: selector,
//         test: function(value){
//             var requex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//             return requex.test(value) ? undefined : `Trường này phải là Email`
//         }
//     }
// }

// Validator.isPassword  = function(selector, min){

//     return {
//         selector: selector,
//         test: function(value){
//             return value.length >= 6 ? undefined : `Cần nhập tối thiểu ${min} kí tự`
//         }
//     }
// }

// Validator.isConfirmPassword = function(selector, getConfirmPw, message){
//     return {
//         selector: selector,
//         test: function(value){
//             return value === getConfirmPw() ? undefined : message || `Vui lòng nhập giá trị chính xác`
//         }
//     }
// }

function Validator(options){
    var formElement = document.querySelector(options.form);

    var selectorRules = {};
    function Validate(inputElement,rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorElement);
        var errorMessage;

        var rules = selectorRules[rule.selector];

        for(var i = 0; i < rules.length; i++){
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default :  errorMessage = rules[i](inputElement.value)
            }
           
            if(errorMessage) break;
        }
        
        if(errorMessage){
            errorElement.innerText = errorMessage;
            errorElement.parentElement.classList.add('invalid');
        }else{
            errorElement.innerText = '';
            errorElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }
    if(formElement){
        // Kiểm tra từng Rule
        options.rules.forEach( function(rule){
            // var inputElement = formElement.querySelector(rule.selector);

            // Form submit 

            formElement.onsubmit = function(e){
                e.preventDefault();
                var isFormValid = true;
                
                options.rules.forEach(function(rule){

                    var inputElement = formElement.querySelector(rule.selector);
                    var isValid = Validate(inputElement,rule);

                    if(!isValid){
                        isFormValid = false;
                    }              
                })
               if(isFormValid){
                   formElement.submit();
                   console.log("abc");
               }

            }
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector] = [rule.test];
            }
            
            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function (inputElement){

                inputElement.onblur = function(){

                    Validate(inputElement,rule);
                   
                }
    
                inputElement.oninput = function(){
    
                    var errorElement = inputElement.parentElement.querySelector(options.errorElement);

                    errorElement.innerText = '';
                    errorElement.parentElement.classList.remove('invalid');
                }
    
                inputElement.onchange = function(){
                    Validate(inputElement,rule);
                }

            })
            
        })
    }
}

Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : message || `Vui lòng nhập trường này`
        }
    }
}

Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : message 
        }
    }
}

Validator.isPassword = function(selector, min, message){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự` 
        }
    }
}

Validator.isConfirmPassword = function(selector, passwordConfirm, message){
    return {
        selector: selector,
        test: function(value){
            return value === passwordConfirm() ? undefined : message
        }
    }
}

Validator.isNoteLength = function(selector, min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

