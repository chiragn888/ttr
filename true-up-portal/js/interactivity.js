function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log(`Logging in with username: ${username} and password: ${password}`);
    
    alert('Login successful!');
    window.location.href = 'profile.html';
}

function updateProfile({ name, email, bio }) {
    console.log(`Updating profile with name: ${name}, email: ${email}, bio: ${bio}`);
    
    alert('Profile updated successfully!');
    window.location.href = 'job-listing.html';
}

function submitJobPosting({ jobTitle, companyName, position, salary, description }) {
    console.log(`Posting job with title: ${jobTitle}, company: ${companyName}, position: ${position}, salary: ${salary}, description: ${description}`);
    
    alert('Job posted successfully!');
}

function applyJob() {
    console.log('Applying for job');
    
    alert('Applied for job successfully!');
}

function saveJob() {
    console.log('Saving job');
    
    alert('Job saved successfully!');
}

function addHoverEffects() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.cursor = 'pointer';
        });

        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const profileForm = document.getElementById('profileForm');
    const jobPostForm = document.getElementById('jobPostForm');
    const signUpForm = document.getElementById('signUpForm');
    
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

    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }

    addHoverEffects();
});

function handleSignUp(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const domain = document.getElementById('domain').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (username.trim().length < 4) {
        alert('Username must be at least 4 characters long.');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    if (!domainRegex.test(domain)) {
        alert('Please enter a valid domain.');
        return;
    }

    console.log(`Signing up with email: ${email}, username: ${username}, domain: ${domain}`);
    
    alert('Sign-up successful!');
    window.location.href = 'login.html';
}
```