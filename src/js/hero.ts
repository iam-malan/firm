import Typed from 'typed.js';

export function initHero(): void {
    const options = {
        strings: [
            'Corporate Law',
            'Civil Litigation',
            'Real Estate Law',
            'Family Law',
            'Criminal Defense'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    };

    const typedElement = document.getElementById('typed');
    if (typedElement) {
        new Typed(typedElement, options);
    }

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}
