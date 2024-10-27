export const initHeader = () => {
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            }
            else {
                header.classList.remove('scrolled');
            }
        });
    }
};
//# sourceMappingURL=header.js.map