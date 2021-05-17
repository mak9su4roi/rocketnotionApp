import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbarContainer/Navbar';

function RegisterView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, name, surname, password };

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
                    <label>Enter your name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Enter your surname: </label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
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
                    Save
                </button>
                <button className="universal_button" >
                    <Link to="/login" style={{ textDecoration: 'none' }}> Login</Link>
                </button>
            </div>
        </div>
    )
}

export default RegisterView