import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    };
    const testimonialSwiper = new Swiper('.testimonials-carousel', swiperOptions);
    // Add hover pause functionality
    const swiperContainer = document.querySelector('.testimonials-carousel');
    if (swiperContainer && testimonialSwiper.autoplay) {
        swiperContainer.addEventListener('mouseenter', function () {
            testimonialSwiper.autoplay.stop();
        });
        swiperContainer.addEventListener('mouseleave', function () {
            testimonialSwiper.autoplay.start();
        });
    }
});
//# sourceMappingURL=testimonials.js.map