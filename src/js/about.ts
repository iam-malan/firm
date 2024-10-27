import AOS from 'aos';

document.addEventListener('DOMContentLoaded', (): void => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Value items hover effect
    const valueItems: NodeListOf<HTMLElement> = document.querySelectorAll('.value-item');
    valueItems.forEach((item: HTMLElement): void => {
        item.addEventListener('mouseenter', function(this: HTMLElement): void {
            this.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', function(this: HTMLElement): void {
            this.style.transform = 'translateY(0)';
        });
    });

    // Team member image hover effect
    const teamMembers: NodeListOf<HTMLElement> = document.querySelectorAll('.team-member');
    teamMembers.forEach((member: HTMLElement): void => {
        const overlay: HTMLElement | null = member.querySelector('.member-overlay');
        
        if (overlay) {
            member.addEventListener('mouseenter', (): void => {
                overlay.style.opacity = '1';
            });

            member.addEventListener('mouseleave', (): void => {
                overlay.style.opacity = '0';
            });
        }
    });
});
