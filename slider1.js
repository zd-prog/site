let index = 1;
ShowSlides(index);

function NextSlide(n){
    ShowSlides(index += n);
}

function currentSlide(n){
    ShowSlides(index = n);
}

function ShowSlides(n){
    let i;
    let slides = document.getElementsByClassName('review_item');

    if (n > slides.length){
        index = 1
    }
    if(n < 1){
        index=slides.length
    }
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
}