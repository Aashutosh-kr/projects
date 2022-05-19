const ham = document.querySelector('.menu');
const products = document.querySelector('#products');
const more = document.querySelector('#more');
const moreBtn = document.querySelector('#more-btn');
const moreList = document.querySelector('#more>ul');
const all = document.querySelector('#all');
const allBtn = document.querySelector('#all-btn');
const allList = document.querySelector('#all>ul');
const allListItem = document.querySelectorAll('#all ul li');

ham.addEventListener('click', () => {
    let arr = [products, more, all];
    arr.forEach(element => {
        element.classList.toggle('invisible');
        element.classList.toggle('h-0');
        element.classList.toggle('z-50');
    });

    let list = [products, moreList, allList];
    list.forEach(element => {
        element.classList.toggle('opacity-0');
    });
});

moreBtn.addEventListener('click', function () {
    moreList.classList.toggle('opacity-0');
    moreList.classList.toggle('left-0');
    moreList.classList.toggle('md:-z-30');
    this.children[1].classList.toggle('rotate-90');
});

allBtn.addEventListener('click', function () {
    allList.classList.toggle('opacity-0');
    allList.classList.toggle('md:-z-30');
    this.children[1].classList.toggle('rotate-90');
});

Array.from(allListItem).forEach(element => {
    element.addEventListener('click', function () {
        console.log(this);
        console.dir(this);
        this.children[1].classList.toggle('rotate-90');
    });
});