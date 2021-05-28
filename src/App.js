import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DashboardView from "./views/DashboardView";
import SettingsView from "./views/SettingsView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";


function App() {
    const [menuOptions, setMenuOptions] = useState([]);

    
    useEffect(() => {
        const newMenuOptions = [
            { title: "Home", url: "/dashboard", isActive: false, id: 1 },
            { title: "Settings", url: "/settings", isActive: false, id: 2 },
            { title: "Sign out", url: "/login", isActive: false, id: 3 },
        ];
        setMenuOptions(newMenuOptions);
    }, [])

    return (

        
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/dashboard">
                        <DashboardView menuOptions={menuOptions} />
                    </Route>
                    <Route path="/settings">
                        <SettingsView menuOptions={menuOptions} />
                    </Route>
                    <Route path="/login">
                        <LoginView />
                    </Route>
                    <Route path="/register">
                        <RegisterView />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
