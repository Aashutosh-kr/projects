let left = document.querySelector('#left');
let right = document.querySelector('#right');
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');

slider = () => {
    left.classList.toggle('-translate-x-full');
    right.classList.toggle('-translate-x-full');
}
setInterval(() => {
    slider();
}, 4000);

[leftBtn,rightBtn].forEach(element => {
    element.addEventListener('click',()=>{
        slider();
    });
});