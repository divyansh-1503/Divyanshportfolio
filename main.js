document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    // Toggle mobile menu
    mobileMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
        
        // Toggle menu icon
        const menuIcon = mobileMenu.querySelector('i');
        if (menuIcon.classList.contains('bx-menu')) {
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
        } else {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && 
            !mobileMenu.contains(event.target) && 
            navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const menuIcon = mobileMenu.querySelector('i');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
    
    // Close menu when clicking on a menu item
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const menuIcon = mobileMenu.querySelector('i');
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu');
            }
        });
    });
});