import React from 'react'
import { useState } from 'react'
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbarContainer/Navbar';

function RegisterView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [surnameError, setSurnameError] = useState("");


    const validateFormData = (data) => {

        

        let emailError = "";
        let passwordError = "";
        let nameError = "";
        let surnameError = "";

        // Validation for email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        {   
            emailError = "Invalid email!"
        }

        if (!email) {
            emailError = "Email must not be empty!"
        }
        
        // Validation for name/surname
        if (!name) {
            nameError = "Name must not be empty!"
        }

        if (!surname) {
            surnameError = "Surname must not be empty!"
        }
        
        // Validation for password
        let passErrors = [];
        if (password.length < 8) {
            passErrors.push("Your password must be at least 8 characters."); 
        }
        if (password.search(/[a-z]/i) < 0) {
            passErrors.push("Your password must contain at least one letter.");
        }
        if (password.search(/[0-9]/) < 0) {
            passErrors.push("Your password must contain at least one digit."); 
        }
        if (passErrors.length > 0) {
            passwordError = passErrors.join("\n")
        }

        // Change state if some error occured
        if (emailError) {
            setEmailError(emailError);
            return false;
        }

        if (nameError) {
            setNameError(nameError);
            return false;
        }

        if (surnameError) {
            setSurnameError(surnameError);
            return false;
        }

        if (passwordError) {
            setPasswordError(passwordError);
            return false;
        }

        return true;
    }



    const handleSubmit = (e) => {

        setSurnameError("");
        setNameError("");
        setPasswordError("");
        setEmailError("");

        e.preventDefault();
        const data = { email, name, surname, password };
        const isValidData = validateFormData();
        if (isValidData) {
            console.log(data);

            // Clear errors if the data is now valid (Not to confuse the user)
            setEmail("");
            setName("");
            setSurname("");
            setPassword("");
            setSurnameError("");
            setNameError("");
            setPasswordError("");
            setEmailError("");
        }
        
    }

    return (
        <div>
            <Navbar />
            <div className="login">
                <form id="login_form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter your email: </label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="error_msg">{emailError}</div>}
                    <label>Enter your name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <div className="error_msg">{nameError}</div>}
                    <label>Enter your surname: </label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    {surnameError && <div className="error_msg">{surnameError}</div>}
                    <label>Enter your password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <div className="error_msg">{passwordError}</div>}
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