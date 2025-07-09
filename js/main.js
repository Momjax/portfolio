// Main JavaScript for Portfolio BTS SIO SLAM

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initScrollEffects();
    initHeaderReduction();
    initSmoothScrolling();
    initFormHandling();
    initAnimations();
});

// Scroll effects for navbar
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Header reduction functionality
function initHeaderReduction() {
    const reduceBtn = document.getElementById('reduceHeaderBtn');
    const header = document.getElementById('header');
    const mainContent = document.getElementById('mainContent');
    
    if (reduceBtn && header && mainContent) {
        reduceBtn.onclick = function() {
            // Add reduced class to header
            header.classList.add('reduced');
            
            // Show main content after animation delay
            setTimeout(function() {
                mainContent.style.display = 'block';
                mainContent.classList.add('fade-in-up');
                
                // Scroll to main content
                mainContent.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 600);
            
            // Update button text
            reduceBtn.innerHTML = '<i class="fas fa-arrow-up"></i> Retour en haut';
            
            // Change button functionality to scroll to top
            reduceBtn.onclick = function() {
                scrollToTop();
            };
        };
    }
}

// Scroll to top function
function scrollToTop() {
    const header = document.getElementById('header');
    const mainContent = document.getElementById('mainContent');
    const reduceBtn = document.getElementById('reduceHeaderBtn');
    
    // Remove reduced class and hide main content
    header.classList.remove('reduced');
    mainContent.style.display = 'none';
    mainContent.classList.remove('fade-in-up');
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Reset button
    reduceBtn.innerHTML = '<i class="fas fa-eye"></i> Voir mon portfolio';
    
    // Reset button functionality - reinitialize the header reduction
    setTimeout(() => {
        initHeaderReduction();
    }, 100);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                const burgerMenu = document.getElementById('burgerMenu');
                
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                    burgerMenu.classList.remove('active');
                }
                
                // Smooth scroll to target
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                updateActiveNavLink(this);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    activeLink.classList.add('active');
}

// Form handling
function initFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...';
            submitBtn.disabled = true;
            
            // Reset button after form submission (success or error)
            setTimeout(function() {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
}

// Initialize animations
function initAnimations() {
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Utility function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function() {
    // Any additional scroll-based functionality can be added here
}, 100));

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});
