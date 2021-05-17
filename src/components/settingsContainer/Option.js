import React from 'react'

function Option({ option, value }) {
    return (
        <div className="setting_option">
            <span className="option">{option}</span>
            <span className="value">{value}</span>
        </div>
    )
}

export default Option
