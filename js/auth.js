// Store user data (in a real application, this would use localStorage or a backend service)
const users = {};

// Form validation
function validateUsername(username) {
    if (!username) {
        return 'Username is required';
    }
    if (username.length < 3) {
        return 'Username must be at least 3 characters';
    }
    return '';
}

function validatePassword(password) {
    if (!password) {
        return 'Password is required';
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    return '';
}

// Sign up functionality
function handleSignUp(event) {
    event.preventDefault();
    
    const username = document.getElementById('signup-username')?.value || prompt("Enter a username:");
    const password = document.getElementById('signup-password')?.value || prompt("Enter a password:");
    
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    
    if (usernameError || passwordError) {
        if (usernameError) {
            if (document.getElementById('username-error')) {
                document.getElementById('username-error').textContent = usernameError;
            } else {
                alert(usernameError);
            }
        }
        
        if (passwordError) {
            if (document.getElementById('password-error')) {
                document.getElementById('password-error').textContent = passwordError;
            } else {
                alert(passwordError);
            }
        }
        return;
    }
    
    if (users[username]) {
        alert("Username already exists. Please choose a different one.");
    } else {
        users[username] = password;
        alert("Sign Up Successful!");
        // In a real application, we would use localStorage or a backend service
        localStorage.setItem('currentUser', username);
        // Redirect to home page
        window.location.href = "/home.html";
    }
}

// Login functionality
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username')?.value || prompt("Enter your username:");
    const password = document.getElementById('login-password')?.value || prompt("Enter your password:");
    
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }
    
    if (users[username] && users[username] === password) {
        alert("Login Successful!");
        // In a real application, we would use localStorage or a backend service
        localStorage.setItem('currentUser', username);
        // Redirect to home page
        window.location.href = "/home.html";
    } else {
        alert("Invalid username or password.");
    }
}

// Initialize authentication listeners
document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    
    if (signupBtn) {
        signupBtn.addEventListener('click', handleSignUp);
    }
    
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
    }
});

