import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../Image-Gallery/Image-Gallery";

export default function Login() {
  const navigate = useNavigate();

  // Absolute credentials
  const correctEmail = "admin@example.com";
  const correctPassword = "password123";

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password) {
      setError("Please fill in all the fields.");
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Validate credentials
    if (email === correctEmail && password === correctPassword) {
      navigate("/Dashboard"); // Navigate to Dashboard
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="sm:z-10 absolute w-[100vw] h-[10vh] lg:h-screen px-[7vw]">
      <Gallery></Gallery>
      <h1 className="text-4xl mt-[20vh] font-extrabold">Welcome 👋</h1>
      <h2 className="mt-5 text-2xl">Sign In to your Dashboard</h2>
      <form onSubmit={handleLogin} className="lg:w-[40vw] w-[90vw] mt-[7vh]">
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(""); // Clear error on input change
            }}
            className="w-full bg-[rgba(223,222,222,1)] font-semibold px-3 py-2 mt-1 rounded-[10px] focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(""); // Clear error on input change
            }}
            className="w-full bg-[rgba(223,222,222,1)] font-semibold px-3 py-2 mt-1 rounded-[10px] focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm font-semibold">{error}</p>
        )}
        <button
          type="submit"
          className="w-full shadow-[10px_11px_7px_-8px_rgb(189,189,189)] py-2 mt-4 text-white font-bold bg-[rgba(68,118,255,0.90)] rounded-[10px] hover:bg-[rgba(53,94,206,0.93)]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
