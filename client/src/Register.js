import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
function App() {
  // state variables for name, email, password
  const [name, setName ] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate(); // navigate for redirection
  async function registerUser(event){
    event.preventDefault(); // to prevent refreshing of page 

    // fetch API for register/signup
    const response = await fetch('http://localhost:1337/api/register', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json()
    // if status is ok it will go to login page 
    if(data.status==='ok'){
      navigate('/login');
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
      {/* form for signup and onsubmit it will invoke the registerUser function */}
      <form onSubmit={registerUser}>
        <div className="mb-4">
          {/* takes name and sets it*/}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
            required
          />
        </div>
        <div className="mb-4">
          {/* takes email ans input and also validates it as type is email and set the email*/}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
            required
          />
        </div>
        <div className="mb-6">
          {/* takes the password and set also */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
            required
          />
        </div>
        {/* upon submit from will invoke registerUser function */}
        <input
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition"
          value="Sign up"
        />
      </form>
      <div className="mt-4 text-center">
        {/* if have account user can click to go to login page */}
        <p className="text-sm text-gray-600">Already have an account? <button href="#" onClick={()=>{navigate('/login')}} className="text-yellow-400 hover:text-yellow-300">Login</button></p>
      </div>
    </div>
  </div>
  );
}

export default App;
