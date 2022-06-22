//work with car

car1.start();
window.alert(car1.isTurnOn);
window.alert(car1.speed);
window.alert(car1.engine.isTurnOn);


// find element
var showPrevBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImg = document.getElementById('slide-img');


//subscribe events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);


//creating image array
var imageUrls = [];
imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXCCK8lX9Sq0E5VqH6yvQq7f5jrfigM3AtQ&usqp=CAU');
imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBdvEgD7TfbroDTGn5UxBp6wsDTReeHRZbg&usqp=CAU');
imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvk6iX_MyELX8PhBgFLus4kmtT9m84zSXEQ&usqp=CAU');
imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvxf5q7URWp7EAUxSw_1-RY6fbg4sY8JY0g&usqp=CAU');

var currentImgIndex = 0;
slideImg.src = imageUrls[currentImgIndex];
showPrevBtn.disabled = true;



//function definitions

function onShowPrevBtnClick () {
    currentImgIndex--;
    slideImg.src = imageUrls[currentImgIndex];
    showNextBtn.disabled = false;
    //disable Prev button if needed
    if (currentImgIndex === 0) {
        showPrevBtn.disabled = true;
    }
}


function onShowNextBtnClick () {
    currentImgIndex++;
    slideImg.src = imageUrls[currentImgIndex];
    showPrevBtn.disabled = false;
    //disable Next button if needed
    if (currentImgIndex === (imageUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
}