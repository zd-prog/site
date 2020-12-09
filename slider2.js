let index_of_slides = 1;
showSlides(index_of_slides);

function Next(n){
    showSlides(index_of_slides += n);
}

function currentSlide(n){
    showSlides(index_of_slides = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('slider_item');

    if (n > slides.length){
        index_of_slides = 1
    }
    if(n < 1){
        index_of_slides=slides.length
    }
    for(i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[index_of_slides-1].style.display = "block";
}