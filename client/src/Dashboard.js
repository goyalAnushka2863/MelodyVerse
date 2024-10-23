import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate(); // navigate for redirecting to other pages
  const [playlists, setPlaylists] = useState([]); // state variable for setting the playlist

  // featured playlists to  separate from playlist variable named as smaplePlaylist
  const samplePlaylists = [
    {
      id: 1,
      title: "Chill Vibes",
      description: "Relax and unwind with the best chill tracks.",
      image: "https://images.unsplash.com/photo-1553628616-798e854455e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Top Hits",
      description: "The latest and greatest hits in the music world.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
    },
    {
      id: 3,
      title: "Workout Boost",
      description: "Get pumped with these high-energy tracks.",
      image: "https://images.unsplash.com/photo-1534126511673-b6899657816a"
    }
  ];

  useEffect(() => {
    //using playlists
    setPlaylists(samplePlaylists);
  }, []);

  // handle the logout if it has tokn it will remove it and navigate it to the main page
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
        <div className="text-3xl font-bold">MelodyVerse</div>
        <div className="flex space-x-4">
          {/* if clicked it will logout from site by invoking the handleLogout funciton */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Featured Playlists */}
      <section className="p-6" id='playlist'>
        <h2 className="text-4xl font-bold text-center mb-8">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
              <img src={playlist.image} alt={playlist.title} className="mb-4 rounded-md" />
              <h3 className="text-2xl font-bold mb-2">{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 mt-12 text-center text-white">
        <p>© 2024 MelodyVerse. All rights reserved.</p>
        <div className="mt-4">
          <button className="text-yellow-400 mx-2 hover:text-yellow-300">Facebook</button>
          <button className="text-yellow-400 mx-2 hover:text-yellow-300">Twitter</button>
          <button className="text-yellow-400 mx-2 hover:text-yellow-300">Instagram</button>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
