# SocialNet - A Simple Social Networking Platform

## Project Overview
SocialNet is a lightweight social networking platform designed to help users connect with friends and share their moments. The project provides a simple and intuitive interface for social interactions, user authentication, and content sharing.

## Features
- **User Authentication**: Sign up and login functionality
- **Profile Management**: View and manage user profiles
- **Social Feeds**: View updates and posts from friends
- **Friend List**: Connect with and view your friends
- **Social Media Integration**: Links to major social platforms
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Contact Form**: Easy way to reach out to the site administrators
- **Help Center**: Documentation and support resources

## File Structure
```
/
├── index.html       # Landing page with sign up/login functionality
├── home.html        # Home page showing feeds and friend lists
├── about.html       # Information about the platform
├── contact.html     # Contact form for user inquiries
├── help.html        # Help and support documentation
├── styles.css       # Global CSS styling
└── README.md        # Project documentation (this file)
```

## Setup Instructions
1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/socialnet.git
   cd socialnet
   ```

2. **Local Development**
   - Simply open the index.html file in your browser to view the site
   - For a more robust development environment, use a local server:
     ```
     # Using Python
     python -m http.server
     
     # Or using Node.js with http-server
     npx http-server
     ```

3. **Deployment**
   - The site can be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel
   - No backend setup is required as the current implementation uses client-side storage

## Technologies Used
- **HTML5**: Structure and content
- **CSS3**: Styling and responsive design
- **JavaScript**: Client-side functionality and user authentication
- **Local Storage**: Temporary data persistence for user information

## Future Enhancements
- Server-side authentication
- Database integration for persistent storage
- Enhanced social features (messaging, notifications)
- Media upload capabilities
- Search functionality

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

