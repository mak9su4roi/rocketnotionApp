import React from 'react'
import UploadActivity from './UploadActivity'

function RecentUploads({ uploads, deleteActivityCallback }) {
    return (
        <div className="recent_uploads_container">
            <div className="header">Upload History</div>
            {uploads.map(activity =>
                <UploadActivity deleteCallback={deleteActivityCallback} info={activity} key={activity.id} />
            )}
        </div>
    )
}

export default RecentUploads
