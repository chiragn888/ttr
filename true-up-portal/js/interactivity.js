document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const profileForm = document.getElementById('profileForm');
    const jobPostForm = document.getElementById('jobPostForm');
    
    // Existing event listeners for forms
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            updateProfile({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                bio: document.getElementById('bio').value
            });
        });
    }
    
    if (jobPostForm) {
        jobPostForm.addEventListener('submit', function(event) {
            event.preventDefault();
            submitJobPosting({
                jobTitle: document.getElementById('jobTitle').value,
                companyName: document.getElementById('companyName').value,
                position: document.getElementById('position').value,
                salary: document.getElementById('salary').value,
                description: document.getElementById('description').value
            });
        });
    }

    // Activate button hover effects
    addHoverEffects();

    // Adding event listeners for new links in the "More" drop-down menu
    document.querySelectorAll('.more-dropdown-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const targetPage = this.getAttribute('href'); // Get the href attribute of the clicked link
            window.location.href = targetPage; // Navigate to the target page
        });
    });
});