import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (email === "") {
      setEmailError("Email is required.");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password is required.");
    } else {
      setPasswordError("");
    }

    if (email !== "" && password !== "") {
      if (!isValidEmail(email)) {
        setError("Invalid email address.");
      } else {
        // Simulating successful login
        setLoggedIn(true);
      }
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (loggedIn) {
      // Redirect to profile page
      navigate("/profile", { state: { email, password } });
    }
  }, [loggedIn, navigate, email, password]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 px-4 py-2 rounded-md"
            required
            placeholder="Enter a valid email address"
          />
          {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
        </div>
        <div className="mb-4">
          <label className="block">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 px-4 py-2 rounded-md"
            required
          />
          {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>}
        </div>
        {error && <p className="text-red-500 mt-1">{error}</p>}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
