/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#111111";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "none";

    }

});

/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const reveals = document.querySelectorAll(
    ".program-card, .gallery-item, .why-card, .step, .about-image, .about-content"
);

function revealElements(){

    const trigger = window.innerHeight - 120;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* ==========================
   ACTIVE NAVIGATION LINK
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("current");

        }

    });

});

/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

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

/* ==========================
   AUTO GALLERY SLIDER
========================== */

const galleryItems = document.querySelectorAll(".gallery-item");

let galleryIndex = 0;

setInterval(() => {

    galleryItems.forEach(item => {

        item.style.opacity = "0.6";

    });

    galleryItems[galleryIndex].style.opacity = "1";

    galleryItems[galleryIndex].style.transform = "scale(1.03)";

    setTimeout(() => {

        galleryItems[galleryIndex].style.transform = "scale(1)";

    }, 5000);

    galleryIndex++;

    if(galleryIndex >= galleryItems.length){

        galleryIndex = 0;

    }

}, 6000);

/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter, 25);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* ==========================
   PARALLAX HERO EFFECT
========================== */

window.addEventListener("scroll", () => {

    const heroVideo = document.querySelector(".hero-video");

    if(heroVideo){

        const value = window.scrollY * 0.2;

        heroVideo.style.transform =
            `translateY(${value}px) scale(1.1)`;

    }

});

/* ==========================
   INQUIRY FORM DEMO
========================== */

const form = document.querySelector(".inquiry-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
            "Thank you for your inquiry. Our admissions team will contact you soon."
        );

        form.reset();

    });

}

/* ==========================
   SMOOTH BUTTON HOVER
========================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

/* ==========================
   PRELOADER EFFECT
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
   DYNAMIC YEAR
========================== */

const yearElement = document.querySelector(".year");

if(yearElement){

    yearElement.textContent = new Date().getFullYear();

}