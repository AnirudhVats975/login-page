import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div>
            <div className="headerWapper">
                <div className=" headerInnerWapper">
                <div className="heading">
                    <h1>Welcome to NioM PMC</h1>
                </div>
                <div className="loginWapper">
                 
                    <form action="">
                        <div className="email">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Your Email" name="email" autoComplete="off" />
                        </div>

                         
                        <div className="password">
                        <label>password</label>
                        <input type="password" placeholder="Enter Your Password" name="password" autoComplete="off" />
                        <span><a href="">Forget Password?</a></span>
                        </div>

                        <button className="btnDefault loginBtn">Login</button>

                   
                        

                    </form>
                   
                  
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header
