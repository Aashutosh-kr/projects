// for hiding sidebar
const hamIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const nav = document.getElementById("navbar");
const navLinks = document.querySelector("nav *");

// to show nav
let showNav = () => {
    nav.classList.remove("nav-hidden");
    hamIcon.style.display = 'none';
    setTimeout(() => {
        closeIcon.style.display = 'inline-block';
    }, 500)
}
// to hide nav
let hideNav = () => {
    nav.classList.add("nav-hidden");
    closeIcon.style.display = 'none';
    setTimeout(() => {
        hamIcon.style.display = 'inline-block';
    }, 500)
}

closeIcon.style.display = 'none';
hamIcon.addEventListener("click", () => {
    if (nav.classList.contains("nav-hidden")) {
        showNav();
    }
});
closeIcon.addEventListener("click", () => {
    if (!nav.classList.contains("nav-hidden")) {
        hideNav();
    }
});

// For hiding navbar when clicked outside nav
document.addEventListener('click', (event) => {
    if (!nav.classList.contains("nav-hidden") && event.target !== hamIcon && event.target !== nav && event.target !== navLinks) {
        hideNav();
    } else {
        return;
    }
});