import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="brandName">
                      <a href=""><img src="/image/brandlogo.png" alt="" /></a>
                    </div>

                    <div className="navLink">
                  <a href="">Don't have account?</a>
                      <button className="btnDefault">Sign up</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
