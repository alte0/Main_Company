;(function ($) {
    "use strict";
    $(function () {

        $(".news-slider").slick({
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            swipe: false,
            // dots: false,
            variableWidth: true,
            responsive: [
            {
              breakpoint: 1280,
                settings: {
                  swipe: true,
                  swipeToSlide: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                swipe: true,
                swipeToSlide: true,
                dots: true,
              }
            }
          ]
        });


    });
})(jQuery);
