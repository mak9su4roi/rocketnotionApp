import React from 'react'
import Footer from '../components/footerContainer/Footer'
import Navbar from '../components/navbarContainer/Navbar'
import SideMenu from '../components/sideMenuContainer/SideMenu'
import SettingsOptionsList from '../components/settingsContainer/SettingsOptionsList'

function SettingsView({ menuOptions }) {
    const settingsOptions = [
        ["Email: ", "bek@ucu.edu.ua", 1],
        ["First name: ", "Andrew", 2],
        ["Last name: ", "Bek", 3],
        ["Google Drive link: ", "https://developers.google.com/drive/api/v3/enable-drive-api", 4],
        ["Notion API secret: ", "fiofl23jiorjweiorf3oi2jr02irj3290rj23r09=", 5],
    ];

    return (
        <div>
            <Navbar />
            <div className="mainContainer">
                <SideMenu menuOptions={menuOptions} />
                <SettingsOptionsList data={settingsOptions} />
            </div>
            <Footer />
        </div>
    )
}

export default SettingsView
