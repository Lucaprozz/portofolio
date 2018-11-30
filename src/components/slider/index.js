import React, { Component } from 'react'
import './slider.scss'

class Slider extends Component {

    componentDidMount() {
        var slideIndex = 1;
        showSlides(slideIndex);

        window.addEventListener('keyup', (e) => {
            if (e.key == "ArrowLeft") {
                showSlides(slideIndex += -1)
            }
            if (e.key == "ArrowRight") {
                showSlides(slideIndex += 1)
            }
        });

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("slider-image");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
    }
    render() {
        return (
            <section class="slider">
                <div class="slider-image slider-one fade">
                    <div class="slider-text"><span>1 / 5</span><h3>Lorem Ipsum</h3></div>
                </div>
                <div class="slider-image slider-two fade">
                    <div class="slider-text"><span>2 / 5</span><h3>Lorem Ipsum</h3></div>
                </div>
                <div class="slider-image slider-three fade">
                    <div class="slider-text"><span>3 / 5</span><h3>Lorem Ipsum</h3></div>
                </div>
                <div class="slider-image slider-four fade">
                    <div class="slider-text"><span>4 / 5</span><h3>Lorem Ipsum</h3></div>
                </div>
                <div class="slider-image slider-five fade">
                    <div class="slider-text"><span>5 / 5</span><h3>Lorem Ipsum</h3></div>
                </div>
            </section>
        )
    }
}

export default Slider;