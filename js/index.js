// Selectors

const getStartedBtn = document.querySelector('.get-started');
const signupBtns = document.querySelectorAll('.signup');
const loginBtns = document.querySelectorAll('.login');
const aboutBtns = document.querySelectorAll('.about');
const loginOverlay = document.querySelector('.login-overlay');
const signupOverlay = document.querySelector('.signup-overlay');
const aboutOverlay = document.querySelector('.about-overlay');
const closeSignupBtn = document.querySelector('.close-signup');
const closeLoginBtn = document.querySelector('.close-login');
const closeAboutBtn = document.querySelector('.close-about');

// Event Listeners

getStartedBtn.addEventListener('click', openSignupOverlay);
signupBtns.forEach(btn => btn.addEventListener('click', openSignupOverlay));
loginBtns.forEach(btn => btn.addEventListener('click', openLoginOverlay));
aboutBtns.forEach(btn => btn.addEventListener('click', openAboutOverlay));
closeAboutBtn.addEventListener('click', closeAboutOverlay);
closeSignupBtn.addEventListener('click', closeSignupOverlay);
closeLoginBtn.addEventListener('click', closeLoginOverlay);


// Functioons

function openSignupOverlay(e) {
    e.preventDefault();
    signupOverlay.classList.add('signup-active');    
} 

function openLoginOverlay(e){
    e.preventDefault();
    loginOverlay.classList.add('login-active');
}

function openAboutOverlay(e){
    e.preventDefault();
    aboutOverlay.classList.add('about-active'); 
}

function closeAboutOverlay(e){
    e.preventDefault();
    aboutOverlay.classList.remove('about-active');
}

function closeLoginOverlay(e){
    e.preventDefault();
    loginOverlay.classList.remove('login-active');
}

function closeSignupOverlay(e){
    e.preventDefault();
    signupOverlay.classList.remove('signup-active');
}

