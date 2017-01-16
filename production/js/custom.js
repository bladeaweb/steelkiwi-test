;(function ($) {
  // Flex menu
  $(window).load(function () {
    $('.js-flex-menu').flexMenu({
      showOnHover: true,
      linkTextAll: "<i class='material-icons'>menu</i>",
      linkText: "<i class='material-icons'>more_vert</i>"
    })
  });
  // Grid list
  $(document).ready(function () {
    var gridRotatorOpt = {
      rows : 1,
      columns : 6,
      maxStep: 2,
      w1024: {
        rows : 1,
        columns : 5
      },
      w768: {
        rows : 1,
        columns : 4
      },
      w480: {
        rows : 1,
        columns : 3
      },
      animType: 'rotateBottom',
      preventClick : false
    };
    $('.js-grid-slider').gridrotator(gridRotatorOpt);
  });
  //Slick carousel
  $(document).ready(function () {
    $('.js-single-carousel').slick({
      dots: false,
      fade: true,
      autoplay: true,
      pauseOnHover: true,
      prevArrow: '<div class="single-carousel__prev"></div>',
      nextArrow: '<div class="single-carousel__next"></div>'
    })
  });
  //loader
  $(window).load(function(){
    setTimeout(function () {
      $('.js-loader').remove()
    }, 500)
  });
})(jQuery);