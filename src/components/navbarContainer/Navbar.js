import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <span className="logo">rocket-notion</span>
            </Link>
        </div>
    )
}

export default Navbar
