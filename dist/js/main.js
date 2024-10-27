import { initHeader } from './header';
import { initHero } from './hero';
import AOS from 'aos';
// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    // Initialize other components
    initHeader();
    initHero();
});
//# sourceMappingURL=main.js.map