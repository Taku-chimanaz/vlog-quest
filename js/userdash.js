const leftNav = document.querySelector('.left-nav');
const rightNav = document.querySelector('.right-nav');
const burger = document.querySelector('.burger');
const userProfile = document.querySelector('.user-profile');


burger.addEventListener('click', openLeftNav);
userProfile.addEventListener('click', openRightNav);

function openLeftNav(){
    leftNav.classList.toggle('left-nav-active');
}

function openRightNav(){
    rightNav.classList.toggle('right-nav-active');
}
