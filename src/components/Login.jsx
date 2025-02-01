import React, { useState } from 'react'
import { use } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../styles/login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    // const loginUrl = "http://localhost:3000/login"

    const handleLogin = async (e) => {
        e.preventDefault()
        navigate("/quiz")

    }

    return (
        <div className='container'>
            This is Login
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='enter name' onChange={(e) => setUsername(e.target.value)} value={username} />
                <input type="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="submit" value="Login" />
            </form>

        </div>
    )
}

export default Login

