import React from 'react';

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">GetAJob.</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#jobs">companies</a></li>

                    <li><a href="#jobs">Candidates</a></li>

                    <li><a href="#jobs">Assessment</a></li>

                    <li><a href="#jobs">Post a Job</a></li>

                    <li><a href="#jobs">Career Advice</a></li>
                </ul>
            </nav>

            <div className="nav-btn">
                <span>Login</span>
                <span>Sign up</span>
            </div>
        </header>
    )
}

export default Navbar;