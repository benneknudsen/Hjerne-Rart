window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})


AOS.init();

$('.slider').slick({
    infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      fadeSpeed: 1000
  });