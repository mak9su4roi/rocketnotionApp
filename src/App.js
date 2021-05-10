import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import SettingsView from "./views/SettingView";
import ProfileView from "./views/ProfileView";
import DashboardView from "./views/DashboardView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/dashboard">
          <DashboardView />
        </Route>
        <Route path="/settings">
          <SettingsView />
        </Route>
        <Route path="/profile">
          <ProfileView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
