// Account Admin
var CORRECT_USER = 'titanic@gmail.com';
var CORRECT_PASS = '123456';
var inputUser = document.getElementById('email');
var inputPassword = document.getElementById('password');
// Account User
var userName = "lcphan512@gmail.com";
var userPassword = "123456";
// Form login
var formLogin = document.getElementById('form-2');
// Get Role
var role = document.querySelector('.nav__item.role');
var getBtn = role.querySelector('.nav__link');
// Hide Form

if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var username = inputUser.value;
    var password = inputPassword.value;
    if (username == CORRECT_USER && password == CORRECT_PASS) {
        alert("Đăng nhập thành công!! Chào Admin");
        role.classList.add('show');
        getBtn.innerHTML = 'ADMIN'
        // hideSigninForm();
    }else if(username == userName && password == userPassword){
        alert("Đăng nhập thành công!! Chào User");
        role.classList.add('show');
        getBtn.innerHTML = 'User'
        // hideSigninForm();
    }else {
        alert("Thất bại trong quá trình đăng nhập!!!")
    }
}
