import React from 'react'
import Button from './Button'

function SideMenu({ menuOptions, setActiveMenuOption }) {
    return (
        <div className="menu_button_container">
            {menuOptions.map((item) =>
                <Button setActiveMenuOption={setActiveMenuOption} key={item.id} title={item.title} url={item.url} active={item.isActive} />
            )};
        </div>
    )
}

export default SideMenu
