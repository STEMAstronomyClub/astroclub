const menu = document.getElementById("menu");
const list = document.getElementById("list");
const back = document.getElementById("back");
const logo = document.getElementById("logo");

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("joinUsModal");
    const joinBtn = document.querySelector(".joinUS");
    const closeBtn = document.querySelector(".close");

    joinBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("active"), 10);
    });

    closeBtn.addEventListener("click", function () {
        modal.classList.add("closing");
        setTimeout(() => {
            modal.classList.remove("active", "closing");
            modal.style.display = "none";
        }, 500);
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("closing");
            setTimeout(() => {
                modal.classList.remove("active", "closing");
                modal.style.display = "none";
            }, 500);
        }
    });
});

function drop() {
    const currentHeight = window.getComputedStyle(menu).height;
    if (currentHeight === "0px") {
        menu.style.height = "360px";
        back.style.borderBottom = "1px solid rgba(255, 255, 255, 0.3)";
    } else {
        menu.style.height = "0";
        back.style.borderBottom = "none";
    }
}

list.addEventListener('click', drop, { once: false });

window.addEventListener("resize", function () {

    if (window.innerWidth > 1000) {
        menu.style.height = "0";
    }
});


function home() {
    window.location.href = "index.html";
}
logo.addEventListener('click', home);


let slideIndex1 = 0; // Current slide index
let startX1 = 0;
let endX1 = 0;
const slidesWrapper1 = document.querySelector('.slides-wrapper1');
const slides1 = document.querySelectorAll('.mySlides1');
const dots1 = document.querySelectorAll('.dot1');
const totalSlides1 = slides1.length;

slidesWrapper1.addEventListener("touchstart", (e) => {
    startX1 = e.touches[0].clientX;
});

slidesWrapper1.addEventListener("touchend", (e) => {
    endX1 = e.changedTouches[0].clientX;
    handleSwipe1();
});

function handleSwipe1() {
    if (startX1 - endX1 > 50) {
        // Swiped left → Move to the next slide
        plusSlides1(1);
    } else if (endX1 - startX1 > 50) {
        // Swiped right → Move to the previous slide
        plusSlides1(-1);
    }
}

function showSlides1(index) {
    // Adjust index for infinite looping
    if (index >= totalSlides1) {
        slideIndex1 = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex1 = totalSlides1 - 1; // Go to the last slide
    } else {
        slideIndex1 = index;
    }

    // Apply transform to shift the slides
    const offset1 = -slideIndex1 * 100; // Calculate percentage offset
    slidesWrapper1.style.transform = `translateX(${offset1}%)`;

    // Update the active dot
    updateDots1();
}

function plusSlides1(n) {
    showSlides1(slideIndex1 + n); // Move to next/previous slide
}

function currentSlide1(n) {
    showSlides1(n); // Show the slide at the specific index
}

function updateDots1() {
    // Remove active class from all dots
    dots1.forEach(dot => dot.classList.remove("active"));

    // Add active class to the current dot
    dots1[slideIndex1].classList.add("active");
}

// Initially show the first slide
showSlides1(slideIndex1);

// Event listeners for arrows
document.querySelector(".prev1").addEventListener("click", function() {
    plusSlides1(0);
});

document.querySelector(".next1").addEventListener("click", function() {
    plusSlides1(0);
});

// Event listeners for dots
dots1.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide1(index);
    });
});

let slideIndex2 = 0; // Current slide index
let startX2 = 0;
let endX2 = 0;
const slidesWrapper2 = document.querySelector('.slides-wrapper2');
const slides2 = document.querySelectorAll('.mySlides2');
const dots2 = document.querySelectorAll('.dot2');
const totalSlides2 = slides2.length;

slidesWrapper2.addEventListener("touchstart", (e) => {
    startX2 = e.touches[0].clientX;
});

slidesWrapper2.addEventListener("touchend", (e) => {
    endX2 = e.changedTouches[0].clientX;
    handleSwipe2();
});

function handleSwipe2() {
    if (startX2 - endX2 > 50) {
        // Swiped left → Move to the next slide
        plusSlides2(1);
    } else if (endX2 - startX2 > 50) {
        // Swiped right → Move to the previous slide
        plusSlides2(-1);
    }
}

function showSlides2(index) {
    // Adjust index for infinite looping
    if (index >= totalSlides2) {
        slideIndex2 = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex2 = totalSlides2 - 1; // Go to the last slide
    } else {
        slideIndex2 = index;
    }

    // Apply transform to shift the slides
    const offset2 = -slideIndex2 * 100; // Calculate percentage offset
    slidesWrapper2.style.transform = `translateX(${offset2}%)`;

    // Update the active dot
    updateDots2();
}

function plusSlides2(n) {
    showSlides2(slideIndex2 + n); // Move to next/previous slide
}

function currentSlide2(n) {
    showSlides2(n); // Show the slide at the specific index
}

function updateDots2() {
    // Remove active class from all dots
    dots2.forEach(dot => dot.classList.remove("active"));

    // Add active class to the current dot
    dots2[slideIndex2].classList.add("active");
}

// Initially show the first slide
showSlides2(slideIndex2);

// Event listeners for arrows
document.querySelector(".prev2").addEventListener("click", function() {
    plusSlides2(-1);
});

document.querySelector(".next2").addEventListener("click", function() {
    plusSlides2(1);
});

// Event listeners for dots
dots2.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide2(index);
    });
});

let slideIndex3 = 0; // Current slide index
let startX3 = 0;
let endX3 = 0;
const slidesWrapper3 = document.querySelector('.slides-wrapper3');
const slides3 = document.querySelectorAll('.mySlides3');
const dots3 = document.querySelectorAll('.dot3');
const totalSlides3 = slides3.length;

slidesWrapper3.addEventListener("touchstart", (e) => {
    startX3 = e.touches[0].clientX;
});

slidesWrapper3.addEventListener("touchend", (e) => {
    endX3 = e.changedTouches[0].clientX;
    handleSwipe3();
});

function handleSwipe3() {
    if (startX3 - endX3 > 50) {
        // Swiped left → Move to the next slide
        plusSlides3(1);
    } else if (endX3 - startX3 > 50) {
        // Swiped right → Move to the previous slide
        plusSlides3(-1);
    }
}


function showSlides3(index) {
    // Adjust index for infinite looping
    if (index >= totalSlides3) {
        slideIndex3 = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex3 = totalSlides3 - 1; // Go to the last slide
    } else {
        slideIndex3 = index;
    }

    // Apply transform to shift the slides
    const offset3 = -slideIndex3 * 100; // Calculate percentage offset
    slidesWrapper3.style.transform = `translateX(${offset3}%)`;

    // Update the active dot
    updateDots3();
}

function plusSlides3(n) {
    showSlides3(slideIndex3 + n); // Move to next/previous slide
}

function currentSlide3(n) {
    showSlides3(n); // Show the slide at the specific index
}

function updateDots3() {
    // Remove active class from all dots
    dots3.forEach(dot => dot.classList.remove("active"));

    // Add active class to the current dot
    dots3[slideIndex3].classList.add("active");
}

// Initially show the first slide
showSlides3(slideIndex3);

// Event listeners for arrows
document.querySelector(".prev3").addEventListener("click", function() {
    plusSlides3(-1);
});

document.querySelector(".next3").addEventListener("click", function() {
    plusSlides3(1);
});

// Event listeners for dots
dots3.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide3(index);
    });
});