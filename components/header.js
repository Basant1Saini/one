document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header>
                <h1>SocialNet</h1>
                <nav>
                    <a href="/home.html">Home</a>
                    <a href="/about.html">About</a>
                    <a href="/contact.html">Contact</a>
                    <a href="/help.html">Help</a>
                </nav>
            </header>
        `;
    }
});

