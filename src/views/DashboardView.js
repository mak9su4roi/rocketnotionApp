import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '../components/footerContainer/Footer'
import Navbar from '../components/navbarContainer/Navbar'
import SideMenu from '../components/sideMenuContainer/SideMenu'
import RecentUploads from '../components/recentUploadsContainer/RecentUploads'
import SelectedFiles from '../components/selectedFilesContainer/SelectedFiles'

function DashboardView({menuOptions}) {
    const [uploads, setUploads] = useState([]);
    const [files, setFiles] = useState([]);

    const deleteUploadActivity = (id) => {
        const newUploads = uploads.filter((activity) => activity.id !== id);
        setUploads(newUploads);
    }
    const deleteSelectedFile = (id) => {
        const newSelectedFiles = files.filter((files) => files.id !== id);
        setFiles(newSelectedFiles);
    }


    useEffect(() => {
        const newUploads =
            [
                { activity: "Notion-GDrive", date: "2021/05/07", success: true, type: "auto", id: 1 },
                { activity: "Notion-GDrive", date: "2021/05/06", success: true, type: "manual", id: 2 },
                { activity: "Notion-GDrive", date: "2021/05/05", success: true, type: "auto", id: 3 },
            ];
        const newFiles =
            [
                {
                    image_src: "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=612x612&w=0&h=p8Qv0TLeMRxaES5FNfb09jK3QkJrttINH2ogIBXZg-c=",
                    image_name: "image_2021-05-17.png",
                    id: 1
                },
                {
                    image_src: "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=612x612&w=0&h=p8Qv0TLeMRxaES5FNfb09jK3QkJrttINH2ogIBXZg-c=",
                    image_name: "image_2021-05-17_2.png",
                    id: 2
                },
                {
                    image_src: "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=612x612&w=0&h=p8Qv0TLeMRxaES5FNfb09jK3QkJrttINH2ogIBXZg-c=",
                    image_name: "image_2021-05-17_3.png",
                    id: 3
                },
                {
                    image_src: "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=612x612&w=0&h=p8Qv0TLeMRxaES5FNfb09jK3QkJrttINH2ogIBXZg-c=",
                    image_name: "image_2021-05-17_4.png",
                    id: 4
                },
                {
                    image_src: "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=6&m=1222357475&s=612x612&w=0&h=p8Qv0TLeMRxaES5FNfb09jK3QkJrttINH2ogIBXZg-c=",
                    image_name: "image_2021-05-17_5.png",
                    id: 5
                },
            ];

        console.log("[INFO]: Downloaded the initial data.")

        setUploads(newUploads);
        setFiles(newFiles);
    }, [])

    return (
        <div>
            <Navbar />
            <div className="mainContainer">
                <SideMenu menuOptions={menuOptions} />
                <RecentUploads uploads={uploads} deleteActivityCallback={deleteUploadActivity} />
                <SelectedFiles files={files} deleteFileCallback={deleteSelectedFile} />
            </div>
            <Footer />
        </div>
    )
}

export default DashboardView
