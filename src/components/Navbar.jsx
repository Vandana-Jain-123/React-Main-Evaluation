import React from 'react'
// import "../styles/navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-left'>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/quiz" className='nav-link'>Quiz</Link>
                </div>
                <div className='navbar-login'>
                    <Link to="/login" className='nav-link'>Login</Link>
                </div>

            </nav>


        </>
    )
}

export default Navbar;
