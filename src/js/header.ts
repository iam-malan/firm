export const initHeader = (): void => {
    const header: HTMLElement | null = document.querySelector('.header');
    const mobileMenuBtn: HTMLElement | null = document.querySelector('.mobile-menu-btn');
    const navMenu: HTMLElement | null = document.querySelector('.nav-menu');
    
    // Scroll handler
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile menu toggle
    if (mobileMenuBtn && navMenu) {
        const toggleMenu = () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        };

        mobileMenuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking outside
        document.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            if (!mobileMenuBtn.contains(target) && !navMenu.contains(target) && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
};
