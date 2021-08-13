        const showList = document.querySelectorAll('.show-list-booked')
        const modalBooking = document.querySelector('.js-modal-booking')
        const modalCloseBooking = document.querySelector('.js-modal-close-booking')
        const modalContainerBooking = document.querySelector('.js-modal-container-booking')


        // Hàm hiển thị list đặt vé(thêm class open vào Modal-booking)
        function showListBooked() {
            modalBooking.classList.add('open')

        }
        //Hàm hiển thị Hide(Ẩn đi form booking)
        function closeShowListBooked() {
            modalBooking.classList.remove('open')
        }

        //Lặp qua từng thẻ Button và nghe hành vi click
        for (const buyBtn of showList) {
            buyBtn.addEventListener('click', showListBooked)
        }

        //Nghe hành vi close vào Button close
        modalCloseBooking.addEventListener('click', closeShowListBooked)
        modalBooking.addEventListener('click', closeShowListBooked)

        modalContainerBooking.addEventListener('click', function(event) {
            event.stopPropagation()

        })
        // Sự kiện xử lý form dành cho admin 
        var price = '';
        var btnBuyTicket = document.querySelector('#buy-tickets');
        var getFormRegistBooking = document.querySelectorAll('.js-buy-ticket');
        getFormRegistBooking.forEach( function(getBtnBooking) {
            getBtnBooking.onclick = function() {
               var getMoney = getBtnBooking.parentElement.querySelector('.place__data>.discount').innerText;
               var getSliceMoney = getMoney.slice(0, getMoney.length - 1).trim().split('.').join('');
               var getPlace = getBtnBooking.parentElement.querySelector('.place__data>.place__title').innerText;
               console.log(getSliceMoney);
                btnBuyTicket.onclick = function() {
                   // Click Buy ticket
                        var inputQuantity = btnBuyTicket.parentElement.querySelector('#quantity').value;
                        var inputEmail = btnBuyTicket.parentElement.querySelector('#mail').value;
   
                        if(inputQuantity == '' || inputEmail == '') {
                             swal({
                                title: "Thất bại!",
                                text: "Vui lòng kiểm tra lại thông tin!",
                                icon: "error",
                                button: "ĐÓNG!",
                              });
                        } else {
                            swal({
                                title: "Xác nhận thông tin",
                                text: "Bạn đã chắc chắn với thông tin đã điền!",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                              })
                              .then((willDelete) => {
                                if (willDelete) {
                                  swal("Cảm ơn đã tin tưởng chúng tôi!", {
                                    icon: "success",
                                    button: "ĐÓNG!",
                                  });
                                  // Đỗ thông tin vào danh sách những người đã đặt
                                  var getBorder = document.querySelector('#table-booking');
                                  if(getBorder) {
                                        let jsonObject = [
                                            {
                                                infor: 'Java Master',
                                                quantity: 'abc',
                                                money: 'ccc'
                                            }
                                        ]
                                    // let trElement = document.createElement('tr');
                                    // // Tạo các thẻ th
                                    // let thElement1 = document.createElement('th');
                                    // thElement1.classList.add('table-booking-body');
                                    // thElement1.innerHTML = `${inputEmail}`

                                    // let thElement2 = document.createElement('th');
                                    // thElement2.classList.add('table-booking-body');
                                    // thElement2.innerHTML = `${inputQuantity}`
                                    
                                    // let thElement3 = document.createElement('th');
                                    // thElement3.classList.add('table-booking-body');
                                    // thElement3.innerHTML = `${getPlace}`

                                    // let thElement4 = document.createElement('th');
                                    // thElement4.classList.add('table-booking-body');
                                    // thElement4.innerHTML = `${getSliceMoney * inputQuantity}`

                                    // let thElement5 = document.createElement('th');
                                    // thElement5.classList.add('table-booking-body');
                                    // thElement5.innerHTML = '<button id="remove" value="Xóa" type="button"><i class="ti-cut" onclick="del(this)"></i>'
                                    // thElement5.setAttribute('onclick','del(this)');
                                    
                                    // // Append ==> trElement
                                    // trElement.appendChild(thElement1);
                                    // trElement.appendChild(thElement2);
                                    // trElement.appendChild(thElement3);
                                    // trElement.appendChild(thElement4);
                                    // trElement.appendChild(thElement5);
                                    // // Get tBody
                                    // let tBody = document.getElementById('body-table');
                                    // tBody.appendChild(trElement);
                                  }
                                  const modal = document.querySelector('.js-modal');
                                  modal.classList.remove('open');
                                } else {
                                  swal("Thông tin của bạn chưa được lưu!");
                        
                                }
                              });
                            // swal({
                            //     title: "Cảm ơn đã tin tưởng chúng tôi!!",
                            //     text: "Hãy tận hưởng chuyến đi của bạn!",
                            //     icon: "success",
                            //     button: "ĐÓNG!",
                            //   });
                        }
                }
            }
           
        })
 
        function del(x){
            swal({
                title: "Xóa chuyến đi này?",
                text: "Hãy kiểm tra thực kĩ trước khi xóa!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Xóa thành công!", {
                        icon: "success",
                        button: "ĐÓNG!",
                    });
                    var tr = x.parentElement;
                    tr.remove();          
                } else {
                  swal("Hoàn tác!");
                }
              });
          // var getTrows = getTbody.getElementsByTagName('tr');
          // Array.from(getTrows).forEach( function(trowElement) {
          //   var getTh = trowElement.getElementsByTagName('th');
          //  getTh[3].innerHTML = 'Đang chờ xử lý'
          // })
        }
    
var isValid = false;
var getFormBooking = document.getElementById('table-booking');
var getFormBookingUser = document.getElementById('table-booking-user');
if(getFormBooking) {
    var getBuyTicket = document.getElementById('buy-tickets2');
    getBuyTicket.onclick = function() {
        var getTbody = document.getElementById('body-table');
        var getTrows = getTbody.getElementsByTagName('tr');
        Array.from(getTrows).forEach( function(trowElement) {
          var getTh = trowElement.getElementsByTagName('th');
          var getText = getTh[4].querySelector('.waiting').innerText.trim();
          console.log(getText)
          if(getText == 'Đang chờ') {
            isValid= true;
          }
        })
        if(isValid) {       
          swal({
            title: "Xác nhận duyệt đơn?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Duyệt thành công!", {
                icon: "success",
              });
              Array.from(getTrows).forEach( function(trowElement) {
                  var getTh = trowElement.getElementsByTagName('th');
                  var setText = getTh[4].querySelector('.waiting');
                  setText.innerHTML = 'Đã duyệt'
                  setText.classList.add('success');
                  var setIcon = getTh[4].querySelector('i');
                  setIcon.classList.remove('ti-timer');
                  setIcon.classList.add('ti-check-box');
                  console.log(getFormBooking);
                  isValid = false;
                  // getTbody.removeChild(trowElement);
              })
            } else {
              swal("Hoàn tác");
            }
          });
        } else {
          swal("Thông báo!", "Không có đơn nào ở trạng thái chờ duyệt!", "warning");
        }
        
        
    }
}
// Form booking of User
var showListUser = document.querySelector('.show-list-booked-user')
var modalBookingUser = document.querySelector('.js-modal-booking-user');
var modalCloseBookingUser = document.querySelector('.js-modal-close-booking-user');
var modalContainerBookingUser = document.querySelector('.js-modal-container-booking-user')
// Hàm show form đặt vé
function showListBookedUser() {
    modalBookingUser.classList.add('open');
}
// Hàm ẩn form đặt vé
function hideListBookedUser() {
    modalBookingUser.classList.remove('open');
}
// Khi Click vào giỏ hàng sẽ hiện thị ra form đã đặt
showListUser.addEventListener('click', showListBookedUser);
// Khi Click vào Close sẽ tắt form
modalCloseBookingUser.addEventListener('click', hideListBookedUser)
modalBookingUser.addEventListener('click', hideListBookedUser)
modalContainerBookingUser.addEventListener('click', function(event) {
    event.stopPropagation()

})
//  Khi USER chọn địa điểm đổ dữ liệu lên bảng USER BOOKING và bảng ADMIN BOOKING
var btnBuyTicketUser = document.querySelector('#buy-tickets');
var getFormRegistBookingUser = document.querySelectorAll('.js-buy-ticket');
getFormRegistBookingUser.forEach( function(getBtnBooking) {
    getBtnBooking.onclick = function() {
        var getMoney = getBtnBooking.parentElement.querySelector('.place__data>.discount').innerText;
        var getSliceMoney = getMoney.slice(0, getMoney.length - 1).trim().split('.').join('');
        var getPlace = getBtnBooking.parentElement.querySelector('.place__data>.place__title').innerText;
        btnBuyTicketUser.onclick = function() {
            var inputQuantity = btnBuyTicket.parentElement.querySelector('#quantity').value;
            var inputEmail = btnBuyTicket.parentElement.querySelector('#mail').value;
            if(inputQuantity == '' || inputEmail == '') {
                swal({
                   title: "Thất bại!",
                   text: "Vui lòng kiểm tra lại thông tin!",
                   icon: "error",
                   button: "ĐÓNG!",
                });
            } else {
                swal({
                    title: "Xác nhận thông tin",
                    text: "Bạn đã chắc chắn với thông tin đã điền!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Cảm ơn đã tin tưởng chúng tôi!", {
                        icon: "success",
                        button: "ĐÓNG!",
                      });
                      // Đỗ thông tin vào danh sách những người đã đặt
                      var getBorder = document.querySelector('#table-booking-user');
                      if(getBorder) {
                         
                        let trElement = document.createElement('tr');
                        // Tạo các thẻ th
                        let thElement1 = document.createElement('th');
                        thElement1.classList.add('table-booking-body');
                        thElement1.innerHTML = `${inputEmail}`

                        let thElement2 = document.createElement('th');
                        thElement2.classList.add('table-booking-body');
                        thElement2.innerHTML = `${inputQuantity}`
                        
                        let thElement3 = document.createElement('th');
                        thElement3.classList.add('table-booking-body');
                        thElement3.innerHTML = `${getPlace}`

                        let thElement4 = document.createElement('th');
                        thElement4.classList.add('table-booking-body');
                        thElement4.innerHTML = `${Number(getSliceMoney * inputQuantity).toLocaleString('vi-VN')} VNĐ`

                        let thElement5 = document.createElement('th');
                        thElement5.classList.add('table-booking-body');
                        // thElement5.innerHTML = '<button id="remove" value="Xóa" type="button"><i class="ti-cut"></i>'
                        thElement5.innerHTML = '<p class="waiting">Đang chờ</p><i class="ti-timer"></i>'
                        // thElement5.setAttribute('onclick','del(this)');
                        trElement.appendChild(thElement1);
                        trElement.appendChild(thElement2);
                        trElement.appendChild(thElement3);
                        trElement.appendChild(thElement4);
                        trElement.appendChild(thElement5);
                         // ĐỔ dữ liệu lên cho bảng ADMIN
                         let tBodyAdmin = document.getElementById('body-table');
                         tBodyAdmin.appendChild(trElement);
                         console.log(tBodyAdmin)
                        // thElement5.setAttribute('onclick','del(this)');
                        // Tạo các thẻ TH cho user
                        // Tạo các thẻ th
                        let trElementUser = document.createElement('tr');
                        let thElementUser1 = document.createElement('th');
                        thElementUser1.classList.add('table-booking-body');
                        thElementUser1.innerHTML = `${inputEmail}`

                        let thElementUser2 = document.createElement('th');
                        thElementUser2.classList.add('table-booking-body');
                        thElementUser2.innerHTML = `${inputQuantity}`
                        
                        let thElementUser3 = document.createElement('th');
                        thElementUser3.classList.add('table-booking-body');
                        thElementUser3.innerHTML = `${getPlace}`

                        let thElementUser4 = document.createElement('th');
                        thElementUser4.classList.add('table-booking-body');
                        thElementUser4.innerHTML = `${Number(getSliceMoney * inputQuantity).toLocaleString('vi-VN')} VNĐ`

                        let thElementUser5 = document.createElement('th');
                        thElementUser5.classList.add('table-booking-body');
                        thElementUser5.innerHTML = '<button id="remove" value="Xóa" type="button"><i class="ti-cut"></i>'
                        thElementUser5.setAttribute('onclick','del(this)');
                        // Append ==> trElement

                        trElementUser.appendChild(thElementUser1);
                        trElementUser.appendChild(thElementUser2);
                        trElementUser.appendChild(thElementUser3);
                        trElementUser.appendChild(thElementUser4);
                        trElementUser.appendChild(thElementUser5);
                        // Get tBody
                        // Đổ dữ liệu lên cho bảng USER
                        let tBodyUser = document.getElementById('body-table-user');
                        tBodyUser.appendChild(trElementUser);
                        console.log(tBodyUser)
                  
                        
                      }
    
                      const modal = document.querySelector('.js-modal');
                      modal.classList.remove('open');
                      
                      
                    } else {
                      swal("Thông tin của bạn chưa được lưu!");
            
                    }
                  });
            }
        }
    }
})
// Gởi mail khi người dùng đặt tour
var getFormBookTour = document.getElementById('table-booking-user');
if(getFormBookTour) {
    var getBuyTicket = document.getElementById('buy-tickets3');
    getBuyTicket.onclick = function() {
        var getTbody = document.getElementById('body-table-user');
        var getTrows = getTbody.getElementsByTagName('tr');
        swal({
          title: "Xác nhận thanh toán",
          text: "Thông tin chuyến đi sẽ được gởi đến mail của bạn!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            Array.from(getTrows).forEach( function(trowElement) {
                var getTh = trowElement.getElementsByTagName('th');
                Email.send({
                    Host : "smtp.gmail.com",
                    Username : "locphan0508@gmail.com",
                    Password : "Loc0935071434",
                    From : "locphan0508@gmail.com",
                    To : `${getTh[0].innerText.trim()}`,
                    Subject : "Thông báo đặt vé máy bay",
                    Body : `Chuyến đi của bạn đến ${getTh[2].innerText}, gồm ${getTh[1].innerText} người,
                     có giá ${getTh[3].innerText} đã được đặt thành công`
                }).then(function (message){
                   
                });
                getTbody.removeChild(trowElement);
            })
            swal("Thông tin đã được tới tới mail của bạn!", {
              icon: "success",
            });
          } else {
            swal("Còn chờ gì mà nữa mà chưa thanh toán!");
          }
        });
        
        
    }
}
// Chức năng lấy lại mật khẩu
var forgotPass = document.querySelector('.forgot-pass');
forgotPass.onclick = function() {
  swal("Nhập tên tài khoản của bạn:", {
    content: "input",
  })
  .then((value) => {
    if(value == 'titanic@gmail.com' || value == 'lcphan512@gmail.com') {
        Email.send({
          Host : "smtp.gmail.com",
          Username : "locphan0508@gmail.com",
          Password : "Loc0935071434",
          From : "locphan0508@gmail.com",
          To : `lcphan512@gmail.com`,
          Subject : "Lấy lại mật khẩu",
          Body : `Mật khẩu của tài khoản ${value}: 123456`
      }).then(function (message){
        swal(`Mật khẩu của bạn đã được gởi tới mail lcphan512@gmail.com`, {
          icon: "success",
        });
      });
    } else {
      swal(`Tài khoản không tồn tại!`);
    }
    
  });
}