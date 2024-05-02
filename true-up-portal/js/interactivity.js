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

function updateProfileDisplay() {
    const userData = {
        username: 'User123',
        bio: 'This is a sample bio.'
    };

    document.getElementById('displayUsername').textContent = userData.username;
    document.getElementById('displayBio').textContent = userData.bio;

    console.log('Profile display updated with username and bio');
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const profileForm = document.getElementById('profileForm');
    const jobPostForm = document.getElementById('jobPostForm');
    const profileDisplayPage = document.getElementById('profileDisplayPage');
    
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

    addHoverEffects();

    if (profileDisplayPage) {
        updateProfileDisplay();
    }
});
```