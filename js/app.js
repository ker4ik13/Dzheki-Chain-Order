const nav = document.querySelector('.nav'),
      page1 = $('#page1'),
      page1Height = page1.innerHeight(),
      navBtn = $('#nav__btn');

      $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    
        /* fixed navbar */
    
      function checkScroll(scrollOffset){
    
        if(scrollOffset >= page1Height){
          nav.classList.add("fixed");
        } else {
          nav.classList.remove("fixed");
        }}});

$('[data-scroll]').on('click', function(event) {
  event.preventDefault();
  
  let elementId = $(this).data('scroll');
  let elementOffset = $(elementId).offset().top;

  if(nav.classList.contains('fixed' )){
    $('html, body').animate({
      scrollTop: elementOffset - 100
  }, 1000)
  } else {
    $('html, body').animate({
      scrollTop: elementOffset
  }, 1000)
  }
})







