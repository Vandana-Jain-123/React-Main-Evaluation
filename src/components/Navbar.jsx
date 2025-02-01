import React from 'react'
// import "../styles/navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-left'>
                    <button style={{width:"100px", backgroundColor: "blue"}}><Link to="/" style={{ fontSize: "20px", textAlign: "center", color: "white", textDecoration:"none" }}>Home</Link></button>


                    {/* <Link to="/quiz" className='nav-link'>Quiz</Link> */}
                </div>
                {/* <div className='navbar-login'>
                    <Link to="/login" className='nav-link'>Login</Link>
                </div> */}

            </nav>


        </>
    )
}

export default Navbar;
