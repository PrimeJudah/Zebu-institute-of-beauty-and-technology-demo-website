/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* =========================
   HERO VIDEO SOUND
========================= */

const heroVideo = document.getElementById("heroVideo");
const soundBtn = document.getElementById("soundBtn");

if(heroVideo && soundBtn){

    soundBtn.addEventListener("click", () => {

        heroVideo.muted = !heroVideo.muted;

        if(heroVideo.muted){

            soundBtn.textContent = "Enable Sound";

        }else{

            soundBtn.textContent = "Mute Sound";

        }

        heroVideo.play();

    });

}

/* =========================
   STICKY NAVBAR EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.style.background = "#111";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "none";

    }

});

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* =========================
   FORM SUBMISSION DEMO
========================= */

const inquiryForm = document.querySelector(".inquiry-form");

if(inquiryForm){

    inquiryForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
            "Thank you for your inquiry. Our admissions team will contact you shortly."
        );

        inquiryForm.reset();

    });

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
".course-card, .testimonial, .about-image, .about-text, .gallery-grid img"
);

function revealOnScroll(){

    const triggerBottom = window.innerHeight - 100;

    revealElements.forEach(element => {

        const boxTop = element.getBoundingClientRect().top;

        if(boxTop < triggerBottom){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   ACTIVE NAV LINKS
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");

        }

    });

});

/* =========================
   IMAGE AUTO HIGHLIGHT
========================= */

const images = document.querySelectorAll(".gallery-grid img");

let currentImage = 0;

setInterval(() => {

    images.forEach(img => {

        img.style.transform = "scale(1)";
        img.style.opacity = "0.85";

    });

    images[currentImage].style.transform = "scale(1.05)";
    images[currentImage].style.opacity = "1";

    currentImage++;

    if(currentImage >= images.length){

        currentImage = 0;

    }

}, 6000);

/* =========================
   SMOOTH BUTTON EFFECT
========================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});