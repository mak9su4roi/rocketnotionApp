import React from 'react'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UploadActivity({ info, deleteCallback }) {
    const formatType = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <div className="upload_activity">
            <div className="upload_activity_transfer">
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1147px-Google_Drive_icon_%282020%29.svg.png" />
                <img alt="" src="https://www.materialui.co/materialIcons/hardware/keyboard_arrow_right_black_192x192.png" />
                <img alt="" src="https://img.icons8.com/ios/452/notion.png" />
            </div>
            <div className="upload_activity_details">
                <span>{formatType(info.type)} transfer at {info.date}</span>
            </div>
            <button onClick={() => deleteCallback(info.id)}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>
    )
}

export default UploadActivity
