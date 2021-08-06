var picArr = [];
var currentIndex = 0;

var getPicture = document.querySelector('.img');

var getParagraph = document.querySelector('p');

for(var i = 0; i< 3; i++){
    picArr[i] = new Image();
    picArr[i].src = `anh${i}.jpg`
}
var lengthArr = picArr.length - 1;

function next(){
    currentIndex++;
    if(currentIndex >= picArr.length){
        currentIndex = 0;
    }
    getPicture.src = picArr[currentIndex].src;
    count(currentIndex, lengthArr)
}

function previous(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = picArr.length - 1 ;
    }
    getPicture.src = picArr[currentIndex].src;
    count(currentIndex, lengthArr)
}

function firs(){
    currentIndex = 0;
    getPicture.src = picArr[currentIndex].src
    count(currentIndex, lengthArr)
}

function last(){
    currentIndex = lengthArr;
    getPicture.src = picArr[currentIndex].src
    count(currentIndex, lengthArr)
}

function count(index, max){
    getParagraph.innerText = `Số trang ${index}/${max}`
}