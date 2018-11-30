var slideIndex = 1;
showSlides(slideIndex);

let isPlaying = false;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    if(e.key == "ArrowLeft") {
        showSlides(slideIndex += -1)
    }
    if(e.key == "ArrowRight") {
        showSlides(slideIndex += 1)
    }
});

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";


}
function auto(l) {
    if (l == 3 && !isPlaying) {
            isPlaying = true;
            play();
            function play() {
                if(isPlaying) {
                    var i;
                    var x = document.getElementsByClassName("slider-image");
                    for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none";
                    }
                    slideIndex++;
                    if (slideIndex > x.length) {
                        slideIndex = 1
                    }
                    x[slideIndex - 1].style.display = "block";
                    console.log(isPlaying);
                    setTimeout(play, 3000);
                }
            }
    }

    if (l == 4) {
        isPlaying = false;
        console.log(isPlaying);
    }
}