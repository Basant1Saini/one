/**
 * Footer component for SocialNet
 * Provides consistent footer across all pages
 */
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        const currentYear = new Date().getFullYear();
        
        footerContainer.innerHTML = `
            <footer>
                <p>&copy; ${currentYear} SocialNet. All rights reserved. | <a href="/privacy.html">Privacy Policy</a> | <a href="/terms.html">Terms of Service</a></p>
            </footer>
        `;
    }
});
