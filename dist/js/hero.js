import Typed from 'typed.js';
export const initHero = () => {
    // Initialize Typed.js
    const typed = new Typed('#typed', {
        strings: [
            'Litigation',
            'Family Law',
            'Debt Collection',
            'Wills & Estates'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
    // Parallax effect on scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const video = document.querySelector('.hero-video');
        if (heroContent && video) {
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            video.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.2}px)`;
        }
    });
    // Smooth scroll for the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function (e) {
            e.preventDefault();
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                const nextSection = heroSection.nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
};
//# sourceMappingURL=hero.js.map