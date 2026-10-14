/* =====================================================
   NAVBAR MOBILE
===================================================== */

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = navToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close menu when clicking navigation */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = navToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText = document.getElementById("typing-text");

const words = [
    "Informatics Student",
    "Web Developer",
    "Programmer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


/* =====================================================
   PROJECT LINK PROTECTION
===================================================== */

const disabledLinks =
    document.querySelectorAll(".disabled-link");

disabledLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Project ini masih dalam tahap penyusunan SRS."
        );

    });

});