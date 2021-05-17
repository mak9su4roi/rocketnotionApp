import React from 'react'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function File({ info, deleteCallback }) {
    const img_placeholder = "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=612x612&w=0&h=p8Qv0TLeMRxaES5FNfb09jK3QkJrttINH2ogIBXZg-c=";

    return (
        <div className="selected_file">
            <img src={img_placeholder} alt={info.image_name}></img>
            <p>
                <span>{info.image_name}</span>
            </p>
            <button onClick={() => deleteCallback(info.id)}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>
    )
}

export default File
