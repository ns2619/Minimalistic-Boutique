 // Toggle between login and signup forms
 document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-card').style.display = 'none';
    document.getElementById('signup-card').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-card').style.display = 'none';
    document.getElementById('login-card').style.display = 'block';
});

// Form validation and submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Validate email
    const emailInput = document.getElementById('login-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }
    
    // Validate password
    const passwordInput = document.getElementById('login-password');
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add('error');
        isValid = false;
    } else {
        passwordInput.classList.remove('error');
    }
    
    // If form is valid, show success message and redirect
    if (isValid) {
        document.getElementById('login-success').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
        
        // Simulate redirect after 2 seconds
        setTimeout(function() {
            alert('Redirecting to account dashboard...');
            // In a real app, you would redirect to the dashboard page
            // window.location.href = 'dashboard.html';
        }, 2000);
    }
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Validate name
    const nameInput = document.getElementById('signup-name');
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }
    
    // Validate email
    const emailInput = document.getElementById('signup-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }
    
    // Validate password
    const passwordInput = document.getElementById('signup-password');
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add('error');
        isValid = false;
    } else {
        passwordInput.classList.remove('error');
    }
    
    // Validate password confirmation
    const confirmInput = document.getElementById('signup-confirm');
    if (confirmInput.value !== passwordInput.value) {
        confirmInput.classList.add('error');
        isValid = false;
    } else {
        confirmInput.classList.remove('error');
    }
    
    // Check terms agreement
    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
        isValid = false;
        alert('Please agree to the Terms of Service and Privacy Policy');
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('signup-success').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
        
        // Simulate switching to login form after 2 seconds
        setTimeout(function() {
            document.getElementById('signup-card').style.display = 'none';
            document.getElementById('login-card').style.display = 'block';
            document.getElementById('signup-form').style.display = 'block';
            document.getElementById('signup-success').style.display = 'none';
        }, 2000);
    }
});

// Reset form validation on input change
const formInputs = document.querySelectorAll('input');
formInputs.forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
    });
});