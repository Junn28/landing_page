var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var jumbotron = document.getElementsByClassName('jumbotron');
var slide = 1;

showSlide(slide);
next.addEventListener('click', function (e) {
  e.preventDefault;
  slide += 1;
  showSlide(slide);
});

prev.addEventListener('click', function (e) {
  e.preventDefault;
  slide -= 1;
  showSlide(slide);
});

function showSlide(n) {
  if (n > jumbotron.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = jumbotron.length;
  }
  for (var i = 0; i < jumbotron.length; i++) {
    jumbotron[i].style.display = 'none';
  }
  jumbotron[slide - 1].style.display = 'block';
}

var menu = document.querySelector('.menu');
menu.addEventListener('click', function (e) {
  var nav = document.getElementsByClassName('container-link');
  e.preventDefault;
  for (var i = 0; i < nav.length; i++) {
    if (nav[i].style.display === 'block') {
      nav[i].style.display = 'none';
    } else {
      nav[i].style.display = 'block';
    }
  }
});
