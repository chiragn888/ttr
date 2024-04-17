// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Button selectors
    const loginButton = document.querySelector('#loginButton');
    const updateButton = document.querySelector('#updateButton');
    const postButton = document.querySelector('#postButton');
    const applyButtons = document.querySelectorAll('.applyButton');
    const saveButtons = document.querySelectorAll('.saveButton');

    // Validation function
    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    // Hover effect for buttons
    const buttons = [loginButton, updateButton, postButton, ...applyButtons, ...saveButtons];
    buttons.forEach(button => {
        if (button) {
            button.addEventListener('mouseover', () => button.style.backgroundColor = '#007bff');
            button.addEventListener('mouseout', () => button.style.backgroundColor = '');
        }
    });

    // Login action
    if (loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            loginButton.disabled = true; // Disable the button to prevent multiple submits
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;
            // AJAX call for login
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/profile';
                } else {
                    alert('Login failed. Please check your credentials.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => loginButton.disabled = false); // Re-enable the button after the operation
        });
    }

    // Update profile action
    if (updateButton) {
        updateButton.addEventListener('click', (e) => {
            e.preventDefault();
            updateButton.disabled = true; // Disable the button to prevent multiple submits
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const bio = document.querySelector('#bio').value;

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                updateButton.disabled = false;
                return;
            }

            // AJAX call for updating profile
            fetch('/api/profile/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, bio }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Profile updated successfully.');
                } else {
                    alert('Failed to update profile.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => updateButton.disabled = false); // Re-enable the button after the operation
        });
    }

    // Post job action
    if (postButton) {
        postButton.addEventListener('click', (e) => {
            e.preventDefault();
            postButton.disabled = true; // Disable the button to prevent multiple submits
            const jobTitle = document.querySelector('#jobTitle').value;
            const companyName = document.querySelector('#companyName').value;
            const position = document.querySelector('#position').value;
            const salary = document.querySelector('#salary').value;
            const description = document.querySelector('#description').value;
            // AJAX call for posting a job
            fetch('/api/jobs/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobTitle, companyName, position, salary, description }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Job posted successfully.');
                } else {
                    alert('Failed to post job.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => postButton.disabled = false); // Re-enable the button after the operation
        });
    }

    // Apply and Save job actions
    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.disabled = true; // Disable the button to prevent multiple submits
            const jobId = button.getAttribute('data-jobId');
            // AJAX call for applying to a job
            fetch(`/api/jobs/apply/${jobId}`, {
                method: 'POST',
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Applied to job successfully.');
                } else {
                    alert('Failed to apply to job.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => button.disabled = false); // Re-enable the button after the operation
        });
    });

    saveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.disabled = true; // Disable the button to prevent multiple submits
            const jobId = button.getAttribute('data-jobId');
            // AJAX call for saving a job
            fetch(`/api/jobs/save/${jobId}`, {
                method: 'POST',
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Job saved successfully.');
                } else {
                    alert('Failed to save job.');
                }
            })
            .catch(error => console.error('Error:', error))
            .finally(() => button.disabled = false); // Re-enable the button after the operation
        });
    });
});
```