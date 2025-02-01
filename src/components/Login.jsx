import React, { useState } from 'react'
import { use } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../styles/login.css"







const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUrl = "https://hazel-sour-beam.glitch.me/login";

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(loginUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token); 
                navigate("/quiz"); 
            } else {
                alert(data.message || "Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
