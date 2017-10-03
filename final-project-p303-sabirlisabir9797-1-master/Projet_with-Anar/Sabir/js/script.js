new WOW().init();

$(document).ready(function () {
  var owl = $(' .testimonial  .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    margin: 20,

  });
  $(".counter").each(function () {
    $(this).prop("Counter", 0).animate({
      Counter: $(this).text()
    }, {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });
  var owl = $('.slider_2 .owl-carousel');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    margin: 20,
    center: true,
    responsiveClass: true,
    responsive: {

     0: {
        items: 3
      },
      480: {
        items: 4
      },
      768: {
        items: 6
      }
    }

  });


  /* Case Carousel */
  var caseCarousel = $('#case-carousel');
  caseCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });





});




