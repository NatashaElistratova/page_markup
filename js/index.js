// ------- SLIDER

let slides = [
    {
      src: 'images/slider-img.jpg',
      date: '20 August 2017',
      text: 'Kuril Islands'
    },
    {
      src: 'images/post-1-img.jpg',
      date: '20 August 2017',
      text: 'Kuril Islands'
    }
  ],
  curIndex = -1;

function slideShow() {
  document.getElementById('slider').className += 'fadeOut';
  setTimeout(() => {
    document.getElementById('sliderImg').src = slides[curIndex].src;
    document.getElementById('slideDate').innerHTML = slides[curIndex].date;
    document.getElementById('slideTitle').innerHTML = slides[curIndex].text;
    document.getElementById('slider').className = '';
  }, 500);
  curIndex++;
  if (curIndex == slides.length) {
    curIndex = 0;
  }
  setTimeout(slideShow, 5000);
}
slideShow();

//----------- CONTACT FORM
let link = document.getElementById('contactLink');
let modal = document.getElementById('contactForm');
let btn = document.getElementById('btnClose');

btn.addEventListener('click', onFormHide);
link.addEventListener('click', onFormShow);

function onFormShow() {
  modal.style.display = 'flex';
  fadeIn(modal);
}

function onFormHide() {
  modal.style.opacity = '0';
  modal.style.display = 'none';
}

function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}
