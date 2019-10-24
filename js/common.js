let bottomCarouselDescription = '.vg-bottom-carousel-item-descip';
let bottomCarouselDescriptionWrapper = '.vg-bottom-carousel-item-descip .vg-bottom-carousel-item-decrip-wrapper';
let bottomCarouselItemNext = '.carousel-item-next .vg-bottom-carousel-item-decrip-wrapper';
let bottomCarouselItemPrev = '.carousel-item-prev .vg-bottom-carousel-item-decrip-wrapper';


// nav-item hover
$('.vg-dropdown, .vg-nav-link').on('mouseover', (e) => {
    $(e.currentTarget).prev('.vg-nav-link').addClass('active');

    $('.vg-dropdown, .vg-nav-link').on('mouseout', (e) => {
        $(e.currentTarget).prev('.vg-nav-link').removeClass('active');
    });
});

// vg bottom carousel
$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
    $(bottomCarouselDescriptionWrapper).addClass('vg-hidden');
    setTimeout(() => {
        let $clone = $(bottomCarouselItemNext).clone();

        if (!$clone.length) $clone = $(bottomCarouselItemPrev).clone();

        console.log(!!$clone.length);
        $clone.css('display', 'block');
        $(bottomCarouselDescriptionWrapper).remove();
        $(bottomCarouselDescription).prepend($clone);
    }, 200);
});

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    $(bottomCarouselDescriptionWrapper).removeClass('vg-hidden');
});

// service-item hover
$('.service-item').on('mouseover', (e) => {
    let $currentTarget = $(e.currentTarget);

    $currentTarget.addClass('scaled');

    $currentTarget.on('mouseout', () => {
        $currentTarget.removeClass('scaled');
    });
});