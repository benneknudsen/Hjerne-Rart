window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})


AOS.init(100);



  $(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000, 
        pauseOnHover: false,
        dots: true,
          arrows: false,
          fade: true,
          fadeSpeed: 2000
    });
  });