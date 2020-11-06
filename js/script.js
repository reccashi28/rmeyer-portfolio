const menu = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger-menu');
const navItem = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
 hamburger.classList.toggle('change');
  menu.classList.toggle('fadein');
  navItem.forEach(item => {
    item.classList.toggle('fadein');
  });
});


var scroll = window.requestAnimationFrame || function( callback ) { 
    window.setTimeout( callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

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

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
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

  