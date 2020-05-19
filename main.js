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
          imagesLoaded: true,
          fadeSpeed: 2000
    });
  });

  function inViewport($el) {
    var H = $(window).height(),
        r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? H-t : (b<H?b:H));  
}

$(window).on("scroll resize", function(){
  var window_offset = inViewport($('.intro')); 
  $(".overlay").height(window_offset);
  $(".caption").css("bottom", (window_offset / 4) );
});


$(document).ready(function () {
  $('#drawer-togglem').click(function () {
    $('#nav-icon1m').toggleClass('open');
  });
});


$('.carousel').flickity({
  cellAlign:			'center',
  contain:			true
  
});