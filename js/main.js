let $links = $('.header__item a');

  $links.on('click', function(e) {
    e.preventDefault();

    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 700);
  });