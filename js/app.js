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

      $(".main-content-menu-mob").click(function (e) { 
        e.preventDefault();
        $(this).next().toggleClass('js-open');
      });

    });
})(jQuery);

;(function ($) {
    "use strict";
    $(function () {
      
        /**
         * Показ любого блока по наведению на другой
         */
        var toggleLeaveTimer;
        $('[data-toggle-hover-dd]').on('mouseenter mouseleave', function(e) {
            var selector = '#' + $(this).data('toggle-hover-dd');
            if ($(selector).length > 0)
            {
                var $toggler = $(selector);
                var className = $toggler.data('toggler-hover-dd');
                if (e.type == 'mouseenter' && !$toggler.hasClass(className))
                {
                    $toggler.addClass(className)
                }
                if (e.type == 'mouseleave' && $toggler.hasClass(className))
                {
                    toggleLeaveTimer = setTimeout(function () {$toggler.removeClass(className)}, 300);
                }
            }
        });
        $('[data-toggler-hover-dd]').on('mouseenter', function () {
            clearTimeout(toggleLeaveTimer);
        }).on('mouseleave', function () {
            var $toggler = $(this);
            var className = $toggler.data('toggler-hover-dd');
            if ($toggler.hasClass(className))
            {
                toggleLeaveTimer = setTimeout(function () {$toggler.removeClass(className)}, 300);
            }
        });

    });
})(jQuery);

;(function ($) {
    "use strict";
    $(function () {
      
      

    });
})(jQuery);
