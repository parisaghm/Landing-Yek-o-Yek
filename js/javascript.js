
$(document).ready(function () {
  $('.slider-slick').slick({
    prevArrow: ' <div class="custom-arrows-right arrow-slick clearfix"><img src="img/slider-arrow.90c43eda.svg"></div>',
    nextArrow: '	<div class="custom-arrows-left arrow-slick"><img src="img/slider-arrow.90c43eda.svg"></div>',
    rtl: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  $('.parallax-slider').slick({
    centerMode: true,
    prevArrow: ' <div class="custom-arrows-right arrow-slick clearfix"><img src="img/slider-arrow.90c43eda.svg"></div>',
    nextArrow: '	<div class="custom-arrows-left arrow-slick"><img src="img/slider-arrow.90c43eda.svg"></div>',
    centerPadding: '60px',
    slidesToShow: 3,
    adaptiveHeight: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 950,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



  setTimeout(function () {
    $('.js__art').addClass('active');
  }, 1000);
  setTimeout(function () {
    $('.js__vs-wrapper').addClass('active');
  }, 2000);
  setTimeout(function () {
    $('.js__overlay1').removeClass('overlay1');
  }, 3000);

  $(document).on('click', ".js-invite-btn", function (e) {
    e.preventDefault();
    var phone = $(".js-invite_input").val();
    
    $.ajax({
      url: 'http://apitest.setareyek.ir/OneToOne/WebJoin',
      method: 'POST',
      data: { PhoneNumber: phone },
      success: function (response) {
        if (response.Status) {
          $('#successMessage').addClass('success').html(response.Message);
        } else {
          $('#successMessage').addClass('error').html(response.Message);
        }
      },
    });
  });
});
