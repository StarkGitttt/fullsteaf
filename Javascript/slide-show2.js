var picArr = [];
var currentIndex = 0;

var getPicture = document.querySelector('#picture')
var getSpanElement = document.querySelector('span')
var getBody = document.querySelector('body');
for(var i = 0; i < 4; i++){
    picArr[i] = new Image();
    picArr[i].src = `picture${i}.jpg`
}

// Xác định độ dài của Arr

var lengthArr = picArr.length - 1
// Định nghĩa nút next
function next(){
    currentIndex++;
    if(currentIndex >= picArr.length){
        currentIndex = 0;
    }
    getPicture.src = picArr[currentIndex].src;
    count(currentIndex, lengthArr)
}

// Định nghĩa nút previous
function previous(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = picArr.length - 1;
    }
    getPicture.src = picArr[currentIndex].src;
    count(currentIndex, lengthArr)
}

// Định nghĩa nút Firstly

function firstly(){
    currentIndex = 0;
    getPicture.src = picArr[currentIndex].src;
    count(currentIndex, lengthArr)
}

// Định nghĩa nút Last

function last(){
    var picArrLength = picArr.length - 1;
    getPicture.src = picArr[picArrLength].src;
    count(picArrLength, lengthArr)
}

function count(index, max){
    getSpanElement.innerText = `Số trang ${index}/${max}`
}
