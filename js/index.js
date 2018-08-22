// ------- SLIDER

let slides = [
  {src:'images/slider-img.jpg', date:'20 August 2017', text:'Kuril Islands'},
  {src:'images/post-1-img.jpg', date:'20 August 2017', text:'Kuril Islands'}
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
