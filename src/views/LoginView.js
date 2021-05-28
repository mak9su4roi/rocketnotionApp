import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbarContainer/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import {userLogin} from '../redux/users'
import { useHistory } from "react-router-dom";




function LoginView() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const userts = useSelector(state => state.users);
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };
        dispatch(userLogin({name: "New_user_name", email: data.email, surname: "New_user_surname"}))
        history.push("/dashboard");
    }

    return (
        <div>
            <Navbar />
            <div className="login">
                <form id="login_form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter your email: </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Enter your password: </label>
                    <input
                        id="password"
                        name="password"
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
