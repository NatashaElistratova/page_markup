// ------- SLIDER

let sliderImagesSrc = ['images/slider-img.jpg', 'images/post-1-img.jpg'],
  curIndex = -1;

function slideShow() {
  document.getElementById('slider').className += 'fadeOut';
  setTimeout(() => {
    document.getElementById('sliderImg').src = sliderImagesSrc[curIndex];
    document.getElementById('slider').className = '';
  }, 500);
  curIndex++;
  if (curIndex == sliderImagesSrc.length) {
    curIndex = 0;
  }
  setTimeout(slideShow, 5000);
}
slideShow();
