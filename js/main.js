// ========================================
// PORTFOLIO BTS SIO SLAM - Mohamed BOUKHATEM
// JavaScript principal avec système de thème
// ========================================

// === SYSTÈME DE THÈME CLAIR/SOMBRE ===
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Récupérer le thème sauvegardé ou utiliser le mode sombre par défaut
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Appliquer le thème au chargement
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) themeToggle.checked = true;
    }
    
    // Écouter les changements de thème
    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

// === NAVBAR SCROLL ===
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// === MENU MOBILE ===
function initMobileMenu() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');
    
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            
            // Animation burger
            this.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = navbarNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarNav.classList.remove('active');
                navbarToggle.classList.remove('active');
            });
        });
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbarNav.contains(event.target);
            const isClickOnToggle = navbarToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    }
}

// === SMOOTH SCROLL POUR LES ANCRES ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorer les liens vides ou qui ne sont que "#"
            if (!href || href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // 80px pour la hauteur de la navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === ANIMATION AU SCROLL (FADE IN) ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer tous les cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// === FORMULAIRE DE CONTACT ===
function initContactForm() {
    const form = document.querySelector('#contact form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Validation basique
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Vérifier que tous les champs sont remplis
            if (!name.value.trim()) {
                showError(name, 'Veuillez entrer votre nom');
                isValid = false;
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Veuillez entrer un email valide');
                isValid = false;
            }
            
            if (!subject.value.trim()) {
                showError(subject, 'Veuillez entrer un sujet');
                isValid = false;
            }
            
            if (!message.value.trim()) {
                showError(message, 'Veuillez entrer un message');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    // Retirer les anciennes erreurs
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Ajouter la nouvelle erreur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--danger)';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    
    input.parentElement.appendChild(errorDiv);
    input.style.borderColor = 'var(--danger)';
    
    // Retirer l'erreur quand l'utilisateur commence à taper
    input.addEventListener('input', function() {
        const error = this.parentElement.querySelector('.error-message');
        if (error) {
            error.remove();
        }
        this.style.borderColor = 'var(--border-color)';
    }, { once: true });
}

// === ACTIVE LINK DANS LA NAVIGATION ===
function initActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// === INITIALISATION AU CHARGEMENT DE LA PAGE ===
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initActiveLink();
    
    console.log('✅ Portfolio initialized - Theme system active');
});

// === GESTION DU REDIMENSIONNEMENT ===
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Fermer le menu mobile si on passe en desktop
        if (window.innerWidth > 768) {
            const navbarNav = document.getElementById('navbarNav');
            const navbarToggle = document.getElementById('navbarToggle');
            if (navbarNav && navbarToggle) {
                navbarNav.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        }
    }, 250);
});