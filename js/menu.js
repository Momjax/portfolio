// Menu JavaScript for Portfolio BTS SIO SLAM
// Le menu utilise maintenant Bootstrap natif pour le toggle
// Pas besoin de JavaScript personnalisé pour le menu burger

document.addEventListener('DOMContentLoaded', function() {
    // Close menu when clicking on nav links (Bootstrap auto-close)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
            bsCollapse.hide();
        });
    });
});

// Close menu function
function closeMenu() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navbarCollapse = document.getElementById('navbarNav');
    
    if (burgerMenu && navbarCollapse) {
        burgerMenu.classList.remove('active');
        navbarCollapse.classList.remove('show');
        document.body.style.overflow = '';
        
        // Force hide the menu
        navbarCollapse.style.display = 'none';
        setTimeout(() => {
            navbarCollapse.style.display = '';
        }, 10);
    }
}



// Initialize navigation behavior
function initNavigationBehavior() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu when navigation link is clicked
            if (window.innerWidth < 992) {
                setTimeout(() => {
                    closeMenu();
                }, 100);
            }
            
            // Update active link
            updateActiveLink(this);
        });
    });
}

// Update active navigation link
function updateActiveLink(activeLink) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    activeLink.classList.add('active');
}

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    const navbarCollapse = document.getElementById('navbarNav');
    
    // Close menu with Escape key
    if (event.key === 'Escape' && navbarCollapse && navbarCollapse.classList.contains('show')) {
        closeMenu();
    }
});
