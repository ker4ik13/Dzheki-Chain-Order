// jQuery(document).ready(function () {
     
  // Навигация

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

        scrollPrev = 0;
      $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
      
        if (scrolled > 100 && scrolled > scrollPrev ) {
          nav.classList.add('hidden');
        } else {
          nav.classList.remove('hidden');
        }
        scrollPrev = scrolled;
      });
    
// Скролл

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
});

// Открытие формы

const openFormButton = document.querySelector('.page9__titleText');

const form = document.querySelector('.form');
const closeFormButton = document.querySelector('.close__form');
openFormButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.classList.remove('invisible');
  closeFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.classList.add('invisible');
  });
});

// form.addEventListener('submit', formSend);

// async function formSend(event){
//   event.preventDefault();
//   let error = formValidate(form);

// }

// function formValidate(form){
//   let error = 0;
//   let formReq = document.querySelectorAll('required');

//   for (let i = 0; i < formReq.length; i++){
//     const input = formReq[i];
//   }
// }








 jQuery('.form__button').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function() {
          form.find('.status').html('форма отправлена успешно');
       },
       error: function() {
          form.find('.status').html('серверная ошибка');
       }
     });
   }
 });