var getTrowElementss = document.querySelectorAll('table tbody tr');

function ValidateTable(){

	getTrowElementss.forEach( function(trowElements){
		trowElements.style.display = 'table-row'

		var checked = trowElements.querySelector('input[type="checkbox"]');
		checked.setAttribute('onchange', 'changeCheckbox(this)');

		var count = trowElements.querySelector('input[type="number"]');
		count.setAttribute('onchange', 'changeNumber(this)');
		
		console.log(trowElements)
	})
}

ValidateTable();

function checkAll(objectCheck){

	var check_true = objectCheck.checked;
	getTrowElementss.forEach( function(trowElements){

		var inputCheck = trowElements.querySelector('input[type="checkbox"]');
		inputCheck.checked = check_true;

		var count = trowElements.querySelector('input[type="number"]');
		count.disabled = !check_true ? true : false
	})
}

function changeCheckbox(inputCheckbox){
	var check_true = inputCheckbox.checked;

	getTrowElementss.forEach(function (trowElements){
		var count = trowElements.querySelector('input[type="number"]');

		count.disabled = !check_true ? true : false
	})
}
// Lí do không change ở HTML gốc luôn mà phải qua JS mới set Onchange cho nó
// Đơn giản vì đỡ mất công, qua JS forEach nó set Onchage hết cho input có type Number
// Đỡ mất công và lí do phải gọi lại function Validatable() luôn
function changeNumber(inputNumber){

	var count = inputNumber.value;

	var tdPrice = inputNumber.parentElement.previousElementSibling.innerText;
	var thElement = inputNumber.parentElement.nextElementSibling;
	thElement.innerText = count * Number(tdPrice)
	sumPrice();
}

function sumPrice(){
	
	var sum = 0;
	getTrowElementss.forEach( function(trowElements){
		if(trowElements.style.display = 'table-row'){
			var thElement = trowElements.lastElementChild.innerText;
			sum += Number(thElement)
		}
	})
	var total = document.querySelector('#tongtien');
	total.innerText = sum;
}



var getButtonElement = document.querySelector('#btn');
getButtonElement.onclick = function(){
	var checkConfirm = confirm('Chấp nhận làm mới danh sách')
	var tHeadings = document.querySelectorAll('table tbody th')
	tHeadings.forEach( function(tHead){
		if(checkConfirm === true){
			tHead.innerText = ''
		}else{
	
		}
	})
	var inputs = document.querySelectorAll('input[type="number"]');
	inputs.forEach( function(input){
		if(checkConfirm === true){
			input.value = 0;
		}else{
	
		}
	})
	var total = document.querySelector('#tongtien');
	if(checkConfirm === true){
		total.innerText = ''
	}	
}

function filterProduct(objSelect){
	var list_tr = document.querySelectorAll("table tbody tr");
	console.log(list_tr);
	switch(objSelect.value){
		case "0":
		for(var i=0 ; i<list_tr.length; i++){
				list_tr[i].style.display = "table-row";
			}
		break;
		
		case "1":
		for(var i = 0; i<list_tr.length;i++){
			var td_dongia = list_tr[i].children[2].innerHTML;
			if(Number(td_dongia)<100){
				list_tr[i].style.display = "table-row";
			}else{
				list_tr[i].style.display = "none";
			}
		}
		break;

		case "2":
		for(var i=0 ; i<list_tr.length; i++){
			var td_dongia = list_tr[i].children[2].innerHTML;
			if(Number(td_dongia)>100 && Number(td_dongia)<500){
				list_tr[i].style.display = "table-row";
			}else{
				list_tr[i].style.display = "none";
			}
		}
		break;
		case "3":
		for(var i=0;i<list_tr.length;i++){
			var td_dongia=list_tr[i].children[2].innerHTML;
			if(Number(td_dongia)>500){
				list_tr[i].style.display = "table-row";
			}else{
				list_tr[i].style.display = "none";
			}
		}
		break;

		default: 
		for(var i=0;i<list_tr.length;i++){
				list_tr[i].style.display = "table-row";
			}
		break;
	}
}

