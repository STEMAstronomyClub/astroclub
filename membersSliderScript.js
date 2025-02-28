document.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let slideIndex = 0;
    let startX = 0;
    let endX = 0;

    slidesWrapper.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    slidesWrapper.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        if (startX - endX > 50) {
            nextSlide();
        } else if (endX - startX > 50) {
            prevSlide();
        }
    }

    function showSlides(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }

        slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[slideIndex]) dots[slideIndex].classList.add("active");
    }

    function nextSlide() {
        showSlides(slideIndex + 1);
    }

    function prevSlide() {
        showSlides(slideIndex - 1);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlides(index);
        });
    });

    document.querySelector('.nav-button-next').addEventListener('click', nextSlide);
    document.querySelector('.nav-button-prev').addEventListener('click', prevSlide);

    showSlides(slideIndex);
});