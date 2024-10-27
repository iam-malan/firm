declare const Swiper: any;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const testimonialSwiper = new Swiper('.testimonials-carousel', {
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
    });

    // Add hover pause functionality
    const swiperContainer = document.querySelector('.testimonials-carousel');
    
    if (swiperContainer) {
        swiperContainer.addEventListener('mouseenter', () => {
            if (testimonialSwiper.autoplay) {
                testimonialSwiper.autoplay.stop();
            }
        });

        swiperContainer.addEventListener('mouseleave', () => {
            if (testimonialSwiper.autoplay) {
                testimonialSwiper.autoplay.start();
            }
        });
    }
});
