// SLIDER
$(document).ready(function() {
    $(".coffee-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">‹</button>',
        nextArrow: '<button type="button" class="slick-next">›</button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

// FAQ PAGE

$(function() {
    $("#accordion").accordion();
});


$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                name: true
            },
            email: {
                required: true,
                email: true
            }
        }
    });
})