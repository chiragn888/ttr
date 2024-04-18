document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    function toggleDropdown(event) {
        const dropdownMenu = event.target.nextElementSibling;
        const isOpen = dropdownMenu.classList.contains('show');
        
        // Close any open dropdown menus
        document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
            menu.classList.remove('show');
        });

        // If the clicked dropdown was not already open, open it.
        if (!isOpen) {
            dropdownMenu.classList.add('show');
            event.preventDefault(); // Prevent the default anchor action
        }
    }

    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', toggleDropdown);
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-toggle')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
                menu.classList.remove('show');
            });
        }
    });
});