declare const Swiper: any;

const initTestimonials = (): void => {
    try {
        const swiper = new Swiper('.testimonials-carousel', {
            // Core settings
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            speed: 800,
            grabCursor: true,
            
            // Navigation
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },

            // Ensure proper slide sizing
            roundLengths: true,
            watchOverflow: true,
            normalizeSlideIndex: true,
            centeredSlides: false
        });

        // Add event listeners for debugging
        swiper.on('slideChange', () => {
            console.log('Slide changed');
        });

        console.log('Testimonials carousel initialized');
    } catch (error) {
        console.error('Error initializing testimonials carousel:', error);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonials);
} else {
    initTestimonials();
}
