const menu = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger-menu');
const navItem = document.querySelectorAll('.nav-item');
const projectName = document.querySelector('.proj-name');
const projectBtn = document.querySelector('.proj-btn');
const gotoTop = document.querySelector('.fa-arrow-up');

//eventlistener
hamburger.addEventListener('click', () => {
 hamburger.classList.toggle('change');
  menu.classList.toggle('fadein');
  navItem.forEach(item => {
    item.classList.toggle('fadein');
  });
});

projectName.addEventListener('click', () => {
  projectBtn.style.display = 'block';
});

projectName.addEventListener('mouseleave', () => {
  projectBtn.style.display = 'none';
});

window.addEventListener('load', () => {
  gotoTop.style.display = 'none';
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 200){
    gotoTop.style.display = "block";
  } else {
    gotoTop.style.display = "none";
  }
});

gotoTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0
  });
});

//animations
const scroll = window.requestAnimationFrame || function( callback ) { 
    window.setTimeout( callback, 1000/60)};

  const scroll2 = window.requestAnimationFrame || function( callback ) { 
      window.setTimeout( callback, 1000/60)};

const elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (e) {
        if ( isElementInViewport(e)) {
            e.classList.add('is-visible');
        } else {
            e.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

//if element is shown in viewport
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  