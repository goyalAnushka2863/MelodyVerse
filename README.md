# MelodyVerse
MelodyVerse is a modern music streaming application that lets users discover, stream, and enjoy curated playlists from anywhere. It’s built with a clean, responsive UI and offers essential features like user authentication and dashboard access.

# Features
Browse & Listen: Discover new music with beautifully designed playlists.
Login/Signup: Secure user authentication using JWT (JSON Web Tokens).
Dashboard: Personalized user dashboard after successful login.
Mobile & Desktop Responsive: The layout adapts across screen sizes, with a mobile-friendly hamburger menu.

# Authentication
Login/Signup: Users can register, log in, and securely access the dashboard.
JWT Token: After logging in, a JWT token is generated and stored in localStorage, allowing secure access to protected routes like the dashboard.

# Technologies Used
Frontend: React.js, Tailwind CSS for responsive and attractive UI.
Routing: React Router for navigating between pages like Login, Register, and Dashboard.
Backend: Express.js API (assumed from your codebase).
JWT Authentication: Secure token-based login system.

# How It Works
User Registration: Sign up with email, name, and password.
Login: On successful login, a JWT token is received from the server and stored locally.
Protected Dashboard: After login, the user is redirected to the dashboard (a protected route). If not authenticated, the user cannot access it.
Responsive UI: The app layout adjusts dynamically for mobile and desktop users.

# Getting Started
1. Clone the repository:
  bash
  Copy code
  git clone {mylink}
  cd melodyverse
2. Install dependencies:
  bash
  Copy code
  npm install

3. Start the application:
  bash
  Copy code
  npm start

4. Ensure the backend API is running to handle login/signup.

