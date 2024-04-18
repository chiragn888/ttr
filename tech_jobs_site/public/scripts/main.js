document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdownTrigger) {
        dropdownTrigger.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });
    }

    // Handle JOIN NOW button click event
    const joinNowButton = document.querySelector('.join-now-btn');
    if (joinNowButton) {
        joinNowButton.addEventListener('click', function() {
            document.querySelector('#join').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Close dropdown when clicking outside of it
    window.addEventListener('click', function(e) {
        if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});