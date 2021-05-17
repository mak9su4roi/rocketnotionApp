import React from 'react'
import File from './File'
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SelectedFiles({ files, deleteFileCallback }) {

    return (
        <div>
            <div className="header">Selected files</div>
            <div className="selected_files_container">
                {files.map(file =>
                    <File info={file} key={file.id} deleteCallback={deleteFileCallback} />
                )}
            </div>
            {(files.length) && 
                <button onClick={() => console.log("[INFO]: Uploading pictures")} className="universal_button">
                    <FontAwesomeIcon icon={faUpload} />
                </button>
            }
        </div>
    )
}

export default SelectedFiles
