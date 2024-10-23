import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  // state variables for email,password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // for navigation will use it
  const navigate = useNavigate();
  // asynchronous function to login
  async function loginUser(event) {
    event.preventDefault();
    // fetch api for login
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    // if user exist then set token for it and redirect it to dashboard else give alert for incorrect
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      navigate("/dashboard");
    } else {
      alert("Please check your email and password");
    }
  }

  return (
    // making login screen in javascript + xml structure
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        {/* form for login on submit it will invoke loginUser function */}
        <form onSubmit={loginUser}>
          <div className="mb-4">
            {/* email input */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
              required
            />
          </div>
          {/* password input */}
          <div className="mb-6">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
              required
            />
          </div>
          {/* submit */}
          <input
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-300 transition"
            value="Login"
          />
        </form>
        {/* just a link for forget password */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-gray-600 hover:text-yellow-400">
            Forgot Password?
          </a>
        </div>
        {/* if user don't have account will redirect to  signup page*/}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              href="#"
              onClick={() => {
                navigate("/register");
              }}
              className="text-yellow-400 hover:text-yellow-300"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
