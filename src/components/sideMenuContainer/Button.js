import React from 'react'
import { Link } from 'react-router-dom';

function Button({ title, url, active}) {
    return (
        <div>
            {active && <div className=""> <Link to={url} className="menu_button menu_button_active" style={{ textDecoration: 'none' }}> {title} </Link> </div>}
            {!active && <div className=""> <Link to={url} className="menu_button menu_button_inactive" style={{ textDecoration: 'none' }}> {title} </Link> </div>}
        </div>

    )
}

export default Button
