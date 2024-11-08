// Modal Handling
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const userInfo = document.getElementById('user-info');
const usernameDisplay = document.getElementById('username');

// Show Login Modal
loginLink.onclick = function() {
    loginModal.style.display = 'block';
};

// Show Sign Up Modal
signupLink.onclick = function() {
    signupModal.style.display = 'block';
};

// Close Login Modal
closeLogin.onclick = function() {
    loginModal.style.display = 'none';
};

// Close Sign Up Modal
closeSignup.onclick = function() {
    signupModal.style.display = 'none';
};

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
};

// Dummy Login Logic
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    
    // Hide Modals
    loginModal.style.display = 'none';
    
    // Update Navbar to show logged-in user
    userInfo.style.display = 'inline';
    usernameDisplay.textContent = `Hello, ${username}`;
    
    // Hide login and sign-up links
    loginLink.style.display = 'none';
    signupLink.style.display = 'none';
};

// Dummy Sign-Up Logic (You can extend it)
document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();
    // Do signup logic here
    signupModal.style.display = 'none';
};
