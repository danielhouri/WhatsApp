import React, { useState } from 'react';
import "./VideoPopUp.css"
import { addNewMessage } from '../../Tools';

function VideoPopUp(props) {
    const [videoSrc, setVideoSrc] = useState("");

    const handleVideo = () => {
        const d = new Date();
        let time = d.getHours() + ":" + d.getMinutes();
        let temp = URL.createObjectURL(videoSrc);
        addNewMessage(props.username, 'video', true, time, temp);
        props.setRefresh(props.refresh + 1);
    }

    const handleUpload = (e) => {
        setVideoSrc(e.target.files[0]);
    }

    return (
        <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" data-bs-dismiss="modal" onClick={handleVideo}>Upload</button>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept='video/*' id="inputGroupFile03" onChange={handleUpload} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPopUp;
