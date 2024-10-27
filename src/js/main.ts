import { initHeader } from './header';
import { initHero } from './hero';
import './testimonials';
import './about';
import AOS from 'aos';

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize components
    initHeader();
    initHero();
});
