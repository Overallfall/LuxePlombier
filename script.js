// Animations simples pour LuxePlombier
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Effet d'apparition au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(card);
    });

    // Gestion du bouton d'urgence (Simulation)
    const megaBtn = document.querySelector('.mega-btn');
    if (megaBtn) {
        megaBtn.addEventListener('click', () => {
            alert("Appel d'urgence en cours... Un expert LuxePlombier vous rappelle dans 5 minutes.");
        });
    }
});
