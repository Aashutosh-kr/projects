/* For changing nav styles */

const welcomeSection = document.querySelector('#welcome-section');
// const nav = document.querySelector('#navbar'); // already declared in navigation.js

const welcomeSectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('sticky');
            nav.classList.add('nav-bg-pri');
            nav.classList.remove('nav-bg-sec');
        } else {
            nav.classList.add('sticky');
            nav.classList.remove('nav-bg-pri');
            nav.classList.add('nav-bg-sec');
        }
    });
}, {
    threshold: 0.1
});

welcomeSectionObserver.observe(welcomeSection);