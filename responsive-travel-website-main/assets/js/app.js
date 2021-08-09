var CORRECT_USER = 'titanic@gmail.com';
var CORRECT_PASS = '123456';
var inputUser = document.getElementById('email');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-2');

if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var username = inputUser.value;
    var password = inputPassword.value;
    if (username == CORRECT_USER && password == CORRECT_PASS) {
        alert("Đăng nhập thành công!! Chào Admin")



    } else {
        alert("Thất bại trong quá trình đăng nhập!!!")
    }
}