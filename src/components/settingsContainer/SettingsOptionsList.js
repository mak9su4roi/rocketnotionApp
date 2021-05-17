import React from 'react'
import Option from './Option'
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SettingsOptionsList({ data }) {
    return (
        <div className="settings_list_container">
            <div className="header">User Data</div>

            {data.map(item =>
                <Option option={item[0]} value={item[1]} key={item[2]} />
            )}

            <button onClick={() => console.log("[INFO]: Changing the settings")} className="universal_button">
                <FontAwesomeIcon icon={faSlidersH} /> Change
            </button>
        </div>
    )
}

export default SettingsOptionsList
