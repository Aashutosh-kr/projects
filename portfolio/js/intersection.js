const sliders = document.querySelectorAll('.slide-in');

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        } else {
            return;
        }
    })
}, {
    // options
    rootMargin: "0px 0px -10% 0px"
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


/* For showing scroll to top button */

const wrapper = document.querySelector('#wrapper');
const topbtn = document.querySelector('.topbtn');
const btnDiv = document.querySelector('.btns-div');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            topbtn.classList.remove("invisible");
            btnDiv.classList.remove("hidden");
        } else{
            topbtn.classList.add("invisible");
            btnDiv.classList.add("hidden");
        }
    })
},{
    threshold:0.1
});
observer.observe(wrapper);