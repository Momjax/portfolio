console.log('🚀 main.js chargé!');

// THEME SWITCH ROBUSTE
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    if (!toggle) {
        console.warn('⚠️ Toggle de thème non trouvé dans le DOM');
        return;
    }

    // Fonction pour appliquer le thème
    const applyTheme = (theme) => {
        if (theme === 'light') {
            root.classList.add('light-mode');
            toggle.checked = true;
            console.log('☀️ Mode clair appliqué');
        } else {
            root.classList.remove('light-mode');
            toggle.checked = false;
            console.log('🌙 Mode sombre appliqué');
        }
    };

    // 1. Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
    
    // 2. Écouter les changements
    toggle.addEventListener('change', function() {
        const newTheme = this.checked ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 3. Sync avec les autres onglets
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') {
            applyTheme(e.newValue);
        }
    });
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
    }, { passive: true });
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
        
        // Fermer le menu quand on clique sur un lien
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
}

// INIT GLOBAL
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Portfolio Initialisation...');
    
    const initializers = [
        { name: 'Thème', fn: initTheme },
        { name: 'Navbar', fn: initNavbar },
        { name: 'Menu Mobile', fn: initMobileMenu }
    ];

    initializers.forEach(init => {
        try {
            init.fn();
            console.log(`  - ${init.name} : OK`);
        } catch (error) {
            console.error(`  - ${init.name} : ERREUR`, error);
        }
    });
});