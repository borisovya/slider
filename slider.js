var slider1 = {
    imageUrls: [],
    currentImgIndex: 0,
    showPrevBtn: document.getElementById('show-prev'),
    showNextBtn: document.getElementById('show-next'),
    slideImg: document.getElementById('slide-img'),

    methodStart: function () {
        //subscribe events
        this.showPrevBtn.addEventListener('click', this.onShowPrevBtnClick),
        this.showNextBtn.addEventListener('click', this.onShowNextBtnClick),


        //creating image array
        this.imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXCCK8lX9Sq0E5VqH6yvQq7f5jrfigM3AtQ&usqp=CAU');
        this.imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBdvEgD7TfbroDTGn5UxBp6wsDTReeHRZbg&usqp=CAU');
        this.imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvk6iX_MyELX8PhBgFLus4kmtT9m84zSXEQ&usqp=CAU');
        this.imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvxf5q7URWp7EAUxSw_1-RY6fbg4sY8JY0g&usqp=CAU');


        this.slideImg.src = this.imageUrls[this.currentImgIndex];
        this.showPrevBtn.disabled = true;
    },


    onShowPrevBtnClick: function (e) {
        this.currentImgIndex--;
        this.slideImg.src = this.imageUrls[this.currentImgIndex];
        this.showNextBtn.disabled = false;
        //disable Prev button if needed
        if (this.currentImgIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImgIndex++;
        this.slideImg.src = this.imageUrls[this.currentImgIndex];
        this.showPrevBtn.disabled = false;
        //disable Next button if needed
        if (this.currentImgIndex === (this.imageUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    },


};
