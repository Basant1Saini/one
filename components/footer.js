document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer>
                <p>&copy; 2023 SocialNet. All rights reserved. | <a href="/privacy.html">Privacy Policy</a> | <a href="/terms.html">Terms of Service</a></p>
            </footer>
        `;
    }
});

