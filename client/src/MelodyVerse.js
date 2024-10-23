import { useState } from "react";
import cover from "./cover.png";
import { useNavigate } from "react-router-dom";
function App() {
    // state variable for mobilemenu open or not
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const navigate = useNavigate(); // navigate for redirecting to other page
  const toggleMobileMenu = () => { // it will toggle the variable based on it is true or false
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
        {/* navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md text-white">
        <div className="md:hidden">
            {/* toggling operation */}
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="text-3xl font-bold">MelodyVerse</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400">
            Browse
          </a>
          <a href="#" className="hover:text-yellow-400">
            Playlist
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          {/* Login and Signup Buttons*/}
          <a
            href="#"
            onClick={() => {
              navigate("/login", { replace: true });
            }}
            className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
          >
            Login
          </a>
          <a
            onClick={() => {
              navigate("/register", { replace: true });
            }}
            href="#"
            className="px-4 py-2 border-2 border-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            Signup
          </a>
        </div>
      </nav>

      <div id="mobileMenu" className="md:hidden bg-gray-800 p-6 hidden">
        <a href="#" className="block py-2 text-yellow-400">
          Home
        </a>
        <a href="#" className="block py-2 text-yellow-400">
          Browse
        </a>
        <a href="#" className="block py-2 text-yellow-400">
          Playlist
        </a>
        <a href="#" className="block py-2 text-yellow-400">
          Contact
        </a>
      </div>
      {/* hinding based on the state varibale */}
      <div
        className={`${
          isMobileMenuOpen ? "" : "hidden"
        } md:hidden bg-gray-800 p-6`}
      >
        <a href="#" className="block py-2 text-yellow-400">
          Home
        </a>
        <a href="#" className="block py-2 text-yellow-400">
          Browse
        </a>
        <a href="#" className="block py-2 text-yellow-400">
          Playlist
        </a>
        <a href="#" className="block py-2 text-yellow-400">
          Contact
        </a>
      </div>
        {/* section */}
      <section className="flex flex-col md:flex-row justify-center items-center h-screen p-6 text-center md:text-left">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            Discover New Music Every Day
          </h1>
          <p className="text-lg mb-6">
            Embrace the rhythm of your life with a soundtrack that speaks to
            your soul—welcome to MelodyVerse!
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
          >
            Start Your Soundtrack
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={cover} alt="Music" className="rounded-lg shadow-lg"></img>
        </div>
      </section>

      {/*Featured Playlists*/}
      <section className="p-6 text-white" id="playlist">
        <h2 className="text-4xl font-bold text-center mb-8">
          Featured Playlists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <img
              src="https://images.unsplash.com/photo-1553628616-798e854455e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="430px"
              alt="Playlist 1"
              className="mb-4 rounded-md"
            ></img>
            <h3 className="text-2xl font-bold mb-2">Chill Vibes</h3>
            <p>Relax and unwind with the best chill tracks.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
              alt="Playlist 2"
              className="mb-4 rounded-md"
            ></img>
            <h3 className="text-2xl font-bold mb-2">Top Hits</h3>
            <p>The latest and greatest hits in the music world.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <img
              src="https://images.unsplash.com/photo-1534126511673-b6899657816a"
              alt="Playlist 3"
              className="mb-4 rounded-md"
            ></img>
            <h3 className="text-2xl font-bold mb-2">Workout Boost</h3>
            <p>Get pumped with these high-energy tracks.</p>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <footer className="bg-gray-800 p-6 mt-12 text-center text-white">
        <p>© 2024 MelodyVerse. All rights reserved.</p>
        <div className="mt-4">
          <button className="text-yellow-400 mx-2 hover:text-yellow-300">
            Facebook
          </button>
          <button className="text-yellow-400 mx-2 hover:text-yellow-300">
            Twitter
          </button>
          <button className="text-yellow-400 mx-2 hover:text-yellow-300">
            Instagram
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
