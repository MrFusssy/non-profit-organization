document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.querySelector('.btn-menu');
    const mobileNav = document.querySelector('nav.mobile-nav');

    btnMenu.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });

    
});