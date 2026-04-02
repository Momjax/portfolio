console.log('🚀 main.js chargé!');

// THEME SWITCH ULTRA SIMPLE
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    console.log('🎨 initTheme - Toggle trouvé:', toggle !== null);
    
    // Charger le thème sauvegardé
    const theme = localStorage.getItem('theme') || 'dark';
    console.log('💾 Thème sauvegardé:', theme);
    
    if (theme === 'light') {
        root.classList.add('light-mode');
        if (toggle) toggle.checked = true;
    }
    
    // Écouter les changements
    if (toggle) {
        toggle.addEventListener('change', function() {
            console.log('🔄 Switch cliqué!');
            if (this.checked) {
                root.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
                console.log('✅ Mode clair activé');
            } else {
                root.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
                console.log('✅ Mode sombre activé');
            }
        });
    }
}

// NAVBAR SCROLL
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// MENU MOBILE
function initMobileMenu() {
    const toggle = document.getElementById('navbarToggle');
    const nav = document.getElementById('navbarNav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// INIT
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portfolio chargé!');
    initTheme();
    initNavbar();
    initMobileMenu();
});