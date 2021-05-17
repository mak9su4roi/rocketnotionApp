import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbarContainer/Navbar';

function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };

        console.log(data);
    }

    return (
        <div>
            <Navbar />
            <div className="login">
                <form id="login_form" onSubmit={handleSubmit}>
                    <label>Enter your email: </label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Enter your password: </label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
                <button className="universal_button" type="submit" form="login_form" value="Submit">
                    Login
                </button>
                <button className="universal_button" >
                    <Link to="/register" style={{ textDecoration: 'none' }}> Signup</Link>
                </button>
            </div>
        </div>
    )
}

export default LoginView
