/**
 * Header component for SocialNet
 * Provides consistent navigation across all pages
 */
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        // Check if user is logged in
        const currentUser = localStorage.getItem('currentUser');
        const isLoggedIn = !!currentUser;
        
        headerContainer.innerHTML = `
            <header>
                <h1>SocialNet</h1>
                <nav>
                    <a href="/home.html">Home</a>
                    <a href="/about.html">About</a>
                    <a href="/contact.html">Contact</a>
                    <a href="/help.html">Help</a>
                    ${isLoggedIn ? 
                        `<a href="#" id="logout-btn">Logout (${currentUser})</a>` : 
                        `<a href="/index.html">Login/Signup</a>`
                    }
                </nav>
            </header>
        `;
        
        // Add logout functionality if user is logged in
        if (isLoggedIn) {
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.removeItem('currentUser');
                    window.location.href = '/index.html';
                });
            }
        }
    }
});
