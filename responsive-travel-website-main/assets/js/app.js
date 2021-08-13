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
// Show Form Booking
var formBookingAdmin = document.querySelector('.list-booked');
var formBookingUser = document.querySelector('.list-booked-user');
if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    var username = inputUser.value;
    var password = inputPassword.value;
    if (username == CORRECT_USER && password == CORRECT_PASS) {
        swal({
                title: "Đăng nhập thành công!",
                text: "Chào, ADMIN!",
                icon: "success",
                button: "ĐÓNG!",
            });
        role.classList.add('show');
        getBtn.innerHTML = 'ADMIN'
        formBookingAdmin.classList.add('list-show');
        formBookingUser.classList.remove('list-show');
        // hideSigninForm();
    }else if(username == userName && password == userPassword){
        swal({
            title: "Đăng nhập thành công!",
            text: "Chào, USER!",
            icon: "success",
            button: "ĐÓNG!",
        });
        role.classList.add('show');
        getBtn.innerHTML = 'User'
        // hideSigninForm();
        formBookingUser.classList.add('list-show');
        formBookingAdmin.classList.remove('list-show');
    }else {
        swal({
            title: "Đăng nhập thất bại!",
            text: "Vui lòng kiểm tra lại thông tin!",
            icon: "error",
            button: "ĐÓNG!",
          });
    }
}
